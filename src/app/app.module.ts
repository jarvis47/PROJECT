import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin/home/admin-home.component';
import { UserHomeComponent } from './user/home/user-home.component';
import { AdminService } from './services/admin.service';
import { UserService } from './services/user.service';
import { AssignTestSetsComponent } from './admin/assign-test-sets/assign-test-sets.component';
import { ViewTestSetsComponent } from './admin/view-test-sets/view-test-sets.component';
import { ViewAssignedTestSetsComponent } from './admin/view-assigned-test-sets/view-assigned-test-sets.component';
import { UploadTestSetsComponent } from './admin/upload-test-sets/upload-test-sets.component';
import { TestPaperComponent } from './user/test-paper/test-paper.component';
import { ErrorPageComponent } from './user/error-page/error-page.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AddNewBatchComponent } from './admin/add-new-batch/add-new-batch.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { ViewCandidatesComponent } from './admin/view-candidates/view-candidates.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    UserHomeComponent,
    AssignTestSetsComponent,
    ViewTestSetsComponent,
    ViewAssignedTestSetsComponent,
    UploadTestSetsComponent,
    TestPaperComponent,
    ErrorPageComponent,
    AddNewBatchComponent,
    AddAdminComponent,
    ViewCandidatesComponent,
    AdminDashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,ReactiveFormsModule,RouterModule.forRoot([
      {
        path:'login',component:LoginComponent
      },
      { 
        path:'user-home',
        component:UserHomeComponent,
        children:[
          { path:'error-page', component:ErrorPageComponent},
          { path:'test-page', component:TestPaperComponent}
        ]
      },
      {  
        path:'admin-home',
        component:AdminHomeComponent,
        children:[
          { path:'upload-test-sets', component:UploadTestSetsComponent},
          { path:'assign-test-sets',component:AssignTestSetsComponent},
          { path:'view-test-sets', component:ViewTestSetsComponent},
          { path:'view-assigned-mpt-sets',component:ViewAssignedTestSetsComponent},
          { path:'add-new-batch',component:AddNewBatchComponent},
          { path:'view-candidates',component:ViewCandidatesComponent},
          { path:'admin-dashboard',component:AdminDashboardComponent},
          { path:'add-admin',component:AddAdminComponent}
        ]
      },
    ]),
  ],
  providers: [AdminService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
