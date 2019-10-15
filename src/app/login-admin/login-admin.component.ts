import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router } from '@angular/router';
import { OkPacket } from '../DataTypes';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})

export class LoginAdminComponent implements OnInit {

  Res : OkPacket;

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  logUser(User,Password){
    this.dataservice.loginAdmin(User.value,Password.value).subscribe(
      res =>{
        let respuesta: string = res['inicio'];
        if(respuesta == "1"){
          this.router.navigate(['admin-module']);
        }
        else{
          alert('Usuario o contraseña no valido');
          this.router.navigate(['admin-login']);
        }
      }, (error) =>{
        console.error(error);
      },
    );
  }

}
