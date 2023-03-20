import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Herramienta, HerramientasService } from 'src/app/service/herramientas.service';

@Component({
  selector: 'app-editar-her',
  templateUrl: './editar-her.component.html',
  styleUrls: ['./editar-her.component.css']
})
export class EditarHerComponent implements OnInit {

  id:string="";

  herramientaActual: Herramienta ={id:'', tipo_de_herramienta:'', descripcion:'', foto_url:''};
  constructor(private herramientasService: HerramientasService, 
    private activateRouter: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.id= this.activateRouter.snapshot.params['id'];
    this.herramientasService.getUnaHerramienta(this.id).subscribe(
    
      res=>{this.herramientaActual=res},
      err=>console.log(err)

    );
  }

  guardar(){
    this.herramientasService.editHerramienta(this.id, this.herramientaActual).subscribe(
    
      res=>{this.router.navigate(['/admin'])},
    
      err=>console.log(err)
    
    );
    
    
        }

}
