import { Component, OnInit } from '@angular/core';

import { Flight } from '../../domain/flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css']
})
export class SearchResultListComponent implements OnInit {
  flights: Flight[];

  constructor(
    private flightService: FlightService
    ) { }

  async ngOnInit() {
      this.flights = await this.flightService.getFlights();
      console.log(this.flights);
  }

}
