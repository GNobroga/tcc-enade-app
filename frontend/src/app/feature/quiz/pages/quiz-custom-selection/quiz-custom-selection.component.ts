import { Component, OnInit, signal } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-quiz-custom-selection',
  templateUrl: './quiz-custom-selection.component.html',
  styleUrls: ['./quiz-custom-selection.component.scss'],
})
export class QuizCustomSelectionComponent {

  public readonly count = signal(30);

  constructor() { }

  public onRangeChange(event: RangeCustomEvent) {
    this.count.set(event.detail.value as number);
  }


}
