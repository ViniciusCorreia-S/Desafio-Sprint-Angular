export interface Vehicles extends Array<Vehicle> {}

export interface Vehicle {
  id: number
  vehicle: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
  img: string
}

export interface VeiculosAPI {
  vehicles: Vehicles;
}
