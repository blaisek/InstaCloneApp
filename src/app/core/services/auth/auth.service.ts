import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  public currentUser$: Observable<any[]> = this._currentUser$.asObservable();

  constructor(private _http: HttpClient, private _router: Router) {}

async createData(data: {username: string, password: string}) {
  const url = environment.apiUrl + '/users';
  const response = await this._http.post(url, data).toPromise().catch(err => err);
  this._currentUser$.next(response);
}

async login(data: {username: string, password: string}) {
  const url = environment.apiUrl + '/users' + '?username_like=' + data.username;
  const response = await this._http.get(url).toPromise().catch(err => err);
  if ( response[0].password !== data.password ) {
    console.log('LOG', response, data);
  }else{
    this._currentUser$.next(response[0]);
    this._router.navigate(['./tabs/feeds']);
  }
}




}
