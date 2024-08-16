import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-create-note-page',
  templateUrl: './create-note-page.component.html',
  styleUrls: ['./create-note-page.component.scss'],
})
export class CreateNotePageComponent  implements OnInit {

  public headerColor = signal('black');

  public readonly colorButtons = [
      'black',
      'darkred',
      'maroon',
      'darkgreen',
      'olive',
      'navy',
      'darkblue',
      'indigo',
      'darkslategray',
      'teal',
      'darkmagenta',
      'chocolate',
      'saddlebrown',
      'midnightblue',
      'darkviolet',
      'darkorange'
  ];

  constructor() { }

  ngOnInit() {}

  public changeColor(color: string) {
    this.headerColor.set(color);
  }

}
