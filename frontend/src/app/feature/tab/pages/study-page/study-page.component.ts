import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-study-page',
  templateUrl: './study-page.component.html',
  styleUrls: ['./study-page.component.scss'],
})
export class StudyPageComponent implements AfterViewInit {

  @ViewChildren('studyItem')
  public readonly studyItems!: QueryList<ElementRef>;

  constructor(
    public readonly animationController: AnimationController,
  ) {

  }



  public ngAfterViewInit() {
      this.studyItems.map(item => item.nativeElement)
      .forEach((element, position) => {
          this.createAnimation(element, (1 + position) * 150).play();
      });
  }

  public createAnimation(element: HTMLElement, delay: number) {
    return this.animationController.create()
    .addElement(element)
    .fromTo('opacity', '0', '1')
    .easing('ease')
    .duration(1000)
    .delay(delay)
    .fill('forwards');
  }

}
