import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-newpublication',
  templateUrl: './user-newpublication.component.html',
  styleUrls: ['./user-newpublication.component.css']
})
export class UserNewpublicationComponent implements OnInit {

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  newPublication(Titulo,Cuerpo){
    let iduser = parseInt(sessionStorage.getItem('UserID'));
    let idcourse = parseInt(sessionStorage.getItem('IDCourse'));
    let section = sessionStorage.getItem('Section');
    let semester = parseInt(sessionStorage.getItem('Semester'));
    let year = parseInt (sessionStorage.getItem('Year'));
    this.dataservice.newPublication(Titulo.value,Cuerpo.value,iduser,idcourse,section,semester,year).subscribe((result) =>{
        console.log(result);
        alert("Publicacion Realizada");
        this.router.navigate(['user-module/user-courseflow/user-courseforum']);
    });
  }


}
