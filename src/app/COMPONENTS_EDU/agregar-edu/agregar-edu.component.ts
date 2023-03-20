import { Component, OnInit } from '@angular/core';
import { Educacion, EducacionService } from 'src/app/service/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-edu',
  templateUrl: './agregar-edu.component.html',
  styleUrls: ['./agregar-edu.component.css']
})
export class AgregarEduComponent implements OnInit {

  educacionNueva: Educacion ={id:'', tipo_de_educacion:'', descripcion:'', foto_url:''};
  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {

  }

  agregarEducacion(){
  
    this.educacionService.saveEducacion(this.educacionNueva).subscribe(
     res=> {
      
      this.router.navigate(['/admin']);
      
      console.log(res);
      

     },
     err=> console.log(err)
    
     

    );


  }

}
