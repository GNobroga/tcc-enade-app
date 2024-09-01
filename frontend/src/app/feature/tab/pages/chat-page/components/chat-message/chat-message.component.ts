import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent  implements OnInit {

  @Input()
  public isOwnMessage = false;



  readonly items: MenuItem[] = [
    {
      label: 'Ver perfil',
      command: () => {
        this.router.navigate(['tabs', 'profile']);
      },
    },
    {
      label: 'Bate papo',
      command: () => {

      },
    },
  ];

  constructor(
    readonly router: Router
  ) { }

  ngOnInit() {}

}
