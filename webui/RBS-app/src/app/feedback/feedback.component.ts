import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  constructor(private feedback :FeedbackService) { }

  ngOnInit(): void {
    this.f=new FormGroup({
      rating:new FormControl(''),
      review:new FormControl('')
    })
  }
  onSubmit(f:any) {
    console.log(f.rating);
    console.log(f.review);
    var id=localStorage.getItem("id");
    var name=localStorage.getItem("username");
    this.fd = new Feedback(id,f.rating,f.review,name);
    console.log(name);
    console.log(id);
    this.feedback.feedbacks(this.fd).subscribe((response)=>{
      console.log("your feedback is submitted");
  })
}
}
