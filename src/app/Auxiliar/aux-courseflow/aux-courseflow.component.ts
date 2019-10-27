import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aux-courseflow',
  templateUrl: './aux-courseflow.component.html',
  styleUrls: ['./aux-courseflow.component.css']
})
export class AuxCourseflowComponent implements OnInit {

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  viewActivities(){
    this.router.navigate(['aux-module/aux-courseflow/aux-courseactivitie']);
  }

  viewForum(){
    this.router.navigate(['aux-module/aux-courseflow/aux-courseforum']);
  }

  viewQuizes(){
    this.router.navigate(['aux-module/aux-courseflow/aux-quizes']);
  }

}
