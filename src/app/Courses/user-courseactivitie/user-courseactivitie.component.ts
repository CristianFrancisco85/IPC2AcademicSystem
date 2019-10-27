import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CourseActivitie} from 'src/app/DataTypes';
@Component({
  selector: 'app-user-courseactivitie',
  templateUrl: './user-courseactivitie.component.html',
  styleUrls: ['./user-courseactivitie.component.css']
})
export class UserCourseactivitieComponent implements OnInit {

  Actividades : CourseActivitie[];
  IDCourse = parseInt(sessionStorage.getItem('IDCourse'));
  Section = sessionStorage.getItem('Section');
  Semester = parseInt(sessionStorage.getItem('Semester'));
  Year = parseInt (sessionStorage.getItem('Year'));

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getActivities(this.IDCourse,this.Section,this.Semester,this.Year).subscribe( Actividades => this.Actividades = Actividades);
  }

  newAnswerActivitie(Button,Cuerpo){
    let iduser = parseInt(sessionStorage.getItem('UserID'));
    this.dataservice.newActivitieAnswer(Button.id,iduser,Cuerpo.value).subscribe((result) =>{
      if(result=='0'){
        alert('ERROR: La actividad ya ha sido entregada')
      }
      else{
        alert("Actividad Entregada");
      }  
    });
  }

}
