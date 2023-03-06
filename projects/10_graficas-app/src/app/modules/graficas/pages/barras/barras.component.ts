import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-barras',
  templateUrl: "./barras.component.html",
  styles: []
})
export class BarrasComponent {

  public chartLabels: string[] = [ '2023', '2024', '2025', '2026', '2027', '2028', '2029' ];
  public chartData: ChartDataset[] = [
    { data: Array(7).fill(0), label: 'Series A', backgroundColor: "#740AA6"},
    { data: Array(7).fill(0), label: 'Series B', backgroundColor: "#241199" },
    { data: Array(7).fill(0), label: 'Series C', backgroundColor: "#0A48A6" }
  ];
}
