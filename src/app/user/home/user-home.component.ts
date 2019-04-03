import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
  providers: [UserService]
})
export class UserHomeComponent implements OnInit{

  ngOnInit()
  {

  }
  key: any;
  TestNotFound:boolean;
  main_div:string;

  constructor(private userService: UserService) 
  {
    console.log("user home called");
    //Finding IP Address and setting it into a session
    if(userService.checkIpAddress())
    { 
      this.TestNotFound=false;
      userService.redirectOnScreenChange();
    }
    else
    {
      this.TestNotFound=true;
    }
  }

  // Reload webpage on change in resolution size
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    window.location.reload();
  }

  // ********************************************************Keyup event blocker
  @HostListener('document:keyup', ['$event'])
  handlePrintScreenEvent(event: KeyboardEvent) {
    if (event.keyCode == 44) // Printscreen Block
    {
      this.userService.copyToClipboard();
      console.log(' prntscrn pressed keyup');
      return false;
    }
    else if (event.keyCode == 122) // if F11 pressed reload page to check sreen resolution
    {
      window.location.reload();
    }
    else if (event.keyCode == 91) //Meta left button
    {
      this.main_div='';
    }
    else if (event.keyCode == 92) //meta right button
    {
      this.main_div='';
    }
  }

  // ***************************************************Mouse event controllers  
  @HostListener('document:mousedown', ['$event'])
  handleMouseEvent(event: MouseEvent) {
    return false;
  }

  // ************************************************Mouse context menu right click event
  @HostListener('document:contextmenu', ['$event'])
  handleContextMenuEvent(event) {
    return false;
  }

  // ************************************************* Keydown events
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
 
    this.key = event.key;
    console.log(event);
    // F12 key blocker
    if (event.keyCode == 123) {
      return false;
    }
    // CTRL+S Blocker
    else if (event.ctrlKey && event.keyCode == 83) {
      return false;
    }
    // CTRL+C Blocker
    else if (event.ctrlKey && event.keyCode == 67) {
      return false;
    }
    // CTRL+X Blocker
    else if (event.ctrlKey && event.keyCode == 80) {
      return false;
    }
    // CTRL+A Blocker
    else if (event.ctrlKey && event.keyCode == 65) {
      return false;
    }
    // CTRL+P Blocker
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      return false;
    }
    // CTRL+F11 Blocker
    else if (event.keyCode == 122) {
      window.location.reload();
    }
   
    console.log('\n\nkey pressed : " + this.key + ');
  }

  @HostListener('window:keydown', ['$event'])
  windowKeyDownEventHandler(event) {
    if (event.keyCode == 91) //meta left
     {
    
      this.main_div='main-div';
      return false;
    }
    else if (event.keyCode == 92)//meta right
    {
      this.main_div='main-div';
      return false;
    }
  }


}
