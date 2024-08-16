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
import { StudyPageComponent } from './pages/study-page/study-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NotepadPageComponent } from './pages/notepad-page/notepad-page.component';
import { CreateNotePageComponent } from './pages/notepad-page/create-note-page/create-note-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';


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
        path: 'study',
        component: StudyPageComponent,
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
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
  {
    path: 'notepad',
    component: NotepadPageComponent,
  },
  {
    path: 'create-note',
    component: CreateNotePageComponent,
  },
  {
    path: 'chat',
    component: ChatPageComponent,
  },
  {
    path: 'achievement',
    component: AchievementPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
