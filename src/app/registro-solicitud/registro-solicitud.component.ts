import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SolicitudService } from '../services/solicitud.service'; // Asegúrate de tener este servicio

@Component({
  selector: 'app-registro-solicitud',
  templateUrl: './registro-solicitud.component.html',
  styleUrls: ['./registro-solicitud.component.css']
})
export class RegistroSolicitudComponent {
  solicitudForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.solicitudForm = this.formBuilder.group({
      cedulaCliente: ['', [Validators.required, Validators.minLength(10)]],
      nombreCliente: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      monto: [null, [Validators.required, Validators.min(1)]],
      meses: [null, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.solicitudForm.valid) {
      this.solicitudService.enviarSolicitud(this.solicitudForm.value).subscribe({
        next: (respuesta) => console.log('Solicitud enviada', respuesta),
        error: (error) => console.error('Error al enviar solicitud', error)
      });
    }
  }
}
