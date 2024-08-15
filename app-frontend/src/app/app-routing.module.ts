import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
