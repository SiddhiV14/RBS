import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  
mindate=new Date;
mydate="2020-01-03";
  constructor(private router:Router) { }

  ngOnInit() {

  }
  public myFunc() {
    var txt:any;
   if (confirm("DO you want to cancel your reservation ?")) {
     console.log(txt = "Your reservation is cancelled");
     this.router.navigate(['/home']);
   } else {
    console.log( txt = "You pressed Cancel!");
   }
 }
   
}
