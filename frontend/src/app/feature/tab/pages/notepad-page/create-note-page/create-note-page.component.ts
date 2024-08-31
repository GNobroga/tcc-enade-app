import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-note-page',
  templateUrl: './create-note-page.component.html',
  styleUrls: ['./create-note-page.component.scss'],
})
export class CreateNotePageComponent  implements OnInit {
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

  public headerColor = signal(this.colorButtons[0]);

  form = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {}

  public changeColor(color: string) {
    this.headerColor.set(color);
  }

}
