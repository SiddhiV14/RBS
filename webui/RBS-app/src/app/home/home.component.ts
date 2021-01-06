import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
})
export class HomeComponent implements OnInit {
  myimg:string ="assets/images/hotel.jpg";
  name:String;

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem("uname");
  }

}
