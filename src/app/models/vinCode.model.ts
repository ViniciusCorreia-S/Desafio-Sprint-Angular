export interface Code extends Array<vinCode> {}

export interface vinCode {
    id: number | string,
    odometro: number,
    nivelCombustivel: number,
    status: string,
    lat: number,
    long: number
}

export interface CodeAPI {
  code: vinCode;
}