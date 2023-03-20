import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion, EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar-edu',
  templateUrl: './editar-edu.component.html',
  styleUrls: ['./editar-edu.component.css']
})
export class EditarEduComponent implements OnInit {

  id:string="";

  educacionActual: Educacion ={id:'', tipo_de_educacion:'', descripcion:'', foto_url:''};
  constructor(
    private educacionService: EducacionService, 
    private activateRouter: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.id= this.activateRouter.snapshot.params['id'];
    this.educacionService.getUnaEducacion(this.id).subscribe(
    
      res=>{this.educacionActual=res},
      err=>console.log(err)

    );}

    guardar(){
this.educacionService.editEducacion(this.id, this.educacionActual).subscribe(

  res=>{this.router.navigate(['/admin'])},

  err=>console.log(err)

);


    }

}
