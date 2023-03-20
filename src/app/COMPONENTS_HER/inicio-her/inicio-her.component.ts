import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerramientasService } from 'src/app/service/herramientas.service';

@Component({
  selector: 'app-inicio-her',
  templateUrl: './inicio-her.component.html',
  styleUrls: ['./inicio-her.component.css']
})
export class InicioHerComponent implements OnInit {


  lista:any=[]
  constructor(private herramientasService: HerramientasService, private router: Router) { }

  ngOnInit(): void {

    this.listarHerramienta();

  }

  
  listarHerramienta(){

    this.herramientasService.getHerramienta().subscribe(
      res => {this.lista=res},
      err=>console.log(err),
      
      );

  }

  eliminar(id:string){
 
    this.herramientasService.deleteHerramienta(id).subscribe(
      res=>{this.ngOnInit();},
    
    err=>console.log(err)

    );



  }


}
