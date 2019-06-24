import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomPreloader implements PreloadingStrategy {

  constructor() {}

  routeTransitionMapping = {
    '/': 'pax-select',
    '/pax-select': 'seats-allocation',
    '/seats-allocation': 'checkin-extras',
    '/checkin-extras': 'boarding-pass',
  };

  preload(route: Route, fn: Function): Observable<boolean> {
    if (this.routeTransitionMapping[location.pathname] === route.path) {
      return fn();
    }

    return of(false);
  }
}
