import {Component, EventEmitter, Output} from "@angular/core";
import {HeroSvc} from "./hero-svc";


@Component({
    selector: 'hero-list',
    template:`<div>{{message}}:<br/>
        <br/>
        <table class="table table-striped table-hover">
            <tr>
                <th *ngFor="let colname of heroSvc.colNames">{{colname | uppercase}}</th>
            </tr>
            <tr *ngFor="let myItem of heroSvc.list" (click)="select(myItem.id)">   
                <td>{{myItem.id}}</td>             
                <td>{{myItem.name}}</td>
                <td>{{myItem.alterEgo}}</td>
                <td>{{myItem.power}}</td>
            </tr>
        </table>
    </div>`
})

export class HeroList{
    @Output() onSelect = new EventEmitter<number>();
    message = "Fantastic Hero List";
    
    constructor(public heroSvc:HeroSvc){}

    ngOnInit() {
        console.log('hero-list:',this.heroSvc.list);
        console.log('colNames:', this.heroSvc.colNames);
        
    }

    select(itemId:number){
        console.log('select:', itemId);
        
        this.onSelect.emit(itemId)
    }

}