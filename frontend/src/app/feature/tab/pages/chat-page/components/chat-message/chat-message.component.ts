import { Component, effect, ElementRef, Input, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { ChatPageComponent } from '../../chat-page.component';

export interface ChatMessageMenuItem {
  label: string;
  command: () => void;
}

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent {

  @Input()
  public isOwnMessage = false;

  menuClosed = signal(true);

  readonly items: ChatMessageMenuItem[] = [
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
    readonly router: Router,
    readonly parent: ChatPageComponent,
  ) {
    effect(() => {
      if (!this.menuClosed()) {
        this.parent.chatMessages?.forEach(chatMessage => {
          if (this !== chatMessage) {
            chatMessage.menuClosed.set(true);
          }

        });
      }
    }, { allowSignalWrites: true })
  }


}
