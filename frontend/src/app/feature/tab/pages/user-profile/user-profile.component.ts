import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [MessageService]
})
export class UserProfileComponent  {

  readonly items: MenuItem[] = [
    {
      label: 'Adicionar amigo',
      command: () => {
        this.messageService.add({severity: 'info', summary: 'Solicitação', detail: 'enviada com sucesso!'});
      },
    },
    {
      label: 'Remover amigo',
      command: () => {
        this.messageService.add({severity: 'success', summary: 'Exclusão', detail: 'removido com sucesso!'});
      },
    },
  ];

  constructor(
    readonly messageService: MessageService
  ) { }


}
