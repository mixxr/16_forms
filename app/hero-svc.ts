import {Injectable} from "@angular/core";
import {Hero} from "./hero";

@Injectable()
export class HeroSvc{
    list = [
        new Hero(42, 'Spider Man', 'A'),
        new Hero(43, 'Bat Man', 'b'),
        new Hero(55, 'Pigro Man', 'c')
    ];

    get colNames():string[]{
        const aHero = new Hero(0,'','');
        var cols : string[] = [];
        for (var x in aHero) cols.push(x);
        return cols;
    }

    getById(id: number):Hero{
        return this.list.find((item)=>item.id==id);
    }

    add(value: Hero){
        console.log('add:',value);
        const i = this.list.indexOf(value);
        if (i > -1)
        {
            this.list = [...this.list.slice(0,i),
            value,
            ...this.list.slice(i+1)];
        }else{
            value.id = Math.ceil(Math.random()*1345789%1000+1);
            this.list = [...this.list, value]; 
        }
    }

    remove(value: Hero){        
        console.log('remove:',value);
        const i = this.list.indexOf(value);
        this.list = [...this.list.slice(0,i),
        ...this.list.slice(i+1)];
    }
}