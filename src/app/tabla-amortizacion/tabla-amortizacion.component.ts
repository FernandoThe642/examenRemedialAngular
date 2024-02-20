import { Component, Input, OnInit } from '@angular/core';
import { Cuota } from '../models/cuota'; // Ajusta la ruta de importación según tu estructura de proyecto

@Component({
  selector: 'app-tabla-amortizacion',
  templateUrl: './tabla-amortizacion.component.html',
  styleUrls: ['./tabla-amortizacion.component.css']
})
export class TablaAmortizacionComponent implements OnInit {
  @Input() cuotas: Cuota[] = []; // Asume que las cuotas se pasan como un input al componente

  constructor() { }

  ngOnInit(): void {
  }
}
