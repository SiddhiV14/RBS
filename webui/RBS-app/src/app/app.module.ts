import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"rate", component:ViewRatesComponent}]

@NgModule({
  declarations: [
    AppComponent,
    ViewRatesComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
