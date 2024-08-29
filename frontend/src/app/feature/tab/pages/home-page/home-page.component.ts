import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { WeekdaySequenceDialogComponent } from '../../components/weekday-sequence-dialog/weekday-sequence-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {


  constructor(
    public readonly dialog: MatDialog
  ) { }


  public openWeekdaySequenceDialog() {
    this.dialog.open(WeekdaySequenceDialogComponent);
  }


}
