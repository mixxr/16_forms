import { bootstrap }    from '@angular/platform-browser-dynamic';
import {  provideForms } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroSvc } from "./hero-svc"

bootstrap(AppComponent, [
  provideForms(),
  HeroSvc
 ])
 .catch((err: any) => console.error(err));
