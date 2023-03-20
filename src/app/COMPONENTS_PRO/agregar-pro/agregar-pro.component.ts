import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto, ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-agregar-pro',
  templateUrl: './agregar-pro.component.html',
  styleUrls: ['./agregar-pro.component.css']
})
export class AgregarProComponent implements OnInit {

  proyectoNueva: Proyecto ={id:'', nombre_proyecto:'', descripcion:'', foto_url:''};
  constructor(private proyectosService: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  agregarProyecto(){
  
    this.proyectosService.saveProyecto(this.proyectoNueva).subscribe(
     res=> {
      
      this.router.navigate(['/admin']);
      
      console.log(res);
      

     },
     err=> console.log(err)
    
     

    );


  }

}
