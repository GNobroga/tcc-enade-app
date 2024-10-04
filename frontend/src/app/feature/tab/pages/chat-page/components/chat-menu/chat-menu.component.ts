import { Component, input, Input } from "@angular/core";


export interface ChatMenuItem {
  label: string;
  command: () => void;
}


@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrl: './chat-menu.component.scss'
})
export default class ChatMenuComponent {

  menuClosed = input(false);

  @Input()
  items: ChatMenuItem[] = [];
}
