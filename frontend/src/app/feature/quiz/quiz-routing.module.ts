import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuizSelectionComponent } from "./pages/quiz-selection/quiz-selection.component";
import { QuizCustomSelectionComponent } from "./pages/quiz-custom-selection/quiz-custom-selection.component";
import { QuizHistoryComponent } from "./pages/quiz-history/quiz-history.component";
import { QuizStartedComponent } from "./pages/quiz-started/quiz-started.component";
import { QuizResultComponent } from "./pages/quiz-result/quiz-result.component";

const routes: Routes = [
  {
    path: 'fundamentals-of-computing',
    component: QuizSelectionComponent,
    data: {
      title: 'Fundamentos da Computação',
      cssClass: 'bg-gradient-to-l from-[#59eb60] to-[#03a20b]',
    }
  },
  {
    path: 'infrastructure',
    component: QuizSelectionComponent,
    data: {
      title: 'Infraestrutura',
      cssClass: 'bg-gradient-to-l from-[#55e4c5] to-[#0851c7]',
    }
  },
  {
    path: 'programming-logic',
    component: QuizSelectionComponent,
    data: {
      title: 'Lógica de Programação',
      cssClass: 'bg-gradient-to-l from-[#ffb429] to-[#f15c17]',
    }
  },
  {
    path: 'information-security',
    component: QuizSelectionComponent,
    data: {
      title: 'Segurança da Informação',
      cssClass: 'bg-gradient-to-l from-[#9fe949] to-[#049a70]',
    }
  },
  {
    path: 'software-development',
    component: QuizSelectionComponent,
    data: {
      title: 'Desenvolvimento de Software',
      cssClass: 'bg-gradient-to-l from-[#2fd6e9] to-[#2b06d0]',
    }
  },
  {
    path: 'customized',
    component: QuizCustomSelectionComponent,
  },
  {
    path: 'history',
    component: QuizHistoryComponent,
  },
  {
    path: 'started',
    component: QuizStartedComponent,
  },
  {
    path: 'result',
    component: QuizResultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class QuizRoutingModule {}
