import { Component } from '@angular/core';
import { ChartDataset, LabelItem } from "chart.js";

@Component({
  selector: 'app-barras-doble',
  templateUrl: "./barras-doble.component.html"
})
export class BarrasDobleComponent {
  public proveedoresData: ChartDataset[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ];
  
  public proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  public productoData: ChartDataset[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  ];
}
