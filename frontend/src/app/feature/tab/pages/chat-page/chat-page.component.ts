import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
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
export class ChatPageComponent  implements OnInit {

  chatMessages?: QueryList<ChatMessageComponent>;

  readonly messages = new Array(10);

  constructor() { }

  ngOnInit() {}

}
