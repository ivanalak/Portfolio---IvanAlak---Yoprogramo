import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  lista: any = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {

    this.ListarPersonas();

  }

  ListarPersonas() {
   
    this.personaService.getPersonas().subscribe(
      res=>{this.lista=res;
      console.log(res);},
      err=>console.log(err)
    );

  }

  eliminar(id: string) {

    this.personaService.deletePersona(id).subscribe(
     res=>{this.ngOnInit();},
     err=>console.log(err)

    );


  }

}
