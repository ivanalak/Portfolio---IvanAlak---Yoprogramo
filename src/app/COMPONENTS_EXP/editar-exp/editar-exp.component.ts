import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia, ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  id:string="";

  experienciaActual: Experiencia ={id:'', tipo_de_trabajo:'', descripcion:'', foto_url:''};
  constructor(private experienciaService: ExperienciaService, 
    private activateRouter: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.id= this.activateRouter.snapshot.params['id'];
    this.experienciaService.getUnaExperiencia(this.id).subscribe(
    
      res=>{this.experienciaActual=res},
      err=>console.log(err)

    );
  }

  guardar(){
    this.experienciaService.editExperiencia(this.id, this.experienciaActual).subscribe(
    
      res=>{this.router.navigate(['/admin'])},
    
      err=>console.log(err)
    
    );
    
    
        }



}
