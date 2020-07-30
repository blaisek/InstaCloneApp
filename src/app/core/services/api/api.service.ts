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

  like(item, data) {

    if ( item.target.name !== 'heart'){
      item.target.name = 'heart';
      item.target.style.color = 'red';
      this.likedItems(item.target.name, data);
   } else {

    item.target.name = 'heart-outline';
    item.target.style.color = 'black';
    this.likedItems(item.target.name, data);
   }

  }

  async likedItems(iconName, id) {
    const url = environment.apiUrl + '/posts/' + id;
    const myItem = this._feeds$.value.find(item => item.id === id);

    if (iconName === 'heart') {
        // liked_by_user a true
        myItem.liked_by_user = true;
      }
    if (iconName === 'heart-outline') {
        // liked_by_user a false
        myItem.liked_by_user = false;
      }
    const response = await this._http.put(url, myItem).toPromise().catch(err => err);
    console.log(response);

    this._feeds$.next([
          ...this._feeds$.value.filter(item => item.id !== id),
          myItem
        ]);
  }


}

