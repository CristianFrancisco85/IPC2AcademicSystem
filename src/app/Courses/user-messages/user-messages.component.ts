import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {Message} from 'src/app/DataTypes';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css']
})
export class UserMessagesComponent implements OnInit {

  Mensajes : Message[];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    let iduser = parseInt(sessionStorage.getItem('UserID'));
    this.dataservice.getUserMessage(iduser).subscribe( Mensajes => this.Mensajes = Mensajes);
  }

}
