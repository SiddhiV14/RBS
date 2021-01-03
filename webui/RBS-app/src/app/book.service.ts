import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http:HttpClient) { }

  availability() {
    return this._http.get("http://localhost:3000/book");
  }
  Book(user) {
    return this._http.post("http://localhost:3000/bookings",user);
  }
}
