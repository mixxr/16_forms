import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroSvc } from "./hero-svc"

bootstrap(AppComponent, [
  provideForms(),
  HeroSvc,
  HTTP_PROVIDERS
 ])
 .catch((err: any) => console.error(err));
