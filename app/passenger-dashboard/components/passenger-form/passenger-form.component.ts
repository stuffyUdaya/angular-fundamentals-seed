import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Passenger } from '../../containers/models/passenger.interface';

@Component({
    selector:'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template:`
    <div>
    <div>{{detail | json}}}</div>
    <form #form="ngForm" (ngSubmit)="handleSubmit(form.value,form.valid)">
    <div>
    PassengerName:
    <input 
    type="text"
    name="fullName"
    required
    #fullName = "ngModel"
    [ngModel]="detail?.fullName"
    >
    <div *ngIf="fullName.errors?.required && fullName.dirty" class="error"> FullName is required.</div>
    </div>
    <div>
    passengerId:
    <input
    type="number"
    name="id"
    required
    #id="ngModel"
    [ngModel]="detail?.id"
    >
    <div *ngIf="id.errors?.required && id.dirty" class="error"> id is a required field.</div>
    </div>
    <div>
    CheckedIn: 
    <label>Yes
    <input type="radio" name="checkedIn" [value]="true" [ngModel]="detail?.checkedIn"
    (ngModelChange)="toggleCheckIn($event)"
    >
    </label>
    <label>
    No
    <input type="radio" name="checkedIn" [value]="false" [ngModel]="detail?.checkedIn"
    (ngModelChange)="toggleCheckIn($event)"
    >
    </label>
    </div>
    <div *ngIf=form.value.checkedIn>
    <input type="number" name="checkInDate" [ngModel]="detail?.checkInDate">
    </div>
    <div>
    Baggage Options:
    <select name="baggage" [ngModel]="detail?.baggage">
    <option *ngFor="let item of baggage" [value]="item.key" [selected]="item.key === detail?.baggage">{{item.value}}</option>
    
    </select>
    </div>
    <div> <button type="submit" [disabled]="form.invalid"> Update Passenger</button></div>
    {{form.value | json}}



    </form>
    
    </div>
    
    
    
    `
})

export class PassengerFormComponent{
    baggage = [
        {"key":"hand-only", "value":"Hand Baggage"},{"key": "hold-only", "value":"Hold Baggage"},
        {"key":"hand-hold","value":"Hand and Hold Baggage"},{"key":"None","value":"No Baggage"}
    ]
    @Input()
    detail:Passenger

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter()


    constructor(){}
    toggleCheckIn(checkIn:boolean){
        if(checkIn){
            this.detail.checkInDate =  Date.now();
        }
    }
    handleSubmit(passenger:Passenger, isValid:boolean){
        if(isValid) this.update.emit(passenger)


    }

}