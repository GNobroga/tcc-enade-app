import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss'],
})
export class StatisticPageComponent  implements OnInit {

  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
          datasets: [
              {
                  data: [11, 16, 7, 3, 14],
                  backgroundColor: [
                      documentStyle.getPropertyValue('--red-500'),
                      documentStyle.getPropertyValue('--green-500'),
                      documentStyle.getPropertyValue('--yellow-500'),
                      documentStyle.getPropertyValue('--bluegray-500'),
                      documentStyle.getPropertyValue('--blue-500'),
                  ],
                  label: 'My dataset'
              }
          ],
          labels: ['lógica', 'computação', 'software', 'segurança', 'infraestrutura']
      };

      this.options = {
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              r: {
                  grid: {
                      color: surfaceBorder
                  }
              }
          }
      };
  }


}
