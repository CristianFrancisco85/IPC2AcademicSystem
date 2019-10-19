import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-courseflow',
  templateUrl: './user-courseflow.component.html',
  styleUrls: ['./user-courseflow.component.css']
})
export class UserCourseflowComponent implements OnInit {

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  viewActivities(){
    this.router.navigate(['user-module/user-courseflow/user-courseactivitie']);
  }

  viewForum(){
    this.router.navigate(['user-module/user-courseflow/user-courseforum']);
  }

  viewQuizes(){
    this.router.navigate(['user-module/user-courseflow/user-coursequiz']);
  }

}
