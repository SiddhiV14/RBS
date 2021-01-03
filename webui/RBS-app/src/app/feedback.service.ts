import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private _http:HttpClient) { }

  feedbacks(user) {
    return this._http.post("http://localhost:3000/feedbacks",user);
  }
}
