import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private _http:HttpClient) { }

  feedbacks(user) {
    return this._http.post("http://localhost:8080/feedback",user);
  }
}
