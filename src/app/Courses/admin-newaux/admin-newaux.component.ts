import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-newaux',
  templateUrl: './admin-newaux.component.html',
  styleUrls: ['./admin-newaux.component.css']
})
export class AdminNewauxComponent implements OnInit {

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  RegisterAux(Nombres,UserName,Carnet,Email,Contrasena){
    this.dataservice.checkUserName(UserName.value).subscribe(
      res =>{
        let respuesta: string = res['inicio'];
        console.log('Boolean Login: '+respuesta);
        if(respuesta == "1"){
          alert("UserName ya existe")
        }
        else{
          this.dataservice.addUser(Nombres.value,UserName.value,Carnet.value,Email.value,Contrasena.value,'Auxiliar')
          .subscribe((result) =>{
            console.log(result);
          });
          alert("Registro Exitoso");
          this.router.navigate(['user-login']);
        }
      }, (error) =>{
        console.error(error);
      },
    );
  }

}
