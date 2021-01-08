import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
