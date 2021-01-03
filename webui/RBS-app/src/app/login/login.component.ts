import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  f:FormGroup;


  constructor(private route :Router,private login:LoginService) { }

  ngOnInit(): void {
    this.f=new FormGroup({
      uname:new FormControl(''),
      pswd:new FormControl(''),      
    })
  }
  onSubmit() {
  }
  createUser(formObj){
     console.log(this.f);
    this.login.createUser(formObj).subscribe((response)=>{
      console.log("user has been added");
    })
    this.route.navigate(["home"]);
  }
 
}
