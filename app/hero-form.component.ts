import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { Hero }    from './hero';
import { HeroSvc }    from './hero-svc';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})

export class HeroFormComponent implements OnChanges{
  @Input() itemId: number;

  constructor(public svc:HeroSvc){
        console.log(svc.list);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('form>itemId: ', changes['itemId'].currentValue);
    this.setModel(changes['itemId'].currentValue);
  }


  model:Hero;

/*
  ngOnInit(){
    console.log('form>itemId:', this.itemId);
    this.model = this.svc.getById(this.itemId) || new Hero(0,'','');
  }
*/
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  submitted = false;

  onSubmit() { 
    console.log('onSubmit:',this.submitted);
    this.svc.add(this.model);
    this.submitted = true; 
  }
  onEdit() { this.submitted = false; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  newHero() {
    this.setModel(0);
  }

  public setModel = (itemId: number) => {  
    if (this.model && this.model.id == itemId) return;
    this.model = this.svc.getById(itemId) || new Hero(0,'','');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: NgForm) {

    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

}