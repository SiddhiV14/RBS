import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  f:FormGroup;
  result:any;
  mindate=new Date();

  constructor() { }

  ngOnInit() {
    this.f=new FormGroup({
      fname:new FormControl(''),
      pnumber:new FormControl(''),
      start_date:new FormControl(''),
      time:new FormControl(''),
      guests:new FormControl('')
    })
  }

  onSubmit(f:any) {
    console.log(f.fname);
    console.log(f.pnumber);
    console.log(f.start_date);
    console.log(f.time);
    console.log(f.guests);
}
}
