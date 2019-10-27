import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {ForumPublication, ForumAnswer } from 'src/app/DataTypes';

@Component({
  selector: 'app-aux-courseforum',
  templateUrl: './aux-courseforum.component.html',
  styleUrls: ['./aux-courseforum.component.css']
})
export class AuxCourseforumComponent implements OnInit {

  Publicaciones : ForumPublication [];
  Respuestas: ForumAnswer[];
  IDCourse = parseInt(sessionStorage.getItem('IDCourse'));
  Section = sessionStorage.getItem('Section');
  Semester = parseInt(sessionStorage.getItem('Semester'));
  Year = parseInt (sessionStorage.getItem('Year'));

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getForumPublications().subscribe( Publicaciones => this.Publicaciones = Publicaciones);
    this.dataservice.getForumPublicationAnswers().subscribe( Respuestas => this.Respuestas = Respuestas);
  }

  newAnswer(Button,Cuerpo){
    let iduser = parseInt(sessionStorage.getItem('UserID'));
    this.dataservice.newAnswer(iduser,Cuerpo.value,Button.id).subscribe((result) =>{
        console.log(result);
        alert("Respuesta Realizada");
    });
  }

}
