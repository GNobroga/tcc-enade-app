import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.scss'],
})
export class ChangeNameComponent {

  constructor(
    readonly dialogRef: DynamicDialogRef
  ) { }

  save() {
    this.dialogRef.close(true);
  }

}
