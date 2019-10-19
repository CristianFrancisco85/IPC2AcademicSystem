import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {User} from 'src/app/DataTypes';

@Component({
  selector: 'app-admin-new-user-aux',
  templateUrl: './admin-new-user-aux.component.html',
  styleUrls: ['./admin-new-user-aux.component.css']
})
export class AdminNewUserAuxComponent implements OnInit {

  Estudiantes : User[];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getEstudiantes().subscribe( Estudiantes => this.Estudiantes = Estudiantes);
  }

  createAux(Button){
    this.dataservice.setUserAux(Button.id).subscribe((result) =>{
        console.log(result);
        this.dataservice.getAuxiliares().subscribe( Estudiantes => this.Estudiantes = Estudiantes);
        alert("El estudiante ha sido ascendido a auxiliar");
    });
  }

}
