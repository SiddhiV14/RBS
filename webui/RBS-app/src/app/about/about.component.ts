import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
name:string;
  constructor(private route :Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("uname");
    if(this.name==null) {
      alert("please login first");
      this.route.navigate(["login"]);
    }
  }

}
