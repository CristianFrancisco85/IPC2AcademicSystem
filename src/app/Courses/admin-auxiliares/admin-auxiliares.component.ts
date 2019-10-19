import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {User,CourseAsssign} from 'src/app/DataTypes';

@Component({
  selector: 'app-admin-auxiliares',
  templateUrl: './admin-auxiliares.component.html',
  styleUrls: ['./admin-auxiliares.component.css']
})
export class AdminAuxiliaresComponent implements OnInit {

  Auxiliares : User[];
  Cursos: CourseAsssign [];
  IDAuxActual:number;

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getAuxiliares().subscribe( Auxiliares => this.Auxiliares = Auxiliares);
    this.dataservice.getCourseAssign().subscribe( Cursos => this.Cursos = Cursos);
  }

  viewAuxCourse(Button){
    this.IDAuxActual = Button.id;
  }

  deleteCourseAssignAux(Curso,Seccion,Semestre,Year){
    Semestre = parseInt(Semestre.textContent);
    Year = parseInt(Year.textContent);
    this.dataservice.deleteCourseAssignAux(Curso.id,Seccion.textContent,Semestre,Year).subscribe((result) =>{
        alert("La desasignacion ha sido exitosa");  
        this.dataservice.getCourseAssign().subscribe( Cursos => this.Cursos = Cursos);
    });
  }

}
