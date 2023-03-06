import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barras',
  templateUrl: "./barras.component.html",
  styles: []
})
export class BarrasComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective = {} as BaseChartDirective;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: { x: {}, y: { min: 10 } },
    plugins: {
      legend: { display: true, },
      datalabels: { anchor: 'end', align: 'end' }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [ DataLabelsPlugin ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2023', '2024', '2025', '2026', '2027', '2028', '2029' ],
    datasets: [
      { data: Array(7).fill(0), label: 'Series A', backgroundColor: "#740AA6"},
      { data: Array(7).fill(0), label: 'Series B', backgroundColor: "#241199" },
      { data: Array(7).fill(0), label: 'Series C', backgroundColor: "#0A48A6" }
    ]
  };

  ngOnInit(){
    this.randomize();
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void { console.log(event, active); }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void { console.log(event, active); }

  public randomize(): void {
    for(let i = 0; i < this.barChartData.datasets.length; i++){
      this.barChartData.datasets[i].data = this.barChartData.datasets[i].data.map(()=> {
        return Math.round(Math.random() * 100);
      });
    };

    this.chart?.update();
  };
}
