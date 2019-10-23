import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Passenger } from '../../containers/models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls:['passenger-detail.component.scss'],
    template:`
    <div>
    <h2>Passenger Details</h2>
    <input type="text" 
    [value]="detail.fullName"
    (input)="onNameChange(name.value)"
    *ngIf=editing
    #name>
    <span class='status' [ngClass]= "{
        'checked-in':detail.checkedIn,
        'checked-out':!detail.checkedIn
    }"></span>  
    <div *ngIf=!editing>{{detail.fullName}}</div>
    <div>
    <p> checkedInDate:{{(detail.checkedIn) ? (detail.checkInDate | date:'fullDate' | uppercase) : 'Not checked In.'}} </p>
    <p>Children: {{detail.children?.length || 0}} </p>
    </div>
    <div>
    <button (click)="toggleEdit()">{{(editing)? 'Done' : 'Edit'}}</button>
    <button (click)= "onRemove()"> Remove </button>
    </div>

    </div>
    `
})

export class PassengerDetailComponent {
    @Input()
    detail:Passenger;

    @Output()
    remove:EventEmitter<any> = new EventEmitter()

    @Output()
    edit:EventEmitter<any> = new EventEmitter()

    editing: boolean = false;

    onNameChange(value:string){
        this.detail.fullName = value;
    }

    toggleEdit(){
        if(this.editing){
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove(){
        this.remove.emit(this.detail);
    }
}