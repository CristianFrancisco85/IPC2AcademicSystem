import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginAuxComponent } from './login-aux/login-aux.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { AuxModuleComponent } from './aux-module/aux-module.component';
import { UserModuleComponent } from './user-module/user-module.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserCourseassignComponent } from './Courses/user-courseassign/user-courseassign.component';
import { AdminNewcourseComponent } from './Courses/admin-newcourse/admin-newcourse.component';
import { AdminNewsectionComponent } from './Courses/admin-newsection/admin-newsection.component';
import { AdminNewassignComponent } from './Courses/admin-newassign/admin-newassign.component';

const Rutas: Routes = [
  {
    path: '', redirectTo: '/user-login', pathMatch: 'full'
  },
  {
    path: 'user-login', component:LoginUserComponent
  },
  {
    path: 'admin-login', component:LoginAdminComponent
  },
  {
    path: 'aux-login', component:LoginAuxComponent
  },
  {
    path: 'user-module', component:UserModuleComponent
  },
  {
    path: 'admin-module', component:AdminModuleComponent,
    children:[
      {
        path: 'new-course', component:AdminNewcourseComponent
      },
      {
        path: 'new-section', component:AdminNewsectionComponent
      },
      {
        path: 'new-assign', component:AdminNewassignComponent
      }
    ]
  },
  {
    path: 'aux-module', component:AuxModuleComponent
  },
  {
    path: 'user-register', component:UserRegisterComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    LoginAdminComponent,
    LoginAuxComponent,
    AdminModuleComponent,
    AuxModuleComponent,
    UserModuleComponent,
    UserRegisterComponent,
    UserCourseassignComponent,
    AdminNewcourseComponent,
    AdminNewsectionComponent,
    AdminNewassignComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Rutas),
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService,HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
