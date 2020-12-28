import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  
mindate=new Date;
mydate= "2020-12-30";
midate= "2020-12-20";
  constructor(private router:Router) { }

  ngOnInit() {

  }
  public myFunc() {
    var txt:any;
   if (confirm("Press a button!")) {
     console.log(txt = "Your reservation will be cancelled");
     this.router.navigate(['/home']);
   } else {
    console.log( txt = "You pressed Cancel!");
   }
 }
   
}
