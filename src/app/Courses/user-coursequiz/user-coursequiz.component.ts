import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {Quiz } from 'src/app/DataTypes';


@Component({
  selector: 'app-user-coursequiz',
  templateUrl: './user-coursequiz.component.html',
  styleUrls: ['./user-coursequiz.component.css']
})
export class UserCoursequizComponent implements OnInit {

  IDCourse = parseInt(sessionStorage.getItem('IDCourse'));
  Section = sessionStorage.getItem('Section');
  Semester = parseInt(sessionStorage.getItem('Semester'));
  Year = parseInt (sessionStorage.getItem('Year'));
  Evaluaciones : Quiz[];


  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getCourseQuizStudent(this.IDCourse,this.Section,this.Semester,this.Year).subscribe(Evaluaciones => this.Evaluaciones = Evaluaciones);
  }

  viewQuiz(Button){
    sessionStorage.setItem('IDQuiz',Button.id);
    this.router.navigate(['user-module/user-courseflow/user-viewquiz']);
  }


}
