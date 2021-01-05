import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {

  constructor(private _http:HttpClient) { }

  viewRates() {
    return this._http.get("http://localhost:8080/rates");
  }
}
