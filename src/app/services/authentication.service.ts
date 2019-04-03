import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  //-------------------URLS------------------------
  checkLoginURL="/api/admin-authentication/"

  constructor(private http:Http) { }

  checkLogin(userId:string,password:string)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    let queryString="?userId="+userId+"&password="+password;
    //console.log(queryString);
    return this.http.get(this.checkLoginURL+queryString,options)
    .pipe(map((response : Response) => {
        return response.json() as Admin;   
    }));
  }

}
