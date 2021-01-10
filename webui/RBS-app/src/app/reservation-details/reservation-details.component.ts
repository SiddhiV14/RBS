import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';


@Component({
 selector: 'app-reservation-details',
 templateUrl: './reservation-details.component.html',
 styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
 
mindate=new Date();
username1:any;
name:String; 
detail: Object;
bookId:any;

 constructor(private router:Router, private details:DetailsService) { }

 ngOnInit() {
 this.viewAllDetails();
 this.name = localStorage.getItem("uname");
 if(this.name==null) {
 alert("please login first");
 this.router.navigate(["login"]);
 }

 }
 viewAllDetails() {
 this.username1=localStorage.getItem("username");
 this.details.viewDetails(this.username1).subscribe((response)=>{
 this.detail = response; 
 this.bookId = JSON.parse(JSON.stringify(response)).bookingId;
 localStorage.setItem("id",this.bookId);
 })
 }

 deleteUser(detail1) {
 console.log(this.username1);
 this.details.deleteUser(detail1).subscribe(()=>{
 this.viewAllDetails();
 })
 }
 feedbacks(detail2) {
 this.router.navigate(["/feedback"]);
}
 
}