import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

//container
import {PassengerDashboardComponent} from '../passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component';
import {PassengerViewerComponent} from '../passenger-dashboard/containers/passenger-viewer/passenger-viewer.component';
//components
import {PassengerCountComponent} from '../passenger-dashboard/components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from '../passenger-dashboard/components/passenger-detail/passenger-detail.component';
import {PassengerFormComponent} from '../passenger-dashboard/components/passenger-form/passenger-form.component';
//services
import {PassengerDashboardService} from './passenger-dashboard.service';
@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerViewerComponent,
        PassengerDetailComponent, 
        PassengerCountComponent,
        PassengerFormComponent
    ],
    imports:[CommonModule, HttpModule, FormsModule],
    exports: [PassengerDashboardComponent,PassengerViewerComponent],
    providers: [PassengerDashboardService]
})


export class PassengerDashBoardModule{}