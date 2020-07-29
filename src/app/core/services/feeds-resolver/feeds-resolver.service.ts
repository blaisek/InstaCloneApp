import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { APIService } from '../api/api.service';
import { first, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedsResolverService implements Resolve<any[]> {

  constructor(
    private _api: APIService
  ) { }

  async resolve(
  ): Promise<any[]> {
    return await this._api.feeds$.pipe(
      first(),
      // check existing data and load if unexist
      mergeMap(async (feeds) => {
        if (feeds?.length <= 0 || !feeds) {
          await this._api.getData();
        }
        return this._api.feeds$.pipe(first()).toPromise();
      }),
    ).toPromise();
  }
}
