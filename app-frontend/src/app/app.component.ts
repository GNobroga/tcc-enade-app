import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'src/firebase/firebase.config';

initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
})
export class AppComponent {
  constructor() {}
}
