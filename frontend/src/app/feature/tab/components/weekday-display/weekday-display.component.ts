import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeekdaySequenceDialogComponent } from '../weekday-sequence-dialog/weekday-sequence-dialog.component';

@Component({
  selector: 'app-weekday-display',
  templateUrl: './weekday-display.component.html',
  styleUrls: ['./weekday-display.component.scss'],
})
export class WeekdayDisplayComponent  {

  constructor(
    public readonly dialog: MatDialog
  ) { }


  public openDialog() {
    this.dialog.open(WeekdaySequenceDialogComponent);
  }

}
