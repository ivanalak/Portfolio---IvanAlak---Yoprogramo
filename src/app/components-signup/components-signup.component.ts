import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-components-signup',
  templateUrl: './components-signup.component.html',
  styleUrls: ['./components-signup.component.css']
})
export class ComponentsSignupComponent implements OnInit {

  public user = {
    username: '',password: '',nombre: '',apellido: '',email: ''
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  formSubmint(){

    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      alert('El nombre de usuario es requerido');
      return;}

   this.userService.añadirUsuario(this.user).subscribe(
    (data) => {
      console.log(data);
      alert('Usuario guardado con exito')
    },(error) => {
      console.log(error);
      alert('Ha ocurrido un error en el sistema')
    }
   )
  }

}
