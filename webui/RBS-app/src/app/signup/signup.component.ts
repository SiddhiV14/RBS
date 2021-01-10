import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  f:FormGroup;
  result:any;
  constructor(private route :Router,private signup:SignupService) { }

  ngOnInit(): void {
    this.f=new FormGroup({
      fname:new FormControl(''),
      lname:new FormControl(''),
      mobile_no:new FormControl(''),
      username:new FormControl('', [ Validators.required ]),
      password:new FormControl('')
    })
  }

  createNewUser(formObj){
   this.signup.createNewUser(formObj).subscribe((response)=>{
     this.result = response;
     if(this.result==null) {
       alert("username exists");
     } else {
      alert("Registered Successfully");
      this.route.navigate(["login"]);
     }
   })
   
 }

}
