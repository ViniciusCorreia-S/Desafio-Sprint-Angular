import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehiclesService } from '../../service/vehicles.service';
import { vinCode } from '../../models/vinCode.model';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-table',
  imports: [ CommonModule , ReactiveFormsModule , FormsModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  vin!: vinCode;
  code!: string | number;
  url = "http://localhost:3001"
  searchControl = new FormControl();

  constructor(private service: VehiclesService , private http: HttpClient) { }

  searchCode() {
    return this.http.post(`${this.url}/vehicleData`, {vin : this.code})
  }

  Search () {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      switchMap(() => this.http.post(`${this.url}/vehicleData`, {vin : this.code}))).subscribe((code: any) => {
        if(code) {
          this.vin = code;
          console.log(this.vin);/*2FRHDUYS2Y63NHD22454*/
        }
      })
  }
}
