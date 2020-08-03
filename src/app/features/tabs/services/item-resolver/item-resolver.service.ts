import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { APIService } from 'src/app/core/services/api/api.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<any> {

  constructor( private _api: APIService) { }


  async resolve(route: ActivatedRouteSnapshot) {
    const {id = null } = route.params;
    if (!id) {
      return null;
    }
    const feeds = await this._api.feeds$.pipe(first()).toPromise().catch(e => e);
    if ( !feeds) {
      const item = this._api.getItemById(id);
      console.log('item', item);
      if (!item) {
        return null;
      }
      return item;
    }
    const existing = feeds.find(el => el.id === id);

    if (!existing) {
      return null;
    }
    console.log('existing', existing);
    return existing;
  }



}
