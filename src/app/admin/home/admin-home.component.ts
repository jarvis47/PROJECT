import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

 
  constructor(private router:Router) { }
  adminUserId:string;
  adminUserName:string;
  adminRole:string;
  ngOnInit() {
    this.adminUserId=localStorage.getItem('loginUserId');
    this.adminUserName=localStorage.getItem('loginName');
    this.adminRole=localStorage.getItem("loginRole");

    if(this.adminUserId==undefined)
    {
      this.router.navigate(['/login']);
    }
  }
  logOut()
  {
    localStorage.removeItem('loginUserId');
    localStorage.removeItem('loginName');
    window.location.reload();
  }
}
