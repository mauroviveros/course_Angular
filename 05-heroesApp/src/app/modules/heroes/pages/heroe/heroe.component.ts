import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  public heroe: Heroe | null = null;

  constructor(private activatedRoute: ActivatedRoute){

  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => console.log(id));
  }

}
