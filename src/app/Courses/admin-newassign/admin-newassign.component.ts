import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CourseInstance, User, CourseActivitie } from 'src/app/DataTypes';

@Component({
  selector: 'app-admin-newassign',
  templateUrl: './admin-newassign.component.html',
  styleUrls: ['./admin-newassign.component.css']
})
export class AdminNewassignComponent implements OnInit {

  SeccionesCursos: CourseInstance [];
  Auxiliares : User[];


  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getCourseSections().subscribe( Cursos => this.SeccionesCursos = Cursos);
    this.dataservice.getAuxiliares().subscribe( Auxiliares => this.Auxiliares = Auxiliares);
  }

  newSectionAssign(Curso,Semestre,Year,Aux){
    console.log(Curso);
    let IDCourse = Curso[Curso.selectedIndex].id;

    this.dataservice.addCourseAssign(IDCourse,Curso.value,Semestre.value,Year.value,Aux.value).subscribe((result) =>{
      console.log(result);
      if(result=='0'){
        alert('ERROR: El curso ya fue asignado anteriormente')
      }
      else{
        alert("Seccion de Curso Asignada para el Semestre "+Semestre.value+" del Año "+Year.value);
      }
      
    });
  }
}
