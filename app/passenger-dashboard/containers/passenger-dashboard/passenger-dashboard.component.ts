import {Component, OnInit} from '@angular/core';
import {Passenger} from '../models/passenger.interface';
import {PassengerDashboardService} from '../../passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template:`
    <passenger-count
     [items]="passengers"
    >
    </passenger-count>
    <div *ngFor='let passenger of passengers'>
    {{passenger.fullName}}
    </div>
    <passenger-detail
    *ngFor='let passenger of passengers'
    [detail]='passenger'
    (remove)='handleRemove($event)'
    (edit)='handleEdit($event)'
    >
    </passenger-detail>
    `
})



export class PassengerDashboardComponent implements OnInit {
    passengers : Passenger[];
    constructor(private passengerService:PassengerDashboardService){}
    ngOnInit(){
        // console.log("ngoninit fired)&()*()");
        this.passengerService.getPassengers().subscribe((data :Passenger[]) => this.passengers =data);
    }

    handleRemove(event:Passenger){
        this.passengerService.deletePassenger(event).subscribe((data:Passenger)=>{
            this.passengers =  this.passengers.filter((passenger:Passenger)=> passenger.id !== event.id)
        })

    }

    handleEdit(event:Passenger){
        this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
            this.passengers = this.passengers.map((passenger:Passenger)=>{
                if(passenger.id === event.id){
                    passenger = Object.assign({},passenger,event);
                }
                return passenger;
            })
        })
    }

}