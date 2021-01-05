import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  createUser(username:String, password:String) {
    return this._http.get("http://localhost:8080/login/"+username+"/"+password);
  }
}
