import { Component, OnInit } from '@angular/core';
import { ViewServiceService } from '../view-service.service';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.css']
})
export class ViewRatesComponent implements OnInit {
  rates: Object;

  constructor(private view:ViewServiceService) { }

  ngOnInit(): void {
    this.getRates();
  }

  getRates() {
    this.view.viewRates().subscribe((response)=>{
      this.rates = response
    })
  }

}
