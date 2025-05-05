import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehiclesService } from '../../service/vehicles.service';
import { Code , vinCode} from '../../models/vinCode.model';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-table',
  imports: [ CommonModule , ReactiveFormsModule , FormsModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  vin!: Code;
  selectCode!: vinCode;
  code!: string;
  url = "http://localhost:3001"

  constructor(private service: VehiclesService , private http: HttpClient) { }

  searchCode() {
    return this.http.post(`${this.url}/vehicleData`, {'vin' : `${this.code}`})
  }

  Search () {
    this.searchCode().subscribe((code: any) => {
      if(code) {
        this.vin = code;
        console.log(this.vin);
      }
    })
    this.changesCode();
    this.searchCode();
  }

  selectCodeVin = new FormGroup ({
    carro: new FormControl(''),
  })

  changesCode() {
    this.selectCodeVin.controls.carro.valueChanges.subscribe(id => {
      // let carro = this.vin[Number(id)];
      // let carro = this.vin.filter(value => String(value.id));
      // this.selectCode = carro[0];
      // this.selectCode = carro;
      console.log(this.selectCode);
    })
  }
}
