import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import {APIService} from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class FeedsResolverService  {

  constructor( private _api: APIService) { }


//   async resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Promise<any[]> {
//     return await this._api.feeds$.pipe(
//       first(),
//       // check existing data and load if unexist
//       mergeMap(async (feeds) => {
//         if (feeds?.length <= 0 || !feeds) {
//           await this._api.load();
//         }
//         return this._api.feeds$.pipe(first()).toPromise();
//       }),
//     ).toPromise();
//   }

}
