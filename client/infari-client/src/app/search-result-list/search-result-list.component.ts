import { Component, OnInit, Input } from '@angular/core';

import { Flight } from '../../domain/flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css']
})
export class SearchResultListComponent implements OnInit {
  @Input('searchby') searchBy: string = null;
  @Input('searchfor') searchFor: string = null;
  
  flights: Flight[];

  constructor(
    private flightService: FlightService
    ) { }

  ngOnInit() {
  }

  async searchChanged (searchBy, searchFor) {
    this.searchBy = searchBy;
    this.searchFor = searchFor;

    if (this.searchBy == null || this.searchFor == null ) {
      this.flights =  [];
    } else if (this.searchBy == 'startpoint') {
      this.flights = await this.flightService.getFlightsByStartpoint(this.searchFor);
    } else if (this.searchBy == 'endpoint') {
      this.flights = await this.flightService.getFlightsByEndpoint(this.searchFor);
    } else if (this.searchBy == 'launch') {
      this.flights = await this.flightService.getFlightsByLaunch(this.searchFor);
    } else if (this.searchBy == 'arrival') {
      this.flights = await this.flightService.getFlightsByArrival(this.searchFor);
    } else if (this.searchBy == 'cost') {
      this.flights = await this.flightService.getFlightsBySale(parseInt(this.searchFor));
    } else if (this.searchBy == 'sale') {
      this.flights = await this.flightService.getFlightsBySale(parseInt(this.searchFor));
    } 
  }
}
