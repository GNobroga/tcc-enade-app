import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuizSelectionComponent } from "./pages/quiz-selection/quiz-selection.component";
import { QuizCustomSelectionComponent } from "./quiz-custom-selection/quiz-custom-selection.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'selection'
  },
  {
    path: 'selection',
    component: QuizSelectionComponent,
  },
  {
    path: 'custom-selection',
    component: QuizCustomSelectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class QuizRoutingModule {}
