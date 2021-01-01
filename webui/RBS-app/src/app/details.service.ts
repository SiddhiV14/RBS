import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _http:HttpClient) { }

  viewDetails() {
    return this._http.get("http://localhost:3000/details");
  }

  deleteUser(detail) {
    return this._http.delete("http://localhost:3000/details/" +detail.id);
  }
}
