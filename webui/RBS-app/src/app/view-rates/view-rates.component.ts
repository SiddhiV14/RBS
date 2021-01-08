import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewServiceService } from '../view-service.service';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.css']
})
export class ViewRatesComponent implements OnInit {
  rates: Object;
name:String;
  constructor(private view:ViewServiceService, private route :Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("uname");
    if(this.name==null) {
      alert("please login first");
      this.route.navigate(["login"]);
    }
    this.getRates();
  }

  getRates() {
    this.view.viewRates().subscribe((response)=>{
      this.rates = response
    })
  }

}
