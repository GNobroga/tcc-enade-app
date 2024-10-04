import { AfterViewChecked, Component, effect, ElementRef, HostListener, Input, OnInit, Renderer2, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { ChatPageComponent } from '../../chat-page.component';
import ChatMenuComponent from '../chat-menu/chat-menu.component';

export interface ChatMessageMenuItem {
  label: string;
  command: () => void;
}

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
  queries: {
    chatMenu: new ViewChild(ChatMenuComponent, { read: ElementRef }),
  }
})
export class ChatMessageComponent {

  @Input()
  public isOwnMessage = false;

  menuClosed = signal(true);

  chatMenu!: ElementRef<HTMLElement>;

  readonly items: ChatMessageMenuItem[] = [
    {
      label: 'Ver perfil',
      command: () => {
        this.menuClosed.set(true);
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
            this.parent.firstClick.set(true);
          }

        });
      }
    }, { allowSignalWrites: true })
  }

}
