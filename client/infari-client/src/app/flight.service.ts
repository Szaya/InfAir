import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Flight } from '../domain/flight';

const httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
    })
};

@Injectable({
  providedIn: 'root'
})
export class FlightService {

    private flightUrl = 'http://localhost:8080//flights';

  constructor( 
      private http: HttpClient 
    ) { }

  async getFlights() {
      const flights = await (this.http.get(this.flightUrl)
      .toPromise() as Promise<any[]>);
    return flights.map(this.createFlightModel);
  }

  private createFlightModel(flight: any): Flight {
    return {
      ...flight,
      createdAt: new Date(flight.createdAt),
    } as Flight;
  }
}
