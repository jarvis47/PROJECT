import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private userService:UserService) { 
    console.log("error page called");
    userService.redirectOnScreenChange();
  }

  ngOnInit() {
  }

}
