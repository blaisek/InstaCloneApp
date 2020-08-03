import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private _auth: AuthService,
    private _route: Router
  ) { }



canActivate(){
  return this._auth.currentUser$.pipe(
    first(),
    map(user => (user) ? true : (this._route.navigate(['/auth']), false
    ))
  );
}




}
