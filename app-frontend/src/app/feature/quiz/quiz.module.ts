import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import QuizRoutingModule from './quiz-routing.module';
import { QuizSelectionComponent } from './pages/quiz-selection/quiz-selection.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    QuizSelectionComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule
  ]
})
export default class QuizModule { }
