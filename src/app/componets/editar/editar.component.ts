import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
 
  id:string="";
  
  personaActual: Persona={id:'',nombre:'', apellido: '', mail:'', finalizado: false, sobre_mi:'',titulo:'',foto_url:''};

  constructor(
    private personaService:PersonaService,

    private antivatedRouter: ActivatedRoute, 
    private router:Router,
    ) {}

  ngOnInit(): void {
 
    this.id = this.antivatedRouter.snapshot.params['id'];
    this.personaService.getUnaPersona(this.id).subscribe(
       res=>{this.personaActual=res},
       err=>console.log(err)

    );

  }

  guardar(){

    this.personaService.editPersona(this.id, this.personaActual).subscribe(
      
      res=>{
        this.router.navigate(['/admin']);
      },
       err=>console.log(err)


    );


  }

}
