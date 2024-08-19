import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.scss'],
})
export class QuizSelectionComponent {

  @Input()
  title!: string;

  @Input()
  cssClass!: string;

  // coloca um input type pra identifacar a categoria as provas delas

  constructor() { }
}
