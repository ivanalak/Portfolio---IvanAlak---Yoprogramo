import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from '../service/proyectos.service';

@Component({
  selector: 'app-portada-pro',
  templateUrl: './portada-pro.component.html',
  styleUrls: ['./portada-pro.component.css']
})
export class PortadaProComponent implements OnInit {

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
}
