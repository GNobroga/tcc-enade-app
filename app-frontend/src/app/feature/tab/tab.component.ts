import { Component, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, map, Subscription } from "rxjs";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent implements OnDestroy, OnInit {

  public selectedTab = signal('');

  public readonly router = inject(Router);
  public readonly route = inject(ActivatedRoute);


  public subscription = new Subscription();

  public ngOnInit() {
    this.subscription.add(this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map((project: any) => project.url as string))
        .subscribe(url => {
          if (url === '/tabs/study') {
            this.selectedTab.set('study');
          }
      }));
  }

  public onChange(event: { tab: string }) {
    this.selectedTab.set(event.tab);
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
