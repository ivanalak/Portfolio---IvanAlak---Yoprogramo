import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Persona, PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  personaNueva: Persona={id:'',nombre:'', apellido: '', mail:'', finalizado: false, sobre_mi:'',titulo:'',foto_url:''};
  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  agregarPersona(){
    this.personaService.savePersona(this.personaNueva).subscribe(
     res=>{
        console.log(res);
        this.router.navigate(['/admin']);
     },
     err=>console.log(err)

    );


  }




}


