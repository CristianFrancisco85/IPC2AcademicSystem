import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Course } from 'src/app/DataTypes';

@Component({
  selector: 'app-admin-newsection',
  templateUrl: './admin-newsection.component.html',
  styleUrls: ['./admin-newsection.component.css']
})
export class AdminNewsectionComponent implements OnInit {

  Cursos: Course [];


  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getCourses().subscribe( Cursos => this.Cursos = Cursos);
  }

  newSection(Curso,Seccion,HoraI,HoraF){
    this.dataservice.addCourseInstance(Curso.value,Seccion.value,HoraI.value,HoraF.value).subscribe((result) =>{
      if(result=='0'){
        alert('ERROR: La seccion ya fue creada')
      }
      else{
        alert("Seccion de Curso Agregada");
      }  
    });
  }

}
