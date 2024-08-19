import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import QuizRoutingModule from './quiz-routing.module';
import { QuizSelectionComponent } from './pages/quiz-selection/quiz-selection.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizCustomSelectionComponent } from './quiz-custom-selection/quiz-custom-selection.component';


@NgModule({
  declarations: [
    QuizSelectionComponent,
    QuizCustomSelectionComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule
  ]
})
export default class QuizModule { }
