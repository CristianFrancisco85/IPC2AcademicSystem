import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Course } from 'src/app/DataTypes';

@Component({
  selector: 'app-admin-newassign',
  templateUrl: './admin-newassign.component.html',
  styleUrls: ['./admin-newassign.component.css']
})
export class AdminNewassignComponent implements OnInit {

  Cursos: Course [];


  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getCourses().subscribe( Cursos => this.Cursos = Cursos);
  }

  newSection(Curso,Seccion,HoraI,HoraF){
    this.dataservice.addCourseInstance(Curso.value,Seccion.value,HoraI.value,HoraF.value).subscribe((result) =>{
        console.log(result);
        alert("Seccion de Curso Agregada");
    });
  }



}
