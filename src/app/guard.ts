import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class Guard implements CanLoad, CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return of(true);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return of(true);
  }
}
