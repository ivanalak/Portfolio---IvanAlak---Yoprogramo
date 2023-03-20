import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Experiencia, ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-agregar-exp',
  templateUrl: './agregar-exp.component.html',
  styleUrls: ['./agregar-exp.component.css']
})
export class AgregarExpComponent implements OnInit {

  experienciaNueva: Experiencia ={id:'', tipo_de_trabajo:'', descripcion:'', foto_url:''};
  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  
  agregarExperiencia(){
  
    this.experienciaService.saveExperiencia(this.experienciaNueva).subscribe(
     res=> {
      
      this.router.navigate(['/admin']);
      
      console.log(res);
      

     },
     err=> console.log(err)
    
     

    );


  }

}
