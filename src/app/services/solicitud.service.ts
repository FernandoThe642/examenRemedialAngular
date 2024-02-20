import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitud } from '../models/solicitud';
import { Cuota } from '../models/cuota'; 
@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private apiUrl = ''; 

  constructor(private http: HttpClient) { }

  enviarSolicitud(solicitud: Solicitud): Observable<Cuota[]> {
    return this.http.post<Cuota[]>(`${this.apiUrl}/solicitud`, solicitud);
  }
}
