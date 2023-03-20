import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-inicio-exp',
  templateUrl: './inicio-exp.component.html',
  styleUrls: ['./inicio-exp.component.css']
})
export class InicioExpComponent implements OnInit {

  lista:any=[]
  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {

    this.listarExperiencia();
  }

  listarExperiencia(){

    this.experienciaService.getExperiencia().subscribe(
      res => {this.lista=res},
      err=>console.log(err),
      
      );

  }

  eliminarExp(id:string){
 
    this.experienciaService.deleteExperiencia(id).subscribe(
      res=>{this.ngOnInit();},
    
    err=>console.log(err)

    );



  }


}
