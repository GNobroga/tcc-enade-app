import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { AccountCreatedComponent } from './pages/account-created/account-created.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'register',
        component: CreateAccountPageComponent,
      }
    ],
  },
  {
    path: 'created',
    component: AccountCreatedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
