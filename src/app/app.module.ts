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
import { AuxCourseforumComponent } from './Auxiliar/aux-courseforum/aux-courseforum.component';
import { AuxAssignedcourseComponent } from './Auxiliar/aux-assignedcourse/aux-assignedcourse.component';
import { AuxMessagesComponent } from './Auxiliar/aux-messages/aux-messages.component';
import { AuxCourseflowComponent } from './Auxiliar/aux-courseflow/aux-courseflow.component';
import { UserMessagesComponent } from './Courses/user-messages/user-messages.component';
import { UserTicketsComponent } from './Courses/user-tickets/user-tickets.component';
import { UserNewticketComponent } from './Courses/user-newticket/user-newticket.component';
import { AdminTicketsComponent } from './Courses/admin-tickets/admin-tickets.component';
import { AuxCourseactivitieComponent } from './Auxiliar/aux-courseactivitie/aux-courseactivitie.component';
import { AuxCoursequizComponent } from './Auxiliar/aux-coursequiz/aux-coursequiz.component';
import { AuxQuizesComponent } from './Auxiliar/aux-quizes/aux-quizes.component';
import { UserCoursegradesComponent } from './Courses/user-coursegrades/user-coursegrades.component';
import { SplitAnswerPipe } from './split-answer.pipe';
import { UserViewquizComponent } from './Courses/user-viewquiz/user-viewquiz.component';

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
        path: 'user-messages', component:UserMessagesComponent
      },
      {
        path: 'user-tickets', component:UserTicketsComponent,
        children:[
          {
            path: 'user-newticket', component:UserNewticketComponent
          }
        ]
      },
      {
        path: 'user-courseflow', component:UserCourseflowComponent,
        children:[
          {
            path: 'user-courseactivitie', component:UserCourseactivitieComponent
          },
          {
            path: 'user-coursegrades', component:UserCoursegradesComponent
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
          },
          {
            path: 'user-viewquiz', component:UserViewquizComponent
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
      },
      {
        path: 'admin-tickets', component : AdminTicketsComponent
      }
    ]
  },
  {
    path: 'aux-module', component:AuxModuleComponent,
    children:[
      {
        path: 'aux-assignedcourse', component:AuxAssignedcourseComponent
      },
      {
        path: 'aux-messages', component:AuxMessagesComponent
      },
      {
        path: 'aux-courseflow', component:AuxCourseflowComponent,
        children:[
          {
            path: 'aux-courseactivitie', component:AuxCourseactivitieComponent
          },
          {
            path: 'aux-coursequiz', component:AuxCoursequizComponent
          },
          {
            path: 'aux-quizes', component:AuxQuizesComponent
          },
          {
            path: 'aux-courseforum', component:AuxCourseforumComponent,
            children:[
              {
                path: 'user-newpublication', component:UserNewpublicationComponent
              }
            ]
          }
        ]
      }
    ]
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
    UserNewpublicationComponent,
    AuxCourseforumComponent,
    AuxAssignedcourseComponent,
    AuxMessagesComponent,
    AuxCourseflowComponent,
    UserMessagesComponent,
    UserTicketsComponent,
    UserNewticketComponent,
    AdminTicketsComponent,
    AuxCourseactivitieComponent,
    AuxCoursequizComponent,
    AuxQuizesComponent,
    UserCoursegradesComponent,
    SplitAnswerPipe,
    UserViewquizComponent
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
