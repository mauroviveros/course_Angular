import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  public nombreLower    : string = "mauro";
  public nombreUpper    : string = "MAURO";
  public nombreCompleto : string = "mAuRo ViVeRoS";

  public fecha: Date = new Date();
}
