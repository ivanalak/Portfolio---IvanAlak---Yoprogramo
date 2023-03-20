import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:8090/user/'
  constructor(private http:HttpClient) { }

  public añadirUsuario(user:any) {
    return this.http.post(this.url, user);
}

}