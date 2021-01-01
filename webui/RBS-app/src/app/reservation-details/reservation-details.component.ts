import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  
mindate=new Date;
mydate= "2021-01-03";
midate= "2020-12-31";
detail: Object;
  constructor(private router:Router, private details:DetailsService) { }

  ngOnInit() {
    this.viewAllDetails();

  }
 viewAllDetails() {
  this.details.viewDetails().subscribe((response)=>{
    this.detail = response
  })
 }

 deleteUser(detail1) {
   this.details.deleteUser(detail1).subscribe(()=>{
     this.viewAllDetails();
   })
 }
   
}
