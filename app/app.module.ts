import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import{AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PassengerDashBoardModule} from './passenger-dashboard/passenger-dashboard.module';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, PassengerDashBoardModule],
  bootstrap: [AppComponent]
})

export class AppModule{}