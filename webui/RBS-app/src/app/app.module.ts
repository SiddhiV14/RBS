import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewRateComponent } from './view-rate/view-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewRateComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:"home",component:HomeComponent},
      {path:"view-rate",component:ViewRateComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
