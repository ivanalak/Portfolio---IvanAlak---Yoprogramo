
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRouteReuseStrategy } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='http://localhost:8090'
  
  public loginStatusSubjec = new Subject <boolean>();

  constructor(private http:HttpClient) { }

  //genero el token

  public generateToken(loginData:any){
    return this.http.post(this.url+'/generate-token',loginData);
  }

  // inicio de sesion y establesco el token en el localStorage

  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;

  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;

    }else{
            return true;

    }
  }
//cerrar sesion y eliminamos el token del localStorage

public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  return true;

}

//obtengo el token del localStorage

public getToken(){
  return localStorage.getItem('token');

}

public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));

}

public getUser(){
  let userStr = localStorage.getItem('user');
  if(userStr !== null){
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }

}

public getUserRole(){
  let user = this.getUser();
  return user.authorities[0].authority;

}

public getCurrentUser(){
return this.http.get(this.url+'/actual-usuario');

}

}
