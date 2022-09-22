import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'dialog-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public heroe: Heroe) { }
}
