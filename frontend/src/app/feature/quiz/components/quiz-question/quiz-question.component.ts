import { Component, computed, DoCheck, effect, inject, input, Input, OnInit, signal } from '@angular/core';
import { QuizStartedComponent } from '../../pages/quiz-started/quiz-started.component';

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
export class QuizQuestionComponent implements OnInit {

  @Input({ required: true })
  data!: Question;

  selectedAlternativeId = signal<number | null>(null);

  isCorrect = computed(() => this.selectedAlternativeId() === this.data.correctId);

  parent = inject(QuizStartedComponent);

  ngOnInit() {
    this.parent.disableButton.set(true);
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
  }

  getAlternativeStatusClass(alternativeId: number) {
    const isSelected = this.selectedAlternativeId() === alternativeId;
    if (!this.parent.checkIfIsCorrect()) {
      return {
        selected: isSelected,
      }
    }

    return {
      correct: isSelected && this.isCorrect(),
      wrong: isSelected && !this.isCorrect(),
    }
  }

  getQuestionStatusClass() {
    if (!this.parent.checkIfIsCorrect()) {
      return {}; // retornar nenhum estilo
    }

    return {
      'is-correct': this.isCorrect(),
      'is-wrong': !this.isCorrect(),
    };
  }
}
