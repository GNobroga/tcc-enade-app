import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AchievementPageComponent } from './pages/achievement-page/achievement-page.component';
import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { MyDataPageComponent } from './pages/my-data-page/my-data-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';


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
        component: AchievementPageComponent,
      },
      {
        path: 'ranking',
        component: RankingPageComponent,
      },
      {
        path: 'perfil',
        component: PerfilPageComponent,
      },
    ],
  },
  {
    path: 'statistic',
    component: StatisticPageComponent,
  },
  {
    path: 'my-data',
    component: MyDataPageComponent,
  },
  {
    path: 'store',
    component: StorePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
