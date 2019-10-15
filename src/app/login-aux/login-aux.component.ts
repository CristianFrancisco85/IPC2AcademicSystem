import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router } from '@angular/router';
import { OkPacket } from '../DataTypes';

@Component({
  selector: 'app-login-aux',
  templateUrl: './login-aux.component.html',
  styleUrls: ['./login-aux.component.css']
})

export class LoginAuxComponent implements OnInit {

  Res : OkPacket;

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  logUser(User,Password){
    this.dataservice.loginAux(User.value,Password.value).subscribe(
      res =>{
        let respuesta: string = res['inicio'];
        if(respuesta == "1"){
          this.saveUserId(User.value);
          this.router.navigate(['aux-module']);
        }
        else{
          alert('Usuario o contraseña no valido');
          this.router.navigate(['aux-login']);
        }
      }, (error) =>{
        console.error(error);
      },
    );
  }

  saveUserId(Username:string){
    this.dataservice.getUserID(Username).subscribe(
      res =>{
        let respuesta: string = res['UserID'];
        console.log('IDUser: '+respuesta);
        sessionStorage.setItem('UserID',respuesta);
      }, (error) =>{
        console.error(error);
      },
    );

  }

}
