import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User,Course,CourseInstance,CourseAsssign,StudentAssign,CourseActivitie,StudentGrade} from './DataTypes'
import { Assistance,ForumPublication,ForumAnswer,Message,Ticket,Quiz,QuizQuestion} from './DataTypes'
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //---USER

  getAuxiliares(): Observable<User[]> { 
    return this.http.get<User[]>('http://localhost:3000/getAuxiliares');  
  } 

  getEstudiantes(): Observable<User[]> { 
    return this.http.get<User[]>('http://localhost:3000/getEstudiantes');  
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

  setUserAux(IDUser:number){
    return this.http.post('http://localhost:3000/setUserAux',{
      iduser:IDUser
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
      description: Description
    });
  }

  getCourses(): Observable<Course[]> { 
    return this.http.get<Course[]>('http://localhost:3000/getCourses');  
  }

  getCourse(IDCourse:string):Observable<Course[]> {
    return this.http.post<Course[]>('http://localhost:3000/getCourse',{
      idcourse: IDCourse
    });   
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

  getCourseSections(): Observable<CourseInstance[]> { 
    return this.http.get<CourseInstance[]>('http://localhost:3000/getCourseSections');  
  }
  
  //--COURSEASSIGN

  addCourseAssign(IDCourse:number,Section:string,Semester:number,Year:number,IDAux:number){
    return this.http.post('http://localhost:3000/newCourseAssign',{
    idcourse : IDCourse,
    section : Section,
    semester : Semester,
    year : Year,
    idaux : IDAux
    });
  }

  getCourseAssign(): Observable<CourseAsssign[]> { 
    return this.http.get<CourseAsssign[]>('http://localhost:3000/getCourseAssigns');  
  }

  deleteCourseAssign(IDCourse:number,Section:string,Semester:number,Year:number){
    return this.http.post('http://localhost:3000/deleteCourseAssign',{
    idcourse : IDCourse,
    section : Section,
    semester : Semester,
    year : Year,
    });
  }

  deleteCourseAssignAux(IDCourse:number,Section:string,Semester:number,Year:number){
    return this.http.post('http://localhost:3000/deleteCourseAssignAux',{
    idcourse : IDCourse,
    section : Section,
    semester : Semester,
    year : Year,
    });
  }

  //--STUDENTASSIGN
  
  addStudentAssign(IDUser:number,IDCourse:number,Section:string,Semester:number,Year:number){
    return this.http.post('http://localhost:3000/newStudentAssign',{
    iduser :IDUser,
    idcourse: IDCourse,
    section: Section,
    semester: Semester,
    year: Year
    });
  }

  getStudentAssigns(IDUser:number):Observable<StudentAssign[]> {
    return this.http.post<StudentAssign[]>('http://localhost:3000/getStudentAssign',{
      iduser: IDUser
    });   
  }

  //--FORUMPUBLICATIONS

  getForumPublications(): Observable<ForumPublication[]> { 
    return this.http.get<ForumPublication[]>('http://localhost:3000/getForumPublications');  
  }

  newPublication(Title:string,Cuerpo:string,IDUser:number,IDCourse:number,Section:string,Semester:number,Year:number){
    return this.http.post('http://localhost:3000/newPublication',{
      title:Title,
      body:Cuerpo,
      iduser:IDUser,
      idcourse: IDCourse,
      section: Section,
      semester: Semester,
      year: Year
    });
  }

  //--FORUMANSWER

  getForumPublicationAnswers(): Observable<ForumAnswer[]> { 
    return this.http.get<ForumAnswer[]>('http://localhost:3000/getForumPublicationAnswers');  
  }

  newAnswer(IDUser:number,Cuerpo:string,IDPublication:number){
    return this.http.post('http://localhost:3000/newAnswer',{
      body:Cuerpo,
      iduser:IDUser,
      idpublication:IDPublication
    });
  }

}
