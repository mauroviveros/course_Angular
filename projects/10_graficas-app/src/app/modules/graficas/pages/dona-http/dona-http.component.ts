import { Component } from "@angular/core";
import { ChartData, ChartDataset, ChartType } from "chart.js/dist/types/index";
import { GraficasService } from "../../services/graficas.service";

@Component({
  selector: "app-dona-http",
  templateUrl: "./dona-http.component.html",
  styles: [`
    .row{ justify-content: center; }
    .col{ max-width: 50% }
  `]
})
export class DonaHttpComponent {

  public doughnutChartType: ChartType = "doughnut";
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartDataset[] = [];

  constructor(
    private graficasService: GraficasService
  ){}

  ngOnInit(){
    this.graficasService.getUsersRRSS().subscribe(data => {
      this.doughnutChartLabels = Object.keys(data);
      this.doughnutChartData[0] = { data: Object.values(data) };
    })
  }
}
