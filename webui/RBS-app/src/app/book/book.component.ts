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
  book:any;
  name:String;
  mindate=new Date();
  b:any;
  gname:String;
  gmobile:String;
  obj:Object;
  b1:any;
  msg:String;
  date= new Date();

  constructor(private route :Router, private view : BookService) { }

  ngOnInit() {
    this.f=new FormGroup({
      reservationDate:new FormControl(''),
      slotTime:new FormControl(''),
      noOfGuests:new FormControl(''),
      tNo:new FormControl('')
    })
    this.name = localStorage.getItem("uname");
    if(this.name==null) {
      alert("please login first");
      this.route.navigate(["login"]);
    }
  }
  isEmptyObject(f) {
    return (f && (Object.keys(f).length === 0));
  }

  onSubmit(f:any) {
    this.view.availability(f.reservationDate,f.slotTime).subscribe((response)=>{
      this.book = response;
     if(this.book==null){
      alert("No Tables available");
     }
    })
}
onYes(f:any) {
  this.gname  = localStorage.getItem("username");
  this.gmobile = localStorage.getItem("mobileNo");
  this.obj  = {
    guestName:this.gname,
    guestMobileNumber:this.gmobile,
    bookedDate:this.date,
    reservationDate:f.reservationDate,
    slotTime:f.slotTime,
    noOfGuests:f.noOfGuests,
    tableNo:f.tNo

  }
  this.b = JSON.stringify(this.obj);
  this.b1 = JSON.parse(this.b);
  this.view.Book(this.b1).subscribe((response)=>{
    this.route.navigate(["/success"])
})
}
}
