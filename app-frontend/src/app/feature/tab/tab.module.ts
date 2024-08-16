import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { AchievementPageComponent } from './pages/achievement-page/achievement-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';
import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { MyDataPageComponent } from './pages/my-data-page/my-data-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { WeekdayDisplayComponent } from './components/weekday-display/weekday-display.component';
import { WeekdaySequenceDialogComponent } from './components/weekday-sequence-dialog/weekday-sequence-dialog.component';
import { UpdateNameDialogComponent } from './components/update-name-dialog/update-name-dialog.component';
import { StudyPageComponent } from './pages/study-page/study-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NotepadPageComponent } from './pages/notepad-page/notepad-page.component';
import { CreateNotePageComponent } from './pages/notepad-page/create-note-page/create-note-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ChatMessageComponent } from './pages/components/chat-message/chat-message.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    TabComponent,
    HomePageComponent,
    AchievementPageComponent,
    RankingPageComponent,
    PerfilPageComponent,
    StatisticPageComponent,
    MyDataPageComponent,
    StorePageComponent,
    WeekdayDisplayComponent,
    WeekdaySequenceDialogComponent,
    UpdateNameDialogComponent,
    StudyPageComponent,
    SearchPageComponent,
    NotepadPageComponent,
    CreateNotePageComponent,
    ChatPageComponent,
    ChatMessageComponent
  ],
  imports: [
    SharedModule,
    TabRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class TabModule { }
