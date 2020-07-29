import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { APIService } from 'src/app/core/services/api/api.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<any> {

  constructor( private _api: APIService) { }


  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const {id = null } = route.params;
    if (!id) {
      return null;
    }
    const feeds = await this._api.feeds$.pipe(first()).toPromise().catch(e => e);
    const existing = feeds.find(el => el.id === id);
    if (!existing) {
      const item = this._api.getUserById(id);
      if (!item) {
        return null;
      }
      return item;
    }
    return existing;

  }



}
