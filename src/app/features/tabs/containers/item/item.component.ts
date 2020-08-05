import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { map, first } from 'rxjs/operators';
import { ErrorService } from 'src/app/core/services/error/error.service';
import { APIService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item$: Observable<any>;
  curentUser$: Observable<any>;

  constructor( private _route: ActivatedRoute,
               private _alert: ErrorService,
               private _api: APIService) { }

  ngOnInit(): void {
    // prend les data dans le service item-service resolver
    this.item$ = this._route.data.pipe(
      map( resp => resp?.item || {})
    );
    this.curentUser$ = this._route.data.pipe(
      map( (data: {curentUser?: any}) => data?.curentUser)
    );
  }

  async action($event)
  {
    const currentUser = await this.curentUser$.pipe(first()).toPromise().catch(err => err);
    switch (true) {
      case $event.type === 'like':
        if (!currentUser || !currentUser?.id) {
          console.log('err', currentUser);
          this._alert.display('You must be logged to like this picture',
          {
            buttons: [{ text: 'ok'}]
          });

          return;
        } else {
          console.log('else', currentUser);

          await this._api.like($event, $event.data.id);
        }
        break;
        default:
         break;
    }
  }

}
