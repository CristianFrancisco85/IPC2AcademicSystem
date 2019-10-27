import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {StudentAssign } from 'src/app/DataTypes';
@Component({
  selector: 'app-aux-assignedcourse',
  templateUrl: './aux-assignedcourse.component.html',
  styleUrls: ['./aux-assignedcourse.component.css']
})
export class AuxAssignedcourseComponent implements OnInit {

  Cursos: StudentAssign [];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    let IDUser= parseInt(sessionStorage.getItem('UserID'));
    this.dataservice.getAuxAssigns(IDUser).subscribe( Cursos => this.Cursos = Cursos);
  }

  viewCourseFlow(Button,Section,Semester,Year){
    sessionStorage.setItem('IDCourse',Button.id);
    sessionStorage.setItem('Section',Section.textContent);
    sessionStorage.setItem('Semester',Semester.textContent);
    sessionStorage.setItem('Year',Year.textContent);
    this.router.navigate(['aux-module/aux-courseflow']);
  }

}
