import {Component, EventEmitter, Output} from "@angular/core";
import {Hero} from "./hero";
import {HeroSvc} from "./hero-svc";


@Component({
    selector: 'hero-list',
    template:`<div>{{message}}:<br/>
        <br/>
        <table class="table table-striped table-hover">
            <tr>
                <th *ngFor="let colname of heroSvc.colNames">{{colname | uppercase}}</th>
            </tr>
            <tr *ngFor="let myItem of list" (click)="select(myItem.id)">   
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
    message = "The Fantastic Hero List";
    list:Hero[];
    constructor(public heroSvc:HeroSvc){
        console.log('constructor>hero-list:',this.list);
    }

    ngOnInit() {
        this.heroSvc.getList()
            .subscribe(
                list => this.list = list,
                error => this.message = <any>error);
    }

    select(itemId:number){
        console.log('select:', itemId);
        
        this.onSelect.emit(itemId)
    }

}