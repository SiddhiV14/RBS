import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  f:FormGroup;

  constructor(private route :Router) { }

  ngOnInit(): void {
    this.f=new FormGroup({
      fname:new FormControl(''),
      lname:new FormControl(''),
      mno:new FormControl(''),
      uname:new FormControl(''),
      pswd:new FormControl(''),
      pswd1:new FormControl('')
    })
  }

  onSubmit(f:any) {
    console.log(f.fname);
    console.log(f.lname);
    console.log(f.mno);
    console.log(f.uname);
    console.log(f.pswd);
    console.log(f.pswd1);
    this.route.navigate(["login"]);
  }

}
