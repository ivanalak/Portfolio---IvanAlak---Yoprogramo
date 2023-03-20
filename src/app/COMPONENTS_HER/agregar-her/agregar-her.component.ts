import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Herramienta, HerramientasService } from 'src/app/service/herramientas.service';

@Component({
  selector: 'app-agregar-her',
  templateUrl: './agregar-her.component.html',
  styleUrls: ['./agregar-her.component.css']
})
export class AgregarHerComponent implements OnInit {

  herramientaNueva: Herramienta ={id:'', tipo_de_herramienta:'', descripcion:'', foto_url:''};
  constructor(private herramientasService: HerramientasService, private router: Router) { }

  ngOnInit(): void {
  }

  
  agregarHerramienta(){
  
    this.herramientasService.saveHerramienta(this.herramientaNueva).subscribe(
     res=> {
      
      this.router.navigate(['/admin']);
      
      console.log(res);
      

     },
     err=> console.log(err)
    
     

    );


  }


}
