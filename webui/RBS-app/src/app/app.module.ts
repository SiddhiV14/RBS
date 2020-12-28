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
import { ContactComponent } from './contact/contact.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';






const routes: Routes = [{path:"rate", component:ViewRatesComponent},
                      {path:"",redirectTo:"login",pathMatch:"full"},
                        {path:"home",component:HomeComponent},
                        {path:"login",component:LoginComponent},
                        {path:"signup",component:SignupComponent},
                        {path:"book",component:BookComponent},
                        {path:"details",component:ReservationDetailsComponent},
                        {path:"feedback",component:FeedbackComponent},
                        {path:"contact",component:ContactComponent},
                        {path:"success",component:SuccessComponent},
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
    FeedbackComponent,
    ContactComponent,
    SuccessComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
 
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
