import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  loginForm:FormGroup;
  adminData:Admin[];
  
  constructor(private authService:AuthenticationService, private router:Router) {
    this.loginForm=new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    });
  }

  adminUserId:string;
  adminUserName:string;
  ngOnInit() {
      this.adminUserId=localStorage.getItem('loginUserId');
      this.adminUserName=localStorage.getItem('loginName');
  }

  admin:Admin;
  checkLogin(username:string, password:string)
  {
    
    this.authService.checkLogin(username,password)
    .subscribe((res)=>
    {
      this.admin=res;
      if(res[0]!=undefined)
      {
        if(res[0].userId==username && res[0].password==password)
        {
          console.log("res : "+res.userId);
          console.log("res[0] : "+ this.admin[0].subLocation[1]);
          
          
          localStorage.setItem("loginUserId",username);
          localStorage.setItem("loginName",res[0].name);
          localStorage.setItem("loginRole",res[0].role);
          localStorage.setItem("loginAdminMultilocationSupport",res[0].multiLocation)
          localStorage.setItem("loginAdminLocation",res[0].location);
          localStorage.setItem("loginAdminSubLocation",res[0].subLocation);
          
          this.router.navigate(['/admin-home']);
        } 
      }
      else
      {
        console.log("failed to login check credentials");
      } 
    });;
    
  }

  onSubmit()
  {
    let username=this.loginForm.value['username'];
    let password=this.loginForm.value['password'];

   this.checkLogin(username,password);
  }

}
