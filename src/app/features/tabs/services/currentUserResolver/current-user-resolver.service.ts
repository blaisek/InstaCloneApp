import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserResolverService implements Resolve<any> {

  constructor(
    private _auth: AuthService
  ) { }


  resolve(
  ) {

    return this._auth.currentUser$.pipe(first());

  }
}
