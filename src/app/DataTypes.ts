export interface User {
    "IDUser" : number;
    "FullName" : string;
    "UserName" : string;
    "Carnet" : string;
    "Email" : string;
    "Userpassword" : string;
    "Role" :  string;
}

export interface Course {
    "IDCourse" : number;
    "CourseName" : string;
    "Description" : string ;
}
 
export interface CourseInstance {
    "IDCourse" : number;
    "Section" : string;
    "BeginTime" : string;
    "EndTime" : string; 
    "CourseName" : string;
}

export interface CourseAsssign {
    "IDCourse" : number;
    "Section" : string;
    "Semester" : number;
    "YearAssign" : number;
    "IDAux" : number;
    "CourseName" : string;
    "BeginTime" : string;
    "EndTime" : string; 
}

export interface StudentAssign {
    "IDUser" : number;
    "CourseName" : string;
    "IDCourse" : number;
    "Section" : string;
    "Semester" : number;
    "YearAssign" : number;
}

export interface CourseActivitie {
    "IDActivitie" : number;
    "IDCourse" : number;
    "Section" : string;
    "Semester" : number;
    "YearAssign" : number;
    "Title" : string;
    "Description" : string;
    "Points" : number;
}

export interface ActivitieAnswer {
    "IDActivitie" : number;
    "IDUser" : number;
    "Body" : string;
    "FullName" : string;
    "Title" : string;
}

export interface StudentGrade {
    "IDGrade" : number;
    "Grade" : number;
    "IDActivitie" : number;
    "IDUser" : number;
    "Title" : string;
}

export interface Assistance {
    "IDAssistance" : number;
    "IDUser" : number;
    "IDCourse" : number;
    "Section" : string;
    "Semester" : number;
    "YearAssign" : number;
    "AssisDate" : Date;
    "Assist" : string;
}

export interface ForumPublication {
    "IDPublicaction" : number;
    "Title" : string;
    "Body" : string;
    "IDUser" : number;
    "IDCourse" : number;
    "Section" : string;
    "Semester" : number;
    "YearAssign" : number;
    "UserName": string;
}

export interface ForumAnswer {
    "IDAnswer" : number;
    "Body" : string;
    "IDUser" : number;
    "IDPublication" : number;
    "UserName": string;
}

export interface Message {
    "IDMessage" : number;
    "Asunto" : string;
    "Body" : string;
    "Archivos" : Blob;
    "IDEmisor" : number;
    "IDReceptor" : number;
    "FullName" : string;
}

export interface Ticket{
    "IDTicket" : number;
    "Asunto" : string;
    "Body" : string;
    "Estado" : string;
    "IDUser" : number;
}

export interface Quiz{
    "IDQuiz" : number;
    "IDCourse" : number;
    "Section" : string;
    "Semester" : number;
    "YearAssign" : number;
    "Title" : string;
    "State" : string;
}

export interface QuizQuestion{
    "IDQuestion" : number;
    "IDQuiz" : number;
    "Body" : string;
    "Answer" : string;
    "QOptions" : string;
    "State" : string;
}

export interface OkPacket {
    "fieldCount": number;
    "affectedRows": number;
    "insertId": number;
    "serverStatus": number;
    "warningCount": number;
    "message": string;
    "protocol41": boolean;
    "changedRows": number;
}