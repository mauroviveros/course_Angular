import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: "./dona.component.html",
  styles: [`
    .row{ justify-content: center; }
    .col{ max-width: 50% }
  `]
})
export class DonaComponent {
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [ { data: [ 350, 450, 100 ] }]
  };
}
