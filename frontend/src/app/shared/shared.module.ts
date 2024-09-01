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

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    InputGroupModule,
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
  ],
})
export class SharedModule {}
