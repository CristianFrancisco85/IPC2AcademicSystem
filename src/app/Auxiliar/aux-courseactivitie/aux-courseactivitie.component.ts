import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {ActivitieAnswer} from 'src/app/DataTypes';

@Component({
  selector: 'app-aux-courseactivitie',
  templateUrl: './aux-courseactivitie.component.html',
  styleUrls: ['./aux-courseactivitie.component.css']
})
export class AuxCourseactivitieComponent implements OnInit {

  IDCourse = parseInt(sessionStorage.getItem('IDCourse'));
  Section = sessionStorage.getItem('Section');
  Semester = parseInt(sessionStorage.getItem('Semester'));
  Year = parseInt (sessionStorage.getItem('Year'));
  Respuestas:ActivitieAnswer[];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getActivitieAnswer(this.IDCourse,this.Section,this.Semester,this.Year).subscribe(Respuestas => this.Respuestas = Respuestas);
  }

  newActivitie(Title,Descripcion,Puntos){
    this.dataservice.newActivitie(Title.value,Descripcion.value,Puntos.value,this.IDCourse,this.Section,this.Semester,this.Year).subscribe((result) =>{
        console.log(result);
        alert("Actividad Publicada");
    });
  }
   setGrade(Nota,Button){
    let IDUser = Button.id;
    let IDActivitie = Nota.id;
    this.dataservice.newStudentGrade(IDUser,IDActivitie,Nota.value).subscribe((result) =>{
      console.log(result);
      alert("Nota Asignada");
    });
   }

}
