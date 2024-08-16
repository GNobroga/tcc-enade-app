import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-create-note-page',
  templateUrl: './create-note-page.component.html',
  styleUrls: ['./create-note-page.component.scss'],
})
export class CreateNotePageComponent  implements OnInit {

  public headerColor = signal('black');
  public readonly colorButtons = [
    'cadetblue',
    'cornflowerblue',
    'darkseagreen',
    'mediumseagreen',
    'mediumslateblue',
    'rosybrown',
    'lightcoral',
    'darkkhaki',
    'goldenrod',
    'lightsteelblue',
    'mediumpurple',
    'darksalmon',
    'peru',
    'tan',
    'indianred',
    'lightseagreen'
  ];


  constructor() { }

  ngOnInit() {}

  public changeColor(color: string) {
    this.headerColor.set(color);
  }

}
