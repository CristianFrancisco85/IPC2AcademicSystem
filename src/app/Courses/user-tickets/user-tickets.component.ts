import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {Ticket} from 'src/app/DataTypes';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-user-tickets',
  templateUrl: './user-tickets.component.html',
  styleUrls: ['./user-tickets.component.css']
})
export class UserTicketsComponent implements OnInit {

  Tickets : Ticket[];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    let iduser = parseInt(sessionStorage.getItem('UserID'));
    this.dataservice.getUserTicket(iduser).subscribe( Tickets => this.Tickets = Tickets);
  }

}
