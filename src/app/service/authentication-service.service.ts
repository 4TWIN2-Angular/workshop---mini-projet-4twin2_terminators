import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

baseUrl='http://localhost:9091'  
  public loginstatus:boolean = true;
   

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });//marcher sans kay
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  }
  
  constructor(private _http: HttpClient) { 
   
  }

  public generateToken(loginData:any){

    return this._http.post(`${this.baseUrl}/generate-token`, loginData, {
      headers: this.requestHeader,
    });
  }
  //set token in localStorage
  public loginUser(token:any){

    localStorage.setItem('token', token);
   // this.loginStatusSubject.next(true);
    return true;

  }


  public isLoggedIn(){

    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){

      return false;


    }else{

      return true;
    }

  }

  public logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;


  }

  public getToken(){


    return localStorage.getItem('token');

  }


  public getUser(){

    let userStr = localStorage.getItem('user');
    if(userStr!=null){

      return JSON.parse(userStr);

    }else{

      this.logout();
      return null;

    }

  }


  public setUser(user:any){

    localStorage.setItem('user', JSON.stringify(user));


  }


  public getUserRole(){

    let user = this.getUser();
    return user.authorities[0].authority;


  }


  public getCurrentUser(){

    return this._http.get(`${this.baseUrl}/current-user`,this.httpOptions);

  }
}
