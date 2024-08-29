import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import QuizRoutingModule from './quiz-routing.module';
import { QuizSelectionComponent } from './pages/quiz-selection/quiz-selection.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizCustomSelectionComponent } from './pages/quiz-custom-selection/quiz-custom-selection.component';
import { QuizHistoryComponent } from './pages/quiz-history/quiz-history.component';


@NgModule({
  declarations: [
    QuizSelectionComponent,
    QuizCustomSelectionComponent,
    QuizHistoryComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule
  ]
})
export default class QuizModule { }
