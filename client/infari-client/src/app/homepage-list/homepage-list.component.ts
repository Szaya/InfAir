import { Component, OnInit } from '@angular/core';

import { Flight } from '../../domain/flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-homepage-list',
  templateUrl: './homepage-list.component.html',
  styleUrls: ['./homepage-list.component.css']
})
export class HomepageListComponent implements OnInit {
  flights: Flight[];
  constructor(
    private flightService: FlightService
  ) { }

  async ngOnInit() {
    this.flights = await this.flightService.getFlights();
    console.log(this.flights);
  }

}
