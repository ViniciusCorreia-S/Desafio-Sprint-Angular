import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {


  url = "http://localhost:3001"

  constructor(private http: HttpClient) { }

  dataVehicles() {
    return this.http.get(`${this.url}/vehicles`)
  }
}
