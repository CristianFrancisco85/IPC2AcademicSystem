import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentGrade} from 'src/app/DataTypes';

@Component({
  selector: 'app-user-coursegrades',
  templateUrl: './user-coursegrades.component.html',
  styleUrls: ['./user-coursegrades.component.css']
})
export class UserCoursegradesComponent implements OnInit {

  Notas : StudentGrade[];
  IDCourse = parseInt(sessionStorage.getItem('IDCourse'));
  Section = sessionStorage.getItem('Section');
  Semester = parseInt(sessionStorage.getItem('Semester'));
  Year = parseInt (sessionStorage.getItem('Year'));

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    let IDUser = parseInt(sessionStorage.getItem('UserID'));
    this.dataservice.getStudentGrades(IDUser,this.IDCourse,this.Section,this.Semester,this.Year).subscribe(Notas => this.Notas = Notas);
  }

}
