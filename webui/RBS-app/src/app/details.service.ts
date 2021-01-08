import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
 
  constructor(private _http:HttpClient) { }
 
  viewDetails(detail2:String) {
    return this._http.get("http://localhost:8080/showbooking/"+detail2);
  }
 
  deleteUser(detail) {
    return this._http.delete("http://localhost:8080/delete/" +detail.booking_id);
  }
}