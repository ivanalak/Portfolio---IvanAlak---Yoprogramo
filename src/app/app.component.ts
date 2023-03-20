import { Component } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';


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



