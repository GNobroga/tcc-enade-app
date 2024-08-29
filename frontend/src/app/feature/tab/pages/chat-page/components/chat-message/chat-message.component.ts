import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent  implements OnInit {

  @Input()
  public isOwnMessage = false;

  constructor() { }

  ngOnInit() {}

}
