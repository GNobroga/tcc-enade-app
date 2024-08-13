import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TabComponent
  ],
  imports: [
    SharedModule,
    TabRoutingModule
  ]
})
export class TabModule { }
