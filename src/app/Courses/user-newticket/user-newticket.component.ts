import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/DataTypes';

@Component({
  selector: 'app-user-newticket',
  templateUrl: './user-newticket.component.html',
  styleUrls: ['./user-newticket.component.css']
})
export class UserNewticketComponent implements OnInit {

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  newTicket(Asunto,Cuerpo){
    let IDUser= parseInt(sessionStorage.getItem('UserID'));
    this.dataservice.newUserTicket(Asunto.value,Cuerpo.value,IDUser).subscribe((result) =>{
      console.log(result);
      alert("Ticket Enviado");
    });
  }

}
