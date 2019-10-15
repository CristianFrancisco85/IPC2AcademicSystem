import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Course } from 'src/app/DataTypes';

@Component({
  selector: 'app-admin-newassign',
  templateUrl: './admin-newcourse.component.html',
  styleUrls: ['./admin-newcourse.component.css']
})
export class AdminNewcourseComponent implements OnInit {

  Cursos : Course [];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    
  }

  NewCourse(Nombre,Descripcion){
    this.dataservice.addCourse(Nombre.value,Descripcion.value).subscribe((result) =>{
        console.log(result);
        alert("Curso Agregado");
    });
  }



}
