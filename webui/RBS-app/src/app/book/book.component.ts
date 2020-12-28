import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  f:FormGroup;
  mindate=new Date();

  constructor(private route :Router) { }

  ngOnInit() {
    this.f=new FormGroup({
      start_date:new FormControl(''),
      time:new FormControl(''),
      guests:new FormControl('')
    })
  }

  onSubmit(f:any) {
    console.log(f.start_date);
    console.log(f.time);
    console.log(f.guests);
    this.route.navigate(["success"]);
}
}
