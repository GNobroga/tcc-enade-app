import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuWrapperComponent } from './components/menu-wrapper/menu-wrapper.component';


@NgModule({
  declarations: [
    TabComponent,
    HomePageComponent,
    MenuWrapperComponent
  ],
  imports: [
    SharedModule,
    TabRoutingModule
  ]
})
export default class TabModule { }
