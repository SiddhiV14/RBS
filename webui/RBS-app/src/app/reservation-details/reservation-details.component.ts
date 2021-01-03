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
 feedbacks(detail2) {
  localStorage.setItem("id",detail2.id);
  localStorage.setItem("name",detail2.name);
  this.router.navigate(["/feedback"]);
}
   
}
