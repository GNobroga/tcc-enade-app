import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss'],
})
export class RankingPageComponent  implements  AfterViewInit {

  @ViewChildren('personRank')
  children!: QueryList<ElementRef>;

  constructor(
    public readonly animationController: AnimationController
  ) { }

  public ngAfterViewInit(): void {
      this.children?.forEach((e, index) => this.animateElement(e.nativeElement, (index + 1) * 500));
  }

  public animateElement(e: HTMLElement, duration: number) {
    this.animationController.create()
    .addElement(e)
    .fromTo('transform', 'translateY(2rem)', 'translateY(0)')
    .fromTo('opacity', '0', '1')
    .easing('ease-in-out')
    .duration(duration)
    .fill('forwards')
    .play();

  }

}
