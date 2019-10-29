import { Injectable, ɵɵresolveBody } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User,Course,CourseInstance,CourseAsssign,StudentAssign,CourseActivitie,StudentGrade, ActivitieAnswer} from './DataTypes'
import { Assistance,ForumPublication,ForumAnswer,Message,Ticket,Quiz,QuizQuestion} from './DataTypes'
import { Title } from '@angular/platform-browser';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public Fecha:string;

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

  getStudentsAux(IDAux:number):Observable<User[]>{
    return this.http.post<User[]>('http://localhost:3000/getStudentsAux',{
      idaux :IDAux
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

  getAuxAssigns(IDUser:number):Observable<StudentAssign[]> {
    return this.http.post<StudentAssign[]>('http://localhost:3000/getAuxAssign',{
      iduser: IDUser
    });   
  }

  deleteStudentAssign(IDUser:number,IDCourse:number,Section:string,Semester:number,Year:number){
    return this.http.post('http://localhost:3000/deleteStudentAssign',{
    iduser :IDUser,
    idcourse: IDCourse,
    section: Section,
    semester: Semester,
    year: Year
    });
  }

  //--STUDENTGRADE 

  newStudentGrade(IDUser:number,IDActivitie:number,Grade:number){
    return this.http.post('http://localhost:3000/newStudentGrade',{
      iduser:IDUser,
      idactivitie : IDActivitie,
      grade: Grade
    });
  }

  getStudentGrades(IDUser:number,IDCourse:number,Section:string,Semester:number,Year:number):Observable<StudentGrade[]> {
    return this.http.post<StudentGrade[]>('http://localhost:3000/getStudentGrades',{
      iduser: IDUser,
      idcourse: IDCourse,
      section: Section,
      semester: Semester,
      year: Year
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

  //--MESSAGE 
  newMessage(Asunto:string,Cuerpo:string,IDEmisor:number,IDReceptor:number,Archivos){
    return this.http.post('http://localhost:3000/newMessage',{
      asunto:Asunto,
      cuerpo:Cuerpo,
      idemisor:IDEmisor,
      idreceptor:IDReceptor,
      archivos:Archivos
    });
  }

  getUserMessage(IDUser:number):Observable<Message[]>{
    return this.http.post<Message[]>('http://localhost:3000/getUserMessage',{
      iduser:IDUser
    });
  }

  //--TICKET

  getUserTicket(IDUser:number):Observable<Ticket[]>{
    return this.http.post<Ticket[]>('http://localhost:3000/getUserTicket',{
      iduser:IDUser
    });
  }

  newUserTicket(Asunto:string,Cuerpo:string,IDUser:number){
    return this.http.post('http://localhost:3000/newUserTicket',{
      iduser:IDUser,
      asunto:Asunto,
      cuerpo:Cuerpo
    });
  }

  updateUserTicket(IDTicket:number,Estado:string){
    return this.http.post('http://localhost:3000/updateUserTicket',{
      idticket:IDTicket,
      estado:Estado
    });
  }

  getTickets(): Observable<Ticket[]> { 
    return this.http.get<Ticket[]>('http://localhost:3000/getTickets');  
  }

  //--COURSEACTIVITIE

  newActivitie(Title:string,Cuerpo:string,Puntos:number,IDCourse:number,Section:string,Semester:number,Year:number){
    return this.http.post('http://localhost:3000/newCourseActivitie',{
      title:Title,
      body:Cuerpo,
      points:Puntos,
      idcourse: IDCourse,
      section: Section,
      semester: Semester,
      year: Year
    });
  }

  getActivities(IDCourse:number,Section:string,Semester:number,Year:number):Observable<CourseActivitie[]>{
    return this.http.post<CourseActivitie[]>('http://localhost:3000/getActivities',{
      idcourse: IDCourse,
      section: Section,
      semester: Semester,
      year: Year
    });
  }

  //--ACTIVITIE ANSWER
  newActivitieAnswer(IDActivitie:number,IDUser:number,Body:string){
    return this.http.post('http://localhost:3000/newActivitieAnswer',{
      idactivitie:IDActivitie,
      iduser:IDUser,
      body:Body
    });
  }

  getActivitieAnswer(IDCourse:number,Section:string,Semester:number,Year:number):Observable<ActivitieAnswer[]>{
    return this.http.post<ActivitieAnswer[]>('http://localhost:3000/getActivitieAnswer',{
      idcourse: IDCourse,
      section: Section,
      semester: Semester,
      year: Year
    });
  }

  //--QUIZ

  newCourseQuiz(Title:string,IDCourse:number,Section:string,Semester:number,Year:number){
    return this.http.post('http://localhost:3000/newCourseQuiz',{
      idcourse: IDCourse,
      section: Section,
      semester: Semester,
      year: Year,
      title:Title
    });
  }

  getCourseQuiz(IDCourse:number,Section:string,Semester:number,Year:number):Observable<Quiz[]>{
    return this.http.post<Quiz[]>('http://localhost:3000/getCourseQuiz',{
      idcourse: IDCourse,
      section: Section,
      semester: Semester,
      year: Year
    });
  }
  getCourseQuizStudent(IDCourse:number,Section:string,Semester:number,Year:number):Observable<Quiz[]>{
    return this.http.post<Quiz[]>('http://localhost:3000/getCourseQuizStudent',{
      idcourse: IDCourse,
      section: Section,
      semester: Semester,
      year: Year
    });
  }

  updateCourseQuiz(IDQuiz:number,Estado:string){
    return this.http.post('http://localhost:3000/updateCourseQuiz',{
      idquiz:IDQuiz,
      estado:Estado
    });
  }

  //--QUIZQUESTION

  newQuizQuestion(IDQuiz:number,Body:string,Answer:string,Opciones:string){
    return this.http.post('http://localhost:3000/newQuizQuestion',{
      idquiz:IDQuiz,
      body : Body,
      answer : Answer,
      opciones :Opciones
    });
  }

  getQuizQuestion(IDQuiz:number,):Observable<QuizQuestion[]>{
    return this.http.post<QuizQuestion[]>('http://localhost:3000/getQuizQuestion',{
      idquiz:IDQuiz
    });
  }


}
