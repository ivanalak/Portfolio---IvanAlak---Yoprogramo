import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-portada-exp',
  templateUrl: './portada-exp.component.html',
  styleUrls: ['./portada-exp.component.css']
})
export class PortadaExpComponent implements OnInit {

  lista:any=[]
  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {

    this.listarExperiencia();
  }

  listarExperiencia(){

    this.experienciaService.getExperiencia().subscribe(
      res => {this.lista=res},
      err=>console.log(err),
      
      );

  }

}
