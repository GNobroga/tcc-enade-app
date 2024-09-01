import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { AnimationController, LoadingController } from '@ionic/angular';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [MessageService],
})
export class LoginPageComponent {

  loading = signal(false);

  constructor(
    readonly loadingController: LoadingController,
    readonly messageService: MessageService,
    readonly router: Router
  ) {

  }

  signIn(email: string, password: string) {
    if (!email || !password) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Preencha todos os campos',
      });
    }

    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.router.navigate(['tabs']);
    }, 3000);
  }

}
