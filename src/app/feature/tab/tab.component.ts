import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {

  public selectedTab = signal('');

  public onChange(event: { tab: string }) {
    this.selectedTab.set(event.tab);
  }
}
