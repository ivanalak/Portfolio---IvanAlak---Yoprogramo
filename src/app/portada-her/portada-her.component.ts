import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerramientasService } from '../service/herramientas.service';

@Component({
  selector: 'app-portada-her',
  templateUrl: './portada-her.component.html',
  styleUrls: ['./portada-her.component.css']
})
export class PortadaHerComponent implements OnInit {

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

}
