import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, signal, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, ViewDidEnter } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { interval, Subscription } from 'rxjs';
import { AppState, selectQuizResultData } from 'src/app/store';
import { resetQuizResultData, setQuizResultData } from 'src/app/store/actions/quiz-result.actions';
import { Question } from '../../components/quiz-question/quiz-question.component';
import { QuizResultDialogComponent } from '../../components/quiz-result-dialog/quiz-result-dialog.component';

export const QUIZ_RESULT_STATE_KEY = 'quiz_result_state';

export interface QuizResultState {
  questions?: Question[];
  timer: number[];
  correctQuestionsId: number[];
  showDialog?: boolean;
  review?: boolean;
}

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss'],
})
export class QuizResultComponent implements ViewDidEnter, AfterViewInit, OnDestroy {

  @ViewChildren('img', { read: ElementRef })
  starsIcons!: QueryList<ElementRef>;

  subscription = new Subscription();

  questions = signal<Question[]>([]);
  timer = signal<number[]>([0, 0, 0]);
  correctQuestionsId = signal<number[]>([]);

  constructor(
    readonly animationController: AnimationController,
    readonly route: ActivatedRoute,
    readonly router: Router,
    readonly dialog: MatDialog,
    readonly store: Store<AppState>
  ) { }

  ionViewDidEnter() {
    const data = this.store.selectSignal(selectQuizResultData)();
    if (!data) return;
    const { questions = [], timer, correctQuestionsId, showDialog = true } = data;
    this.questions.set(questions);
    this.timer.set(timer);
    this.correctQuestionsId.set(correctQuestionsId);

    if (!showDialog) {
      return;
    }

    if (correctQuestionsId.length === questions.length) {
      this.dialog.open(QuizResultDialogComponent, {
        data: {
          type: 'good-job',
        }
      });
    } else if (correctQuestionsId.length >= questions.length / 2) {
      this.dialog.open(QuizResultDialogComponent, {
        data: {
          type: 'good-effort',
        }
      });
    } else {
      this.dialog.open(QuizResultDialogComponent, {
        data: {
          type: 'failure',
        }
      });
    }

  }

  ngAfterViewInit() {
    interval(3000)
      .subscribe(() => {
        this.starsIcons.forEach((star, index) => {
          this.animationController.create()
            .addElement(star.nativeElement)
            .duration(1000)
            .iterations(1)
            .fromTo('transform', 'scale(0)', 'scale(1)')
            .delay(index * 500)
            .play();
        });
      });
  }

  get timerFormatted() {
    const [hours, minutes, seconds] = this.timer();
    const hoursString = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : '';
    return `${hoursString}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  get percentageHits() {
    return (this.correctQuestionsId().length / this.questions().length);
  }

  reviewQuestions() {
    this.store.dispatch(setQuizResultData({
      review: true,
      timer: this.timer(),
      correctQuestionsId: this.correctQuestionsId(),
    } as QuizResultState))
    this.router.navigate(['/quiz/started']);
  }

  isCorrectQuestion(id: number) {
    return this.correctQuestionsId().includes(id);
  }

  async restart() {
    this.store.dispatch(resetQuizResultData());
    await this.router.navigate(['/quiz/started']);
  }

  async goToStudyPage() {
    this.store.dispatch(resetQuizResultData());
    await this.router.navigate(['/tabs/study']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
