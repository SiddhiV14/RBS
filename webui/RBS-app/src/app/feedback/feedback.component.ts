import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';
import { Feedback } from './Feedback'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  f:FormGroup;
  fd:Feedback;
  name:string;
  constructor(private feedback :FeedbackService, private route :Router) { }

  ngOnInit(): void {
    this.f=new FormGroup({
      rating:new FormControl(''),
      review:new FormControl('')
    })
    this.name = localStorage.getItem("uname");
    if(this.name==null) {
      alert("please login first");
      this.route.navigate(["login"]);
    }
  }
  onSubmit(f:any) {
    console.log(f.rating);
    console.log(f.review);
    //var bookingId=localStorage.getItem("id");
    var name=localStorage.getItem("username");
    //console.log(id);
    //console.log(name);
    this.fd = new Feedback(f.rating,f.review,name);
    console.log(name);
    //console.log(bookingId);
    this.feedback.feedbacks(this.fd).subscribe((response)=>{
      alert("Thank You!!!Your feedback is submitted");
      this.route.navigate(["/home"]);
      console.log("your feedback is submitted");
  })
}
}
