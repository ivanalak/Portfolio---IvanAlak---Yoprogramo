import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from '../service/educacion.service';

@Component({
  selector: 'app-portada-edu',
  templateUrl: './portada-edu.component.html',
  styleUrls: ['./portada-edu.component.css']
})
export class PortadaEduComponent implements OnInit {

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

}
