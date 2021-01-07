import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http:HttpClient) { }

  availability(BOOKED_DATE:String,SLOT_TIME:String) {
    return this._http.get("http://localhost:8080/b/"+BOOKED_DATE+"/"+SLOT_TIME);
  }
  Book(user) {
    return this._http.post("http://localhost:8080/booking",user);
  }
}
