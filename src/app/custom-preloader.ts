import { PreloadingStrategy, Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomPreloader implements PreloadingStrategy {

  constructor(private router: Router) {}

  routesMap = {
    '': 'pax-select',
    'pax-select': 'seats-allocation',
    'seats-allocation': 'checkin-extras',
    'checkin-extras': 'boarding-pass',
  };

  preload(route: Route, fn: Function): Observable<boolean> {
    const routeName = this.router.url.slice(1, this.router.url.length);
    console.log('route', route);
    if (this.routesMap[routeName] === route.path) {
      console.log('Preloaded: ', route.path);
      return fn();
    }
    return of(false);
  }
}
