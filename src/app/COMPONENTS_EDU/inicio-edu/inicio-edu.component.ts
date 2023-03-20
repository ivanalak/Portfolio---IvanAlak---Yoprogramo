import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-inicio-edu',
  templateUrl: './inicio-edu.component.html',
  styleUrls: ['./inicio-edu.component.css']
})
export class InicioEduComponent implements OnInit {

  lista:any=[]
  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {

    this.listarEducacion();
  }


  listarEducacion(){

    this.educacionService.getEducacion().subscribe(
      res => {this.lista=res},
      err=>console.log(err),
      
      );

  }

  eliminar(id:string){
 
    this.educacionService.deleteEducacion(id).subscribe(
      res=>{this.ngOnInit();},
    
    err=>console.log(err)

    );



  }

}
