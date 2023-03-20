import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-inicio-pro',
  templateUrl: './inicio-pro.component.html',
  styleUrls: ['./inicio-pro.component.css']
})
export class InicioProComponent implements OnInit {

  lista:any=[]
  constructor(private proyectosService: ProyectosService, private router: Router) { }

  ngOnInit(): void {

    this.listarProyecto();
  }

  listarProyecto(){

    this.proyectosService.getProyecto().subscribe(
      res => {this.lista=res},
      err=>console.log(err),
      
      );

  }

  eliminar(id:string){
 
    this.proyectosService.deleteProyecto(id).subscribe(
      res=>{this.ngOnInit();},
    
    err=>console.log(err)

    );



  }

}
