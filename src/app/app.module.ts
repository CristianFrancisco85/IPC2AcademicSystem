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
import { UserAssignedcourseComponent } from './Courses/user-assignedcourse/user-assignedcourse.component';
import { UserCourseflowComponent } from './Courses/user-courseflow/user-courseflow.component';
import { UserCourseactivitieComponent } from './Courses/user-courseactivitie/user-courseactivitie.component';
import { UserCourseforumComponent } from './Courses/user-courseforum/user-courseforum.component';
import { UserCoursequizComponent } from './Courses/user-coursequiz/user-coursequiz.component';
import { AdminCourselistComponent } from './Courses/admin-courselist/admin-courselist.component';
import { AdminNewauxComponent } from './Courses/admin-newaux/admin-newaux.component';
import { AdminNewUserAuxComponent } from './Courses/admin-new-user-aux/admin-new-user-aux.component';
import { AdminAuxiliaresComponent } from './Courses/admin-auxiliares/admin-auxiliares.component';
import { UserNewpublicationComponent } from './Courses/user-newpublication/user-newpublication.component';

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
    path: 'user-module', component:UserModuleComponent,
    children:[
      {
        path: 'user-courseassign', component:UserCourseassignComponent
      },
      {
        path: 'user-assignedcourse', component:UserAssignedcourseComponent
      },
      {
        path: 'user-courseflow', component:UserCourseflowComponent,
        children:[
          {
            path: 'user-courseactivitie', component:UserCourseactivitieComponent
          },
          {
            path: 'user-courseforum', component:UserCourseforumComponent,
            children:[
              {
                path: 'user-newpublication', component:UserNewpublicationComponent
              }
            ]
          },
          {
            path: 'user-coursequiz', component:UserCoursequizComponent
          }
        ]
      }
    ]
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
      },
      {
        path: 'admin-courselist', component:AdminCourselistComponent
      },
      {
        path: 'admin-newAux', component : AdminNewauxComponent
      },
      {
        path: 'admin-newUserAux', component : AdminNewUserAuxComponent
      },
      {
        path: 'admin-aux', component : AdminAuxiliaresComponent
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
    AdminNewassignComponent,
    UserAssignedcourseComponent,
    UserCourseflowComponent,
    UserCourseactivitieComponent,
    UserCourseforumComponent,
    UserCoursequizComponent,
    AdminCourselistComponent,
    AdminNewauxComponent,
    AdminNewUserAuxComponent,
    AdminAuxiliaresComponent,
    UserNewpublicationComponent
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
