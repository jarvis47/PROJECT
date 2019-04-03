import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'; 
import {TestData} from '../models/test-data';
import {Candidate} from '../models/candidates';

declare let ClientIP: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  privateIP ;
  publicIP;

  constructor(private router:Router,private http:HttpClient) { }

  //Check full screen of the window
  checkFullScreen():boolean
  {
      if(window.innerHeight==window.screen.height && window.innerWidth==window.screen.width)
      {
        console.log('-------------Browser is in fullscreen-------');
        return true;
      }
      else{
        console.log('-------------Browser is in not fullscreen-------');
        return false;
      }
  }

  //Redirect on test page if window is full screened
  redirectOnScreenChange()
  {
    console.log("service redirect func called");
    
    //redirect on screen changes
    if(this.checkFullScreen())
     {
         this.router.navigate(['user-home/test-page']);
         return true;
     } 
     else
     {
       this.router.navigate(['user-home/error-page']);
       return false;
     }
  }

  //Copy to clipboard for PrintScrn module
  copyToClipboard()
  {
    var aux = document.createElement("input");
    aux.setAttribute("value", "print screen disabled!");
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    // Remove it from the body
    document.body.removeChild(aux);
  } 

  findIpAddress():any
  {
    //Read IP Address
    /************************************************************************************************************* */
    this.privateIP = ClientIP;
    /**
     * To read public IP
     */
    this.http.get('https://api.ipify.org?format=json').subscribe(data => {
      this.publicIP=data['ip'];
    });
    return this.privateIP;
    /************************************************************************************************************* */
  }

  getAssinedUserIpAddress:string;
  countCheckIpAddressFunction:number=0;
  checkIpAddress():boolean
  {
    let ip_address_session=sessionStorage.getItem('ip_address_session');
    if(ip_address_session==null)
    {
      window.sessionStorage.setItem("ip_address_session",this.findIpAddress());
    }
    console.log("IP address of my PC="+ip_address_session);
    this.getAssinedUserIpAddress=this.checkTestAvailability().candidate.ipAddress;
    console.log(this.getAssinedUserIpAddress+"   "+ip_address_session);
    //Checking IP address of the current matchine
    this.countCheckIpAddressFunction++;
    console.log('IP address checked : '+this.countCheckIpAddressFunction);
    if(this.getAssinedUserIpAddress==ip_address_session)
    {
      return true;
    }
    else
    {
      return false;
    }
    
  }

  checkTestAvailability():TestData
  {
    
    //Fetch tests from database on the basis of lab details -ip address and date 
    let testData = new TestData();
    //testData.setEmailAddress("rsoudey@capgemini.com");
    testData.candidate.ipAddress="10.219.34.87";
    testData.testPaperSet="../../assets/g.png";
    return testData;
  }
}
