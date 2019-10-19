import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {CourseAsssign } from 'src/app/DataTypes';

@Component({
  selector: 'app-user-courseassign',
  templateUrl: './user-courseassign.component.html',
  styleUrls: ['./user-courseassign.component.css']
})
export class UserCourseassignComponent implements OnInit {

  Cursos: CourseAsssign [];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getCourseAssign().subscribe( Cursos => this.Cursos = Cursos);
  }

  newStudentAssign(Curso,Seccion,Semestre,Year){
    Semestre = parseInt(Semestre.textContent);
    Year = parseInt(Year.textContent);
    let IDUser= parseInt(sessionStorage.getItem('UserID'));
    this.dataservice.addStudentAssign(IDUser,Curso.id,Seccion.textContent,Semestre,Year).subscribe((result) =>{
      if(result=='0'){
        alert('ERROR: El curso ya fue asignado anteriormente')
      }
      else{
        alert("Curso Asignado para el Semestre "+Semestre+" del Año "+Year);
      }
      
    });
  }

}
