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

  
  async getFlightByID(id: Number) {
      const flight = await (this.http.get(this.flightUrl + "//" + id)
      .toPromise() as Promise<any[]>);
    return this.createFlightModel(flight);
  }

  async getFlightsByStartpoint (startpoint: string) {
    const flights = await (this.http.get(this.flightUrl + '//Startpoint//' + startpoint)
    .toPromise() as Promise<any[]>);
  return flights.map(this.createFlightModel);
  }

  async getFlightsByEndpoint (endpoint: string) {
    const flights = await (this.http.get(this.flightUrl + '//Endpoint//' + endpoint)
    .toPromise() as Promise<any[]>);
  return flights.map(this.createFlightModel);
  }

  async getFlightsByLaunch (launch: string) {
    const flights = await (this.http.get(this.flightUrl + '//Launch//' + launch)
    .toPromise() as Promise<any[]>);
  return flights.map(this.createFlightModel);
  }

  async getFlightsByArrival (arrival: string) {
    const flights = await (this.http.get(this.flightUrl + '//Arrival//' + arrival)
    .toPromise() as Promise<any[]>);
  return flights.map(this.createFlightModel);
  }
  
  async getFlightsByCost (cost: Number) {
    const flights = await (this.http.get(this.flightUrl + '//Cost//' + cost)
    .toPromise() as Promise<any[]>);
  return flights.map(this.createFlightModel);
  }

  async getFlightsBySale (sale: Number) {
    const flights = await (this.http.get(this.flightUrl + '//Sale//' + sale)
    .toPromise() as Promise<any[]>);
  return flights.map(this.createFlightModel);
  }

  async getFlights() {
      const flights = await (this.http.get(this.flightUrl)
      .toPromise() as Promise<any[]>);
    return flights.map(this.createFlightModel);
  }

  private createFlightModel(flight: any): Flight {
    return {
      ...flight,
    } as Flight;
  }
}
