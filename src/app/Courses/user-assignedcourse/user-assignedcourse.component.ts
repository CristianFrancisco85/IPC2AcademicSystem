import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {StudentAssign } from 'src/app/DataTypes';

@Component({
  selector: 'app-user-assignedcourse',
  templateUrl: './user-assignedcourse.component.html',
  styleUrls: ['./user-assignedcourse.component.css']
})
export class UserAssignedcourseComponent implements OnInit {

  Cursos: StudentAssign [];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    let IDUser= parseInt(sessionStorage.getItem('UserID'));
    this.dataservice.getStudentAssigns(IDUser).subscribe( Cursos => this.Cursos = Cursos);
  }

  viewCourseFlow(Button,Section,Semester,Year){
    sessionStorage.setItem('IDCourse',Button.id);
    sessionStorage.setItem('Section',Section.textContent);
    sessionStorage.setItem('Semester',Semester.textContent);
    sessionStorage.setItem('Year',Year.textContent);
    this.router.navigate(['user-module/user-courseflow']);
  }
  deleteAssign(Button,Section,Semester,Year){
    sessionStorage.setItem('IDCourse',Button.id);
    sessionStorage.setItem('Section',Section.textContent);
    sessionStorage.setItem('Semester',Semester.textContent);
    sessionStorage.setItem('Year',Year.textContent);
    let IDCourse = parseInt(sessionStorage.getItem('IDCourse'));
    let IDUser= parseInt(sessionStorage.getItem('UserID'));
    Section = sessionStorage.getItem('Section');
    Semester = parseInt(sessionStorage.getItem('Semester'));
    Year = parseInt (sessionStorage.getItem('Year'));
  
      this.dataservice.deleteStudentAssign(IDUser,IDCourse,Section,Semester,Year).subscribe((result) =>{
        console.log(result);
        this.dataservice.getStudentAssigns(IDUser).subscribe( Cursos => this.Cursos = Cursos);
        alert("Curso Desasignado");
      });
  }


}
