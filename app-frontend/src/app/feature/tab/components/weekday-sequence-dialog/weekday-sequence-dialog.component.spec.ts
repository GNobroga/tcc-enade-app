import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeekdaySequenceDialogComponent } from './weekday-sequence-dialog.component';

describe('WeekdaySequenceDialogComponent', () => {
  let component: WeekdaySequenceDialogComponent;
  let fixture: ComponentFixture<WeekdaySequenceDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekdaySequenceDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeekdaySequenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
