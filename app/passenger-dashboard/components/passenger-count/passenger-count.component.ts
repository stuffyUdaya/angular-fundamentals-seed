import {Component, Input} from '@angular/core';
import {Passenger} from '../../containers/models/passenger.interface';

@Component({
    selector: 'passenger-count',
    styleUrls:[],
    template: `
    <div>
    <h3>Airline Passengers</h3>
    <p>Passengers Checked-In:  {{checkedInCount()}}/{{items.length}}</p>
    </div>
    `
})


export class PassengerCountComponent{
    @Input()
    items:Passenger[];

    constructor(){}
    checkedInCount(): number{
       return this.items.filter((passenger:Passenger) => passenger.checkedIn).length;
    }
}