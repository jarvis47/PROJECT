import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-test-paper',
  templateUrl: './test-paper.component.html',
  styleUrls: ['./test-paper.component.css']
})
export class TestPaperComponent implements OnInit 
{

  ip_address_session:any=sessionStorage.getItem('ip_address_session');
  urlOfImage:string;
  urlfound:boolean=false;
  testPaperSet:string;
 constructor(private userService:UserService)
 {
   console.log("Main Test paper component called")
  
      //Checking paper set
       this.testPaperSet=userService.checkTestAvailability().candidate.ipAddress;
      if(this.testPaperSet!=null)
      {
        this.urlOfImage=this.testPaperSet;
        this.urlfound=true;
      }
      else
      {
        this.urlfound=false;
      }
      userService.redirectOnScreenChange();
 }
 ngOnInit(){

 }

}
