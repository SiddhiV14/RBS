import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';


const routes: Routes = [{path:"rate", component:ViewRatesComponent},
                      {path:"",redirectTo:"home",pathMatch:"full"},
                        {path:"home",component:HomeComponent},]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewRatesComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
 
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
