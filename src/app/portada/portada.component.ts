import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from '../service/educacion.service';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  lista: any = [];

  constructor (private personaService: PersonaService,
               private educacionService: EducacionService,
              
               private router: Router) { }

  ngOnInit(): void {

    this.ListarPersonas();
   // this.listarEducacion();

  }

  ListarPersonas() {
   
    this.personaService.getPersonas().subscribe(
      res=>{this.lista=res;
      console.log(res);},
      err=>console.log(err)
    );

  }

  listarEducacion(){

    this.educacionService.getEducacion().subscribe(
      res => {this.lista=res},
      err=>console.log(err),
      
      );

  }

  

  }


