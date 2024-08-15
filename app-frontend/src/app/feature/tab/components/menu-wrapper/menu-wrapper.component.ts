import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-menu-wrapper',
  templateUrl: './menu-wrapper.component.html',
  styleUrls: ['./menu-wrapper.component.scss'],
})
export class MenuWrapperComponent  {

  @Input({ required: true, })
  menuId!: string;

  constructor() { }


  public get menuContent() {
    return `menu-${this.menuId}`;
  }

}
