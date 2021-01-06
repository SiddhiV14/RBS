import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
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
import { AboutComponent } from './about/about.component';






const routes: Routes = [
                      {path:"",redirectTo:"login",pathMatch:"full"},
                        {path:"home",component:HomeComponent},
                        {path:"rates", component:ViewRatesComponent},
                        {path:"login",component:LoginComponent},
                        {path:"register",component:SignupComponent},
                        {path:"book",component:BookComponent},
                        {path:"details",component:ReservationDetailsComponent},
                        {path:"feedback",component:FeedbackComponent},
                        {path:"contact",component:ContactComponent},
                        {path:"success",component:SuccessComponent},
                        {path:"about",component:AboutComponent},
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
    SignupComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
 
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
