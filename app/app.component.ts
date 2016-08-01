import { Component, Input, Output } from '@angular/core';

import { HeroFormComponent } from './hero-form.component';
import { HeroList } from './hero-list.component';

@Component({
    selector: 'my-app',
    //providers: [HTTP_PROVIDERS], // alternative to the bootstrap config
    template: `
        <hero-list (onSelect)="changeItem($event)"></hero-list>
        <hr/>
        <hero-form [itemId]="itemId"></hero-form>
    `,
    directives: [HeroFormComponent, HeroList]
})
export class AppComponent { 
    itemId:number;
    changeItem(event:number){
        console.log('parent>itemId:', event);
        this.itemId = event;
    }
}
