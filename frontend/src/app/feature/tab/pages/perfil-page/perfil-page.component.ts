import { DialogRef } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateNameDialogComponent } from '../../components/update-name-dialog/update-name-dialog.component';
import { AlertButton, AlertInput } from '@ionic/angular';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.scss'],
})
export class PerfilPageComponent {

  public closeAlertButtons: AlertButton[] = [
    {
      text: 'Não',
      role: 'no',
      cssClass: '!text-black',
      handler: () => {
        console.log("Não")
      }
    },
    {
      text: 'Sim',
      role: 'yes',
      cssClass: '!text-black',
      handler: () => {
        console.log("Sim")
      }
    },
  ];

  public deleteAlertButtons: AlertButton[] = [
    {
      text: 'Cancelar',
      role: 'yes',
      cssClass: '!text-black',
      handler: () => {
        console.log("Sim")
      }
    },
    {
      text: 'Sim, deletar minha conta.',
      role: 'no',
      cssClass: '!text-black',
      handler: () => {
        console.log("Não")
      }
    },
  ];

  constructor(
    public readonly dialogRef: MatDialog
  ) {}

  public openDialog() {
    this.dialogRef.open(UpdateNameDialogComponent);
  }

}
