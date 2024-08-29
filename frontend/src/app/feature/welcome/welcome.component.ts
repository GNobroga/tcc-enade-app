import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent  implements OnInit {

  constructor(
    public readonly platform: Platform,
    public readonly routerOutlet: IonRouterOutlet
  ) {}

  public ngOnInit() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(10, () => {
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
          this.routerOutlet.pop();
        } else {
          App.exitApp();
        }
      });
    });
  }

}
