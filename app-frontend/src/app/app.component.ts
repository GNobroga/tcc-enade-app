import { Component } from '@angular/core';
import { register } from 'swiper/element';

register();


@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
})
export class AppComponent {

}
