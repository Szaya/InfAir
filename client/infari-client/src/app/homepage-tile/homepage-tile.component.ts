import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Flight } from '../../domain/flight';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-homepage-tile',
  templateUrl: './homepage-tile.component.html',
  styleUrls: ['./homepage-tile.component.css']
})
export class HomepageTileComponent implements OnInit {

  @Input('value') flight: Flight;

  tiles: Tile[] = [
    {cols: 1, rows: 1, color: 'lightblue'},
    {cols: 1, rows: 1, color: 'lightgreen'},
    {cols: 2, rows: 2, color: 'lightpink'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
