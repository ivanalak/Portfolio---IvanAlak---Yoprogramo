import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url='http://localhost:8090/api/personas';
  constructor(private http: HttpClient) { }

  getPersonas(): Observable <any> 
  {
      return this.http.get(this.url);

  }

  getUnaPersona(id:string): Observable<any>
  {
    return this.http.get(this.url+'/'+id);
    
  }

  savePersona(persona: Persona): Observable<any>
  {
    return this.http.post(this.url,persona);

  }

  editPersona(id: string, persona: Persona): Observable<any>
  {
    return this.http.put(this.url+'/'+id,persona);

  }

  deletePersona (id: string): Observable <any>

  {
    return this.http.delete(this.url+'/'+id);

  }

}

export interface Persona {
   id: string;
   nombre: string;
   apellido: string;
   mail: string;
   finalizado: boolean;
   sobre_mi: string;
   titulo: string;
   foto_url: string;

}
