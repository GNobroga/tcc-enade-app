import { Component } from '@angular/core';
import { AlertButton } from '@ionic/angular';
import { DialogService } from 'primeng/dynamicdialog';
import { ChangeNameComponent } from '../../components/change-name/change-name.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.scss'],
  providers: [DialogService, MessageService]
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
    readonly dialogService: DialogService,
    readonly messageService: MessageService
  ) {}

  public showDialog() {
    const ref = this.dialogService.open(ChangeNameComponent, {
      header: 'Atualizar nome',
      modal: true,
      width: '95vw',
      styleClass: 'bg-red-500',
      position: 'center',
    });

    ref.onClose.subscribe(result => {
      if (result) {
        this.messageService.add({
          severity: 'info',
          summary: 'Atualização', detail: 'Nome atualizado!',
          styleClass: 'left-0'
        });
      }
    });
  }

  values = ['Gabriel']

}
