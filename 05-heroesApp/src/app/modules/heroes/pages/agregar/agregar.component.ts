import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher, PublisherDescription } from "../../interfaces/heroe.interface";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  public publishers: PublisherDescription[] = [
    {
      id: Publisher.DCComics,
      description: "DC - Comics"
    },
    {
      id: Publisher.MarvelComics,
      description: "Marvel - Comics"
    }
  ];

  public heroe: Heroe | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
