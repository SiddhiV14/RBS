import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{path:"rate", component:ViewRatesComponent},
                      {path:"",redirectTo:"home",pathMatch:"full"},
                        {path:"home",component:HomeComponent},
                        {path:"book",component:BookComponent},
                        {path:"contact",component:ContactComponent},
                        {path:"**",component:PagenotfoundComponent}
                        ]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent,
    ViewRatesComponent,
    PagenotfoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
 
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
