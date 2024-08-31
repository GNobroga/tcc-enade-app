import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, signal, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';
import { Question } from '../../components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss'],
})
export class QuizResultComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('img', { read: ElementRef })
  starsIcons!: QueryList<ElementRef>;

  subscription = new Subscription();

  questions = signal<Question[]>([]);
  timer = signal<number[]>([0, 0, 0]);
  correctQuestionsId = signal<number[]>([]);

  constructor(readonly animationController: AnimationController, readonly router: Router) { }

  ngOnInit() {
    const { questions, timer, correctQuestionsId } = this.router.getCurrentNavigation()?.extras.state || {};
    this.questions.set(questions);
    this.timer.set(timer);
    this.correctQuestionsId.set(correctQuestionsId);
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

  justSeeQuestions() {
    this.router.navigate(['/quiz/started'], {
      queryParams: {
        just_see: true
      },
      state: {
        timer: this.timer(),
      },
    });
  }

  isCorrectQuestion(id: number) {
    return this.correctQuestionsId().includes(id);
  }

  async restart() {
    await this.router.navigate(['/quiz/started'], {
      queryParams: {
        restart: true,
      }
    });
  }

  async goToStudyPage() {
    await this.router.navigate(['/tabs/study'], {
      // skipLocationChange: true,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
