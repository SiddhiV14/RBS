import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http:HttpClient) { }

  createNewUser(signup){
    return this._http.post("http://localhost:8080/register",signup);
  }
}
