import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, LoadingController } from '@ionic/angular';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {

  constructor(
    readonly loadingController: LoadingController,
    readonly router: Router
  ) {

  }

  public async showLoading() {
    const loading = await this.loadingController.create({
      duration: 1000,
    });

    await loading.present();
    this.router.navigate(['/tabs']);
  }
}
