import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuWrapperComponent } from './components/menu-wrapper/menu-wrapper.component';
import { AchievementComponent } from './pages/achievement/achievement.component';
import { RankingComponent } from './pages/ranking/ranking.component';


@NgModule({
  declarations: [
    TabComponent,
    HomePageComponent,
    MenuWrapperComponent,
    AchievementComponent,
    RankingComponent
  ],
  imports: [
    SharedModule,
    TabRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class TabModule { }
