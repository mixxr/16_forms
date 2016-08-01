import {Injectable} from "@angular/core";
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// Statics
import 'rxjs/add/observable/throw';

import {Hero} from "./hero";

@Injectable()
export class HeroSvc{
    constructor (private http: Http) {}
    private heroesUrl = ' https://bvfcx694be.execute-api.eu-west-1.amazonaws.com/test/heros'; 

    private list = [
        new Hero(2342, 'Spider Man', 'A'),
        new Hero(324, 'Bat Man', 'b'),
        new Hero(2132, 'Pigro Man', 'c')
    ];

    getList (): Observable<Hero[]> {
        var headers = new Headers();
        headers.append('x-api-key', 'ezjIkkJORt1W3kkfxbGd14hLaUdkSpmY8L3LQIvp');
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        return this.http.get(this.heroesUrl, { headers})
                    .map(this.extractData)
                    .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log("extractData:",body);
        
        return body || [];
    }
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error('handleError:',error); // log to console instead
        return Observable.throw(errMsg);
    }

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