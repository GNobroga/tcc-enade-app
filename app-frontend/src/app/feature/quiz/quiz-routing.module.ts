import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuizSelectionComponent } from "./pages/quiz-selection/quiz-selection.component";
import { QuizCustomSelectionComponent } from "./quiz-custom-selection/quiz-custom-selection.component";

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class QuizRoutingModule {}
