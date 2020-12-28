import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [{path:"",redirectTo:"home",pathMatch:"full"},
                        {path:"rate", component:ViewRatesComponent},
                        {path:"home",component:HomeComponent},
                        {path:"book",component:BookComponent},
                        {path:"details",component:ReservationDetailsComponent},
                        {path:"feedback",component:FeedbackComponent},
                        {path:"**",component:PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent,
    ViewRatesComponent,
    PagenotfoundComponent,
    ReservationDetailsComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
 
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
