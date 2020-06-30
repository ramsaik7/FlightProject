import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { User } from './_models';

import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  constructor(private httpClient: HttpClient) { }

  flightURL = "http://localhost:3000/";

  flightSelected = new Observable<any>();

  rowPassenger: any;

  flightCheckIN: any;

  saveFlightSeat:any;

  ancillaryFlight:any;

  getFlightByName(flightName: string) {
    return this.httpClient.get("http://localhost:3000/flight?flightName=" + flightName);
  }

  addPassenger(flightId: number, flight: any) {
    console.log(flightId);
    console.log(flight);


    return this.httpClient.put(this.flightURL+"flight/" + flightId, flight);
  }


  getflights() {
    return this.httpClient.get(this.flightURL + "flight");
  }

  getFlightById(flightId: string) {
    return this.httpClient.get("http://localhost:3000/flight?flightId=" + flightId);
  }

  updatePassenger(flightId: number, flight: any) {
    return this.httpClient.put(this.flightURL + "flight/" + flightId, flight);
  }

  updateAncillary(flightId: number, flight: any) {
    return this.httpClient.put(this.flightURL + "flight/" + flightId, flight);
  }


  updateSpecialMeal(flightId: number, flight: any) {

    return this.httpClient.put(this.flightURL + "flight/" + flightId, flight);

  }

  updateShoppingItem(flightId: number, flight: any) {
    return this.httpClient.put(this.flightURL + "flight/" + flightId, flight);

  }

  updateCheckinStatus(flightId: number, flight: any) {

    console.log(flight);
    return this.httpClient.put(this.flightURL+"flight/" + flightId, flight);

  }

  updateAncillaryPassenger(flightId: number, flight: any) {
         return this.httpClient.put(this.flightURL + "flight/" + flightId, flight);
  }
    

  getRowPassenger() {
    console.log(this.rowPassenger);
    return this.rowPassenger;
  }


  getResultedFlight(result: any) {
    this.flightSelected = result;
    console.log(this.flightSelected);

    return this.flightSelected;


  }

  getSelectedPassenger(value) {
    console.log(value);
    this.rowPassenger = value;
    console.log(this.rowPassenger);


  }
  getFlightCheckIn(value) {
    this.flightCheckIN = value;
  }

  getFlightForCheckIn() {
    console.log(this.flightCheckIN);
    return this.flightCheckIN;
  }

  sendFlight(): Observable<any> {
    console.log(this.flightSelected);
    this.flightSelected.subscribe(data => {
      console.log(data);
    })
    return this.flightSelected;
  }

  
  updatePassengerSeat(flightId: number, flight: any) {

    return this.httpClient.put(this.flightURL + "flight/" + flightId, flight);
  }


  getAllUser() {
    return this.httpClient.get<User[]>(`${environment.apiUrl}/users`);
}

  getUserById(id: number) {
    return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`);
}


saveFlight(flight){
  this.saveFlightSeat=flight;
  return this.saveFlightSeat;
}
getSavedFlight(){
  return this.saveFlightSeat;
}

updatePassengerAncillary(flightId: number, flight: any) {
  return this.httpClient.put(this.flightURL + "flight/" + flightId, flight);

}

setAncillaryFlight(flight:any){
  this.ancillaryFlight= flight;
}

getAncillaryFlight(){
  return this.ancillaryFlight;
}


}
