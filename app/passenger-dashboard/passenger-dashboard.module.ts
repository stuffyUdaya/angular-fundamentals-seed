import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//container
import {PassengerDashboardComponent} from '../passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component';
//components
import {PassengerCountComponent} from '../passenger-dashboard/components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from '../passenger-dashboard/components/passenger-detail/passenger-detail.component';

@NgModule({
    declarations: [PassengerDashboardComponent, PassengerDetailComponent, PassengerCountComponent],
    imports:[CommonModule],
    exports: [PassengerDashboardComponent]
})


export class PassengerDashBoardModule{}