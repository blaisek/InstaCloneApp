import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})


export class APIService {

  private _feeds$: BehaviorSubject<any[]> = new BehaviorSubject(null);

  public feeds$: Observable<any[]> = this._feeds$.asObservable();

  constructor(private _http: HttpClient) {}



  async getData() {

    const url = environment.apiUrl + '/posts';
    const resp = await this._http.get(url).toPromise().catch(err => err);
    this._feeds$.next(resp);

  }

  async getUserById(id: string){
    const url = environment.apiUrl + '/users/' + id;
    const resp = await this._http.get(url).toPromise().catch(err => err);
    return resp;
  }

  async getItemById(id: string) {
    const url = environment.apiUrl + '/posts/' + id;
    const response = await this._http.get(url).toPromise().catch(err => err);
    return response;
  }

  like(item) {

   if ( item.name !== 'heart'){
      item.name = 'heart';
      item.style.color = 'red';
   } else {

    item.name = 'heart-outline';
    item.style.color = 'black';
   }

  }

}

