import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {Ticket} from 'src/app/DataTypes';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-admin-tickets',
  templateUrl: './admin-tickets.component.html',
  styleUrls: ['./admin-tickets.component.css']
})
export class AdminTicketsComponent implements OnInit {

  Tickets : Ticket[];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getTickets().subscribe( Tickets => this.Tickets = Tickets);
  }

  updateTicket(Ticket){
    let IDTicket= Ticket[Ticket.selectedIndex].id;

    this.dataservice.updateUserTicket(IDTicket,Ticket.value).subscribe((result) =>{
      console.log(result);
      alert("Estado de Ticket Actualizado");
    });
  }

}
