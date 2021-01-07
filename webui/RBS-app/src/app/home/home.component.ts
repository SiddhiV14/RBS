import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
})
export class HomeComponent implements OnInit {
  myimg:string ="assets/images/hotel.jpg";
  name:String;

  constructor(private route :Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("uname");
    if(this.name==null) {
      alert("please login first");
      this.route.navigate(["login"]);
    }
  }

  submit():void {
    localStorage.removeItem("uname");
  }

}
