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
  mindate=new Date();
  book:Object;

  constructor(private route :Router, private view : BookService) { }

  ngOnInit() {
    this.f=new FormGroup({
      start_date:new FormControl(''),
      time:new FormControl(''),
      guests:new FormControl(''),
      booking:new FormControl('')
    })
  }

  onSubmit(f:any) {
    console.log(f.start_date);
    console.log(f.time);
    console.log(f.guests);
    this.view.availability().subscribe((response)=>{
      this.book = response
      console.log(this.book);    
    })
}
onYes(f:any) {
  console.log(f.booking);
  console.log(f);
  this.view.Book(f).subscribe((response)=>{
    console.log("your table is booked");
    this.route.navigate(["/success"])
})
}
}
