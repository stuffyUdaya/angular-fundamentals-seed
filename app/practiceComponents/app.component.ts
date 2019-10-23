import {Component} from '@angular/core';

interface Children {
    name: string,
    age: number
}
interface Passenger{
    id: number,
    fullName: string,
    checkedIn : Boolean,
    checkInDate?: Number,
    children?: Children[] | null
};

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template:`
    <div class="app">
    <h3 id="title">{{title}}</h3>
    <div>
    {{numberOne + numberTwo}}
    </div>
    <div>
    {{isHappy ? ':)' : ':('}}
    </div>
    <div> <h1 [innerHTML]='title'></h1></div>
    <div><input type='text' [value]='title'></div>
    <div>{{title}}</div>
    <div><img [src]='logo'></div>
    <div><button (click)=handleClick()>changeName</button> </div>
    <div><input type='text' [value]='name' (blur)=handleBlur($event) (input)=handleInput($event)><h3>{{name}}</h3></div>
    <div><input type='text' [ngModel]='name' (ngModelChange)=handleChange($event)></div>
    <div><input type='text' [(ngModel)]='name'></div>
    <div><h3>Template Ref</h3> <button (click)=handleRefClick(userName.value)>ClickMe!</button> <input type='text' #userName></div>
    <div>
    <h3>directive ngIf and template</h3>
    <input type='text' [value]='name' (input)=handleInput($event)>
    <div *ngIf='name.length>3'> <h2>Searching for....... {{name}}</h2></div>
    <template [ngIf]='name.length>3'><h2>Searching for....... {{name}}</h2></template>
    </div>
    <div>
    <h3>Airline Passengers</h3>
    <ul>
    <li *ngFor='let passenger of passengers; let i = index;'>{{i}}:{{passenger.fullName}}</li>
    </ul>
    <h3>Airline Passengers</h3>
    <ul>
    <template ngFor let-passenger let-i='index' [ngForOf]="passengers"><li>{{i}}:{{passenger.fullName}}</li></template>
    </ul>
    </div>
    <div>
    <h3>Airline Passengers</h3>
    <ul>
    <li *ngFor='let passenger of passengers; let i = index;'><span class='status' [class.checked-in]='passenger.checkedIn'></span> {{i}} : {{passenger.fullName}}</li>
    </ul>
    </div>
    <div>
    <h3>Airline Passengers</h3>
    <ul>
    <li *ngFor='let passenger of passengers; let i = index;'><span class='status' [ngClass]= "{
        'checked-in':passenger.checkedIn,
        'checked-out':!passenger.checkedIn
    }"></span> {{i}} : {{passenger.fullName}}</li>
    </ul>
    </div>
    <div>
    <h3>Airline Passengers</h3>
    <h2>Style Approach using style property binding</h2>
    <ul>
    <li *ngFor='let passenger of passengers; let i = index;'><span class='status' [style.background-color]="(passenger.checkedIn ? 'black' : 'blue')" ></span> {{i}} : {{passenger.fullName}}</li>
    </ul>
    </div>
    <div>
    <h3>Airline Passengers</h3>
    <h2>Style Approach using ngStyle</h2>
    <ul>
    <li *ngFor='let passenger of passengers; let i = index;'><span class='status' [ngStyle]="{backgroundColor: (passenger.checkedIn ? 'black' : 'blue')}" ></span> {{i}} : {{passenger.fullName}}
    <p>Angular pipes</p>
    <p> {{passenger | json}} </p>
    <p> checkedInDate:{{(passenger.checkedIn) ? (passenger.checkInDate | date:'fullDate' | uppercase) : 'Not checked In.'}} </p>
    <p>Safe Navigation operator: This operator checks whether the object exists or not!</p>
    <p>Children: {{passenger.children?.length || 0}} </p>
    </li>
    </ul>
    </div>
    <div><p>stateful or stateless components || smart or dumb components</p>
    <p>smart component: This is what that communicates with services and render child components.</p>
    <p> dumb component: These accept data via inputs and emit data changes via event outputs.</p>
    </div>


    </div>
    `
})


export class AppComponent{
    name: string = 'Uday';
    logo : string = './img/woody.jpg';
    title : string;
    numberOne: number = 1;
    numberTwo: number = 2;
    isHappy : boolean = false;
    passengers : Passenger[] = [
        { 'id':1, 'fullName': 'Ross', 'checkedIn': true, 'checkInDate' : 1571782108, 'children': [{'name':'Rose','age': 5}, {'name': 'Ronald', 'age': 15}] },
        {'id':2, 'fullName': 'Dan', 'checkedIn': false},
        {'id':3, 'fullName': 'Thomas', 'checkedIn': true, 'checkInDate': 1502269725, 'children': [{'name':'Alex','age': 15}, {'name': 'Kurt', 'age': 5}]}
    ];
    constructor(){
        this.title = 'Welcome to Angular Practice Session';
    }
    handleBlur(event:any){
        // cconsole.log(event);
        this.name = event.target.value;
    }
    handleInput(event: any){
        // console.log(event);
        this.name = event.target.value;
    }
    handleClick(){
        this.name = ' Tummala';
    }
    handleChange(value:string){
        this.name = value;
    }
    handleRefClick(value:string){
        console.log("value from templateRef",value);
    }
}