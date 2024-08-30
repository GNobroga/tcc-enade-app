import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingPageComponent } from './shared/pages/loading-page/loading-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'account',
    loadChildren: () => import('./feature/login/login.module'),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./feature/tab/tab.module'),
  },
  {
    path: 'welcome',
    loadChildren: () => import('./feature/welcome/welcome.module'),
  },
  {
    path: 'quiz',
    loadChildren: () => import('./feature/quiz/quiz.module'),
  },
  {
    path: 'loading',
    component: LoadingPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: PreloadAllModules,
        bindToComponentInputs: true
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
