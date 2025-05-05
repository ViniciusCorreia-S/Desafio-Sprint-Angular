import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {


  url = "http://localhost:3001"

  constructor(private http: HttpClient) { }

  // dataUser() {
  //   return this.http.post(`${this.url}/login`, {"nome": "" , "senha": ""})
  // }

  dataVehicles(): Observable<any> {
    return this.http.get(`${this.url}/vehicles`)
  }

  // searchCode() {
  //   return this.http.post(`${this.url}/vehicleData`, {'vin' : `${this.code}`})
  // }







  // private url = environment.api;

  // httpClient!: HttpClient;

  // constructor(httpClient: HttpClient) { }

  // dataVehicles() { 
  //   return this.httpClient.get<Vehicles[]>(this.url + '/vehicles');
  // }
}
