import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto, ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editar-pro',
  templateUrl: './editar-pro.component.html',
  styleUrls: ['./editar-pro.component.css']
})
export class EditarProComponent implements OnInit {

  id:string="";
  proyectoActual: Proyecto ={id:'', nombre_proyecto:'', descripcion:'', foto_url:''};
  constructor(
    private proyectosService: ProyectosService, 
    private activateRouter: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.id= this.activateRouter.snapshot.params['id'];
    this.proyectosService.getUnProyecto(this.id).subscribe(
    
      res=>{this.proyectoActual=res},
      err=>console.log(err)

    );
  }

  guardar(){
    this.proyectosService.editProyecto(this.id, this.proyectoActual).subscribe(
    
      res=>{this.router.navigate(['/admin'])},
    
      err=>console.log(err)
    
    );
    
    
        }

}
