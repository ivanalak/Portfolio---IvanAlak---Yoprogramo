import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lista: any = [];

  constructor( private personaService: PersonaService,
               private educacionService: EducacionService, 
               private experienciaService: ExperienciaService,
          
            
               private router: Router) { }

  
 


  ngOnInit(): void {

    this.ListarPersonas();
    //this.listarEducacion();
    //this.listarExperiencia();

  }

  ListarPersonas() {
   
    this.personaService.getPersonas().subscribe(
      res=>{this.lista=res;
      console.log(res);},
      err=>console.log(err)
    );

  }

  eliminarPersona(id: string) {

    this.personaService.deletePersona(id).subscribe(
     res=>{this.ngOnInit();},
     err=>console.log(err)

    );


  }

 // listarEducacion(){

   // this.educacionService.getEducacion().subscribe(
    //  res => {this.lista=res},
     // err=>console.log(err),
      
     // );

 // }

 // eliminar(id:string){
 
    //this.educacionService.deleteEducacion(id).subscribe(
    //  res=>{this.ngOnInit();},
    
   // err=>console.log(err)

   // );
 // }
  
 // listarExperiencia(){

    //this.experienciaService.getExperiencia().subscribe(
   ////   res => {this.lista=res},
    //  err=>console.log(err),
     
    //  );

 // }

 // eliminarExp(id:string){
 
    //this.experienciaService.deleteExperiencia(id).subscribe(
    //  res=>{this.ngOnInit();},
    
  //  err=>console.log(err)

  //  );
 // }

}


