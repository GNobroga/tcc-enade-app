import { AfterViewInit, Component, computed, inject, Input, OnInit, signal } from '@angular/core';
import { QuizStartedComponent } from '../../pages/quiz-started/quiz-started.component';
import { first } from 'rxjs';
import { ViewDidEnter } from '@ionic/angular';

export type Alternative = {
  id: number;
  label: string;
};

export type Asking = {
  title: string;
  body?: string[];
  footer?: string;
};

export type Question = {
  id: number;
  title: string;
  content: string;
  photos?: string[];
  asking: Asking;
  alternatives: Alternative[];
  correctId: number;
};

const ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];


@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss'],
})
export class QuizQuestionComponent implements OnInit, AfterViewInit {

  @Input({ required: true })
  data!: Question;

  selectedAlternativeId = signal<number | null>(null);

  scrollEnd = signal(false);

  scrollSize = signal(-1);

  isCorrect = computed(() => this.selectedAlternativeId() === this.data.correctId);

  parent = inject(QuizStartedComponent);

  ngOnInit() {
    this.parent.disableButton.set(true);
  }

  ngAfterViewInit() {
    this.parent.ionContent?.ionScroll.subscribe(event => {
      if (event.detail.startY < this.scrollSize()) {
        this.scrollEnd.set(false);
      }

      if (this.scrollEnd()) {
        this.scrollSize.set(event.detail.startY);
      }
    });
  }

  getOrder(index: number) {
    if (index < 0 || index >= ALPHABET.length) {
      throw new Error('O índice deve estar entre 0 e o comprimento do alfabeto menos 1.');
    }
    return ALPHABET[index];
  }

  markAnswer(id: number) {
    this.selectedAlternativeId.set(id);
    this.parent.disableButton.set(false);
    if (this.scrollSize() > -1 || !this.scrollEnd()) {
      this.parent.ionContent.scrollToBottom(400);
      this.scrollEnd.set(true);
    }
  }

  getAlternativeStatusClass(alternativeId: number) {
    if (this.parent.isJustSee()) {
      if (this.data.correctId === alternativeId) {
        return { correct: true };
      }

      return { wrong: true };
    }

    return {
      selected: this.selectedAlternativeId() === alternativeId,
    };
  }

  get correct() {
    return this.parent.listCorrectQuestionsId().includes(this.data.correctId);
  }


  getQuestionStatusClass() {
    if (!this.parent.isJustSee()) return {};
    return {
      'is-wrong': !this.correct,
      'is-correct': this.correct,
    };
  }
}
