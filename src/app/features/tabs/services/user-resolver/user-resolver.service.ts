import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { APIService } from 'src/app/core/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve <any>{

  constructor(private _api:APIService) { }


  async resolve(route: ActivatedRouteSnapshot) {

      const {id} = route.params;
      if (!id) {
        return null;
      }
      const user = await this._api.getUserById(id);

      if (!user){
        return null;
      }
      return user;

  }
}
