import {Component, OnInit} from '@angular/core';
import {Passenger} from '../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template:`
    <passenger-count
     [items]="passengers"
    >
    </passenger-count>
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
    constructor(){}
    ngOnInit(){
        // console.log("ngoninit fired)&()*()");
        this.passengers = [
            { 'id':1, 'fullName': 'Ross', 'checkedIn': true, 'checkInDate' : 1571789583433, 'children': [{'name':'Rose','age': 5}, {'name': 'Ronald', 'age': 15}] },
            {'id':2, 'fullName': 'Dan', 'checkedIn': false},
            {'id':3, 'fullName': 'Thomas', 'checkedIn': true, 'checkInDate': 1502269725, 'children': [{'name':'Alex','age': 15}, {'name': 'Kurt', 'age': 5}]}
        ];
    }

    handleRemove(event:Passenger){
        this.passengers =  this.passengers.filter((passenger:Passenger)=>{
            return passenger.id !== event.id;
        })
    }

    handleEdit(event:Passenger){
        this.passengers = this.passengers.map((passenger:Passenger)=>{
            if(passenger.id === event.id){
                passenger = Object.assign({},passenger,event);
            }
            return passenger;
        })

    }

}