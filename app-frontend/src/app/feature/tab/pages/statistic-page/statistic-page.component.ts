import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss'],
})
export class StatisticPageComponent  implements OnInit {

  data!: ChartData;

  options!: ChartOptions;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);

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
          labels: ['lógica', 'computação', 'software', 'segurança', 'infraestrutura'],
      };

      this.options = {
          plugins: {
              legend: {
                  labels: {
                      color: 'white'
                  }
              }
          },
          scales: {
              r: {
                  grid: {
                      color: 'white'
                  }
              }
          }
      };
  }


}
