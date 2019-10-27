import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { QuizQuestion } from 'src/app/DataTypes';
import {SplitAnswerPipe} from 'src/app/split-answer.pipe'


@Component({
  selector: 'app-user-viewquiz',
  templateUrl: './user-viewquiz.component.html',
  styleUrls: ['./user-viewquiz.component.css'],
  providers :[SplitAnswerPipe]
})
export class UserViewquizComponent implements OnInit {

  Preguntas : QuizQuestion[];
  Respuestas : string[];

  constructor(private dataservice : DataService , private router : Router, private splitAnswer:SplitAnswerPipe) { }

  ngOnInit() {
    let IDQuiz= parseInt(sessionStorage.getItem('IDQuiz'));
    this.dataservice.getQuizQuestion(IDQuiz).subscribe( Preguntas => this.Preguntas = Preguntas);
  }

  verify(Button,Answer){
    if(Button.id==Answer.value){
      alert("Correcto");
    }
    else{
      alert("Incorrecto");
    }
  }

}
