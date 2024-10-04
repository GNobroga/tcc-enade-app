import { Component, HostListener, OnInit, QueryList, signal, ViewChildren } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  queries: {
    chatMessages: new ViewChildren(ChatMessageComponent)
  }
})
export class ChatPageComponent {

  chatMessages?: QueryList<ChatMessageComponent>;

  readonly messages = new Array(10);

  firstClick = signal(true);

  constructor() { }

  onScroll() {
    this.chatMessages?.forEach(chatMessage => chatMessage.menuClosed.set(true));
    this.firstClick.set(true);
  }

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent) {
    const chatMessage = this.chatMessages?.find(chatMessage => !chatMessage.menuClosed());
    if (!chatMessage) {
      this.firstClick.set(true);
      return;
    }

    if (this.firstClick()) {
      this.firstClick.set(false);
      return;
    };

    const target = event.target as HTMLElement;

    const parent = chatMessage.chatMenu.nativeElement;

    if (!this.targetEquals(parent, target)) {
      this.chatMessages?.forEach(chatMessage => chatMessage.menuClosed.set(true));
      this.firstClick.set(true);
    }
  }

  private targetEquals(el: Element, target: Element): boolean {
    if (el === target) return true;
    for (const child of Array.from(el.children)) {
      if (this.targetEquals(child, target)) {
        return true;
      }
    }
    return false;
  }

}
