export class Solicitud {
    constructor(
      public cedulaCliente: string,
      public nombreCliente: string,
      public correoElectronico: string,
      public monto: number,
      public meses: number
    ) {}
  }
  