import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  f:FormGroup;

  constructor(private route :Router) { }

  ngOnInit(): void {
    this.f=new FormGroup({
      uname:new FormControl(''),
      pswd:new FormControl('')
    })
  }
  onSubmit(f:any) {
    console.log(f.uname);
    console.log(f.pswd);
    this.route.navigate(["home"]);
  }
}
