import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomPreloader implements PreloadingStrategy {

  constructor() {}

  nextRouteMap = {
    '': 'pax-select',
    'pax-select': 'seats-allocation',
    'seats-allocation': 'checkin-extras',
    'checkin-extras': 'boarding-pass',
  };

  preload(route: Route, fn: Function): Observable<boolean> {
    console.log('route', route);
    const routeName = location.pathname.slice(1, location.pathname.length);

    if (this.nextRouteMap[routeName] === route.path) {
      console.log('Preloaded: ', route.path);
      return fn();
    }

    return of(false);
  }
}
