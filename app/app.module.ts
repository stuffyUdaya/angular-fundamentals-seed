import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {PassengerDashBoardModule} from './passenger-dashboard/passenger-dashboard.module';
import{AppComponent} from './app.component';

const routes:Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, PassengerDashBoardModule],
  bootstrap: [AppComponent]
})

export class AppModule{}