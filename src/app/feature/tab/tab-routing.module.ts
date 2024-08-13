import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AchievementComponent } from './pages/achievement/achievement.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    component: TabComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'achievement',
        component: AchievementComponent,
      },
      {
        path: 'ranking',
        component: RankingComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
