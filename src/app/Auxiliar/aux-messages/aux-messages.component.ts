import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/DataTypes';

@Component({
  selector: 'app-aux-messages',
  templateUrl: './aux-messages.component.html',
  styleUrls: ['./aux-messages.component.css']
})
export class AuxMessagesComponent implements OnInit {

  Estudiantes : User[];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    let IDUser= parseInt(sessionStorage.getItem('UserID'));
    this.dataservice.getStudentsAux(IDUser).subscribe( Estudiantes => this.Estudiantes = Estudiantes);
  }

  newMessage(Asunto,SelectUser,Cuerpo,Archivos){
    let IDUser= parseInt(sessionStorage.getItem('UserID'));
      this.dataservice.newMessage(Asunto.value,Cuerpo.value,IDUser,SelectUser.value,null).subscribe((result) =>{
        console.log(result);
        alert("Mensaje Enviado");
      });

  }
}
