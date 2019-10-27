import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { QuizQuestion } from 'src/app/DataTypes';
import {SplitAnswerPipe} from 'src/app/split-answer.pipe'

@Component({
  selector: 'app-aux-coursequiz',
  templateUrl: './aux-coursequiz.component.html',
  styleUrls: ['./aux-coursequiz.component.css'],
  providers :[SplitAnswerPipe]
})


export class AuxCoursequizComponent implements OnInit{

  Preguntas : QuizQuestion[];
  Respuestas : string[];

  constructor(private dataservice : DataService , private router : Router, private splitAnswer:SplitAnswerPipe) { }


  ngOnInit() {
    let IDQuiz= parseInt(sessionStorage.getItem('IDQuiz'));
    this.dataservice.getQuizQuestion(IDQuiz).subscribe( Preguntas => this.Preguntas = Preguntas);
  }

  newQuestion(Descripcion,Options,Answer){
    let IDQuiz= parseInt(sessionStorage.getItem('IDQuiz'));
      this.dataservice.newQuizQuestion(IDQuiz,Descripcion.value,Answer.value,Options.value).subscribe((result) =>{
        console.log(result);
        this.dataservice.getQuizQuestion(IDQuiz).subscribe( Preguntas => this.Preguntas = Preguntas);
        alert("Pregunta Agregada");
      });
  }
  
}
