import { Component, OnInit, signal } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss'],
})
export class CommunityPage {

  countItems = new Array(10);

  readonly menuId = 'menu-community';

  constructor(readonly menuController: MenuController) { }

  showMenu() {
    this.menuController.open(this.menuId);
  }

  closeMenu() {
    this.menuController.close(this.menuId);
  }

}
