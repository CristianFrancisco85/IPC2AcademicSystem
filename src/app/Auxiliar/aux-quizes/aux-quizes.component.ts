import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {Quiz } from 'src/app/DataTypes';


@Component({
  selector: 'app-aux-quizes',
  templateUrl: './aux-quizes.component.html',
  styleUrls: ['./aux-quizes.component.css']
})
export class AuxQuizesComponent implements OnInit {

  IDCourse = parseInt(sessionStorage.getItem('IDCourse'));
  Section = sessionStorage.getItem('Section');
  Semester = parseInt(sessionStorage.getItem('Semester'));
  Year = parseInt (sessionStorage.getItem('Year'));
  Evaluaciones : Quiz[];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getCourseQuiz(this.IDCourse,this.Section,this.Semester,this.Year).subscribe(Evaluaciones => this.Evaluaciones = Evaluaciones);
  }

  newCourseQuiz(Title){
    this.dataservice.newCourseQuiz(Title.value,this.IDCourse,this.Section,this.Semester,this.Year).subscribe((result) =>{
        console.log(result);
        this.dataservice.getCourseQuiz(this.IDCourse,this.Section,this.Semester,this.Year).subscribe(Evaluaciones => this.Evaluaciones = Evaluaciones);
        alert("Evaluacion Publicada");
    });
  }

  viewQuiz(Button){
    sessionStorage.setItem('IDQuiz',Button.id);
    this.router.navigate(['aux-module/aux-courseflow/aux-coursequiz']);
  }

  updateQuiz(Estado){
    let IDQuiz= Estado[Estado.selectedIndex].id;

    this.dataservice.updateCourseQuiz(IDQuiz,Estado.value).subscribe((result) =>{
      console.log(result);
      this.dataservice.getCourseQuiz(this.IDCourse,this.Section,this.Semester,this.Year).subscribe(Evaluaciones => this.Evaluaciones = Evaluaciones);
      alert("Estado de Evaluacion Actualizado");
    });
  }

}
