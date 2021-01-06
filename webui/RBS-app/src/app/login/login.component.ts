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
  msg:any;
  mob:any;

  constructor(private route :Router,private login:LoginService) { }

  ngOnInit(): void {
    this.f=new FormGroup({
      username:new FormControl(''),
      password:new FormControl(''),      
    })
  }
  createUser(f:any){
    this.login.createUser(f.username, f.password).subscribe((response)=>{
      this.msg = response;
      if(this.msg==null) {
        alert("username or password is incorrect");
        this.route.navigate(["login"]);
      } else {
        this.msg = JSON.parse(JSON.stringify(response)).fname;
        this.mob = JSON.parse(JSON.stringify(response)).mobile_no;
        localStorage.setItem("uname", this.msg);
        localStorage.setItem("username", f.username);
        localStorage.setItem("mobileNo", this.mob);
        this.route.navigate(["home"]);
      }
    },
    (error)=>{
      this.msg=JSON.stringify(error);
      console.log(this.msg);
    })
    
  }
 
}
