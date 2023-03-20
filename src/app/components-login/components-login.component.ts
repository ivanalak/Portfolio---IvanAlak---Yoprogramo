import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-components-login',
  templateUrl: './components-login.component.html',
  styleUrls: ['./components-login.component.css']
})
export class ComponentsLoginComponent implements OnInit {

  loginData = {
    "username": '',
    "password": ''
  }
  

  constructor (private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  formsSubmit(){

   this.loginService.generateToken(this.loginData).subscribe(
    (data:any)=> { 
     console.log(data);

    this.loginService.loginUser(data.token);
    this.loginService.getCurrentUser().subscribe((user:any) => {
    this.loginService.setUser(user);
   console.log(user);

    if (this.loginService.getUserRole() == 'ADMIN'){
       // dashboard
      //window.location.href = '/admin';
     this.router.navigate(['admin']);
     this.loginService.loginStatusSubjec.next(true);

   }
  else if (this.loginService.getUserRole() == 'NORMAL'){
        //user dashboard

       //window.location.href = '/user-dashboard';

       this.router.navigate(['user-dashboard']);
       this.loginService.loginStatusSubjec.next(true);

  }
   else{
      this.loginService.logout();


  }
    })
      
    },(error) => {
     console.log(error);
      
    }
      ) 

 }   
}
