import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import QuizRoutingModule from './quiz-routing.module';
import { QuizSelectionComponent } from './pages/quiz-selection/quiz-selection.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizCustomSelectionComponent } from './pages/quiz-custom-selection/quiz-custom-selection.component';
import { QuizHistoryComponent } from './pages/quiz-history/quiz-history.component';
import { QuizStartedComponent } from './pages/quiz-started/quiz-started.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { QuizResultComponent } from './pages/quiz-result/quiz-result.component';
import { QuizResultDialogComponent } from './components/quiz-result-dialog/quiz-result-dialog.component';


@NgModule({
  declarations: [
    QuizSelectionComponent,
    QuizCustomSelectionComponent,
    QuizHistoryComponent,
    QuizStartedComponent,
    QuizQuestionComponent,
    QuizResultComponent,
    QuizResultDialogComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class QuizModule { }
