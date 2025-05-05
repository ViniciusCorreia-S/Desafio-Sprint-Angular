import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LeftBarComponent } from '../../components/left-bar/left-bar.component';
import { TableComponent } from '../../components/table/table.component';
import { Vehicles , Vehicle } from '../../models/vehicles.model';
import { VehiclesService } from '../../service/vehicles.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [ CardComponent , HeaderComponent , LeftBarComponent , TableComponent , CommonModule , ReactiveFormsModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  vehicles!: Vehicles;
  selectCar!: Vehicle;
 
  constructor(private service: VehiclesService) { }

  ngOnInit() {
    this.service.dataVehicles().subscribe((vehicle: any) => {
      if(vehicle) {
        this.vehicles = vehicle.vehicles;
        console.log(this.vehicles);
      }
    })

    this.changesVehicles();
  }

  selectVehicle = new FormGroup ({
    carro: new FormControl(''),
  })

  changesVehicles() {
    this.selectVehicle.controls.carro.valueChanges.subscribe(id => {
      let carro = this.vehicles[Number(id) - 1];
      this.selectCar = carro;
      console.log(this.selectCar);
    })
  }
}