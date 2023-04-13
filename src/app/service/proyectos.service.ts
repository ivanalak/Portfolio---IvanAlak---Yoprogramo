import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url='https://portfolio-backend-ivanalak.onrender.com/api/proyectos'
  constructor(private http: HttpClient) {}

  getProyecto(): Observable<any> {
    
    return this.http.get(this.url);

  }

  getUnProyecto(id: string): Observable<any> {

    return this.http.get(this.url+'/'+id);

  }

  saveProyecto(proyecto: Proyecto): Observable<any> {

     return this.http.post(this.url, proyecto)

  }

  editProyecto(id: string, proyecto: Proyecto): Observable<any> {

     return this.http.put(this.url+'/'+id, proyecto);

  }

  deleteProyecto(id: string): Observable<any> {

     return this.http.delete(this.url+'/'+id);


  }
   
}


export interface Proyecto{

  id: string;
  nombre_proyecto: string;
  descripcion: string;
  foto_url: string;
  
  }
