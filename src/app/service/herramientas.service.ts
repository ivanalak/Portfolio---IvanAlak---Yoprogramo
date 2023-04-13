import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  url='https://portfolio-backend-ivanalak.onrender.com/api/herramientas'
  constructor(private http: HttpClient) { }


  getHerramienta(): Observable<any> {
    
    return this.http.get(this.url);

  }

  getUnaHerramienta(id: string): Observable<any> {

    return this.http.get(this.url+'/'+id);

  }

  saveHerramienta(herramienta: Herramienta): Observable<any> {

     return this.http.post(this.url, herramienta)

  }

  editHerramienta(id: string, herramienta: Herramienta): Observable<any> {

     return this.http.put(this.url+'/'+id, herramienta);

  }

  deleteHerramienta(id: string): Observable<any> {

     return this.http.delete(this.url+'/'+id);


  }

}



export interface Herramienta{

  id: string;
  tipo_de_herramienta: string;
  descripcion: string;
  foto_url: string;
  
  }
