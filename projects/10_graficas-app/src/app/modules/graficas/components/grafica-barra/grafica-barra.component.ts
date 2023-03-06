import { Component, ViewChild, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType, LabelItem } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: "./grafica-barra.component.html"
})
export class GraficaBarraComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective = {} as BaseChartDirective;
  @Input() public barChartData: ChartDataset[] = [];
  @Input() public barChartLabels: string[] = [];
  @Input() public horizontal: boolean = false;
  public barChartType: ChartType = 'bar';
  public barChartOptions: ChartConfiguration['options'] = { responsive: true };

  ngOnInit(){
    if(this.horizontal && this.barChartOptions){
      this.barChartOptions.indexAxis = "y";
    }
  }

  ngAfterViewInit(){
    this.randomize();
  }

  public randomize(): void {
    for(let i = 0; i < this.barChartData.length; i++){
      this.barChartData[i].data = this.barChartData[i].data.map(()=> {
        return Math.round(Math.random() * 100);
      });
    };

    console.log(this.barChartData);

    this.chart?.update();
  };
}
