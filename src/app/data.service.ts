import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User,Course,CourseInstance,CourseAsssign,StudentAssign,CourseActivitie,StudentGrade} from './DataTypes'
import { Assistance,ForumPublication,ForumAnswer,Message,Ticket,Quiz,QuizQuestion} from './DataTypes'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //---USER

  getAuxiliares(): Observable<User[]> { 
    return this.http.get<User[]>('http://localhost:3000/getAuxiliares');  
  } 

  addUser(FullName:string,UserName:string,Carnet:string,Email:string,UserPassword:string,Role:string){
    return this.http.post('http://localhost:3000/newUser',{
      fullname : FullName,
      username : UserName,
      carnet : Carnet,
      email : Email,
      userpassword : UserPassword,
      role : Role
    });
  }

  loginStudent(UserName:string, UserPassword:string) {
    return this.http.post('http://localhost:3000/loginStudent',{
      username: UserName,
      userpassword: UserPassword,
    });   
  }

  loginAdmin(UserName:string, UserPassword:string) {
    return this.http.post('http://localhost:3000/loginAdmin',{
      username: UserName,
      userpassword: UserPassword,
    });   
  }

  loginAux(UserName:string, UserPassword:string) {
    return this.http.post('http://localhost:3000/loginAux',{
      username: UserName,
      userpassword: UserPassword,
    });   
  }

  getUserID(UserName:string){
    return this.http.post('http://localhost:3000/userId',{
      username: UserName
    });  
  }

  checkUserName(UserName:string) {
    return this.http.post('http://localhost:3000/verifyUsername',{
      username: UserName
    });   
  }

  //---COURSE

  addCourse(CourseName:string,Description:string){
    return this.http.post('http://localhost:3000/newCourse',{
      coursename : CourseName,
      description: Description,
    });
  }

  getCourses(): Observable<Course[]> { 
    return this.http.get<Course[]>('http://localhost:3000/getCourses');  
  }
  
  //---COURSEINSTANCE

  addCourseInstance(IDCourse:number,Section:string,BeginTime:string,EndTime:string){
    return this.http.post('http://localhost:3000/newCourseInstance',{
      idcourse:IDCourse,
      section:Section,
      begintime:BeginTime,
      endtime:EndTime
    });
  }



}
