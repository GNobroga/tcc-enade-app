import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { IonicModule } from '@ionic/angular';
import { ChartModule } from 'primeng/chart';
import { EditorModule } from 'primeng/editor';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { MessagesModule } from 'primeng/messages';
import { BadgeModule } from 'primeng/badge';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    InputGroupModule,
    CardModule,
    TagModule,
    ToggleButtonModule,
    TabViewModule,
    MenuModule,
    IconFieldModule,
    SplitButtonModule,
    InputIconModule,
    ChipModule,
    RippleModule,
    AvatarModule,
    MessagesModule,
    AvatarGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ToastModule,
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    MatRippleModule,
    ChartModule,
    CommonModule,
    ImageModule,
    EditorModule,
    FileUploadModule,
    ButtonModule,
    MatButtonModule,
    MatDialogModule,
    DividerModule,
    CarouselModule,
    BadgeModule
  ],
})
export class SharedModule {}
