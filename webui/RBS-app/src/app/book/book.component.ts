import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  f:FormGroup;
  book:Object;
  name:String;
  mindate=new Date();
  b:any;
  gname:String;
  gmobile:String;
  obj:Object;
  b1:any;

  constructor(private route :Router, private view : BookService) { }

  ngOnInit() {
    this.f=new FormGroup({
      reservationDate:new FormControl(''),
      slotTime:new FormControl(''),
      noOfGuests:new FormControl(''),
      tNo:new FormControl('')
    })
  }

  onSubmit(f:any) {
    console.log(f.BOOKED_DATE);
    console.log(f.SLOT_TIME);   
    console.log(f.guests);
    this.view.availability(f.reservationDate,f.slotTime).subscribe((response)=>{
      this.book = response
     console.log(this.book);          
    })
}
onYes(f:any) {
  //console.log(f.booking);
  //console.log(f);
  this.gname  = localStorage.getItem("uname");
  this.gmobile = localStorage.getItem("mobileNo");
  console.log(this.gmobile);
  this.obj  = {
    guestName:this.gname,
    guestMobileNumber:this.gmobile,
    reservationDate:f.reservationDate,
    slotTime:f.slotTime,
    noOfGuests:f.noOfGuests,
    tableNo:f.tNo

  }
  this.b = JSON.stringify(this.obj);
  this.b1 = JSON.parse(this.b);
  console.log(this.b1);
  this.view.Book(this.b1).subscribe((response)=>{
    console.log("your table is booked");
    this.route.navigate(["/success"])
})
}
}
