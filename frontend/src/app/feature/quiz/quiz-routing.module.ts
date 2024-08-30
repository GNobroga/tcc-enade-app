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
      cssClass: 'bg-gradient-to-r  from-[#7acf7e] to-[#47A34C]',
    }
  },
  {
    path: 'infrastructure',
    component: QuizSelectionComponent,
    data: {
      title: 'Infraestrutura',
      cssClass: 'bg-gradient-to-l  from-[#3ECFB0] to-[#4ABBC1]',
    }
  },
  {
    path: 'programming-logic',
    component: QuizSelectionComponent,
    data: {
      title: 'Lógica de Programação',
      cssClass: 'bg-gradient-to-l  from-[#FEB125] to-[#FB6822]',
    }
  },
  {
    path: 'information-security',
    component: QuizSelectionComponent,
    data: {
      title: 'Segurança da Informação',
      cssClass: 'bg-gradient-to-l  from-[#89C644] to-[#0AB193]',
    }
  },
  {
    path: 'software-development',
    component: QuizSelectionComponent,
    data: {
      title: 'Desenvolvimento de Software',
      cssClass: 'bg-gradient-to-l  from-[#39CCDC] to-[#578DE3]',
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
