import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {CourseAsssign } from 'src/app/DataTypes';


@Component({
  selector: 'app-admin-courselist',
  templateUrl: './admin-courselist.component.html',
  styleUrls: ['./admin-courselist.component.css']
})
export class AdminCourselistComponent implements OnInit {

  Cursos: CourseAsssign [];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getCourseAssign().subscribe( Cursos => this.Cursos = Cursos);
  }

  deleteCourseAssign(Curso,Seccion,Semestre,Year){
    Semestre = parseInt(Semestre.textContent);
    Year = parseInt(Year.textContent);
    this.dataservice.deleteCourseAssign(Curso.id,Seccion.textContent,Semestre,Year).subscribe((result) =>{
      if(result=='0'){
        alert('ERROR: La seccion del curso ya tiene estudiantes asignados')
      }
      else{
        alert("La seccion del Curso ha sido eliminada");
      }
      
    });
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
