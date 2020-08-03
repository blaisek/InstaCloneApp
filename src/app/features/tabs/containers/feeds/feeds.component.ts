import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {first, map } from 'rxjs/operators';
import { APIService } from 'src/app/core/services/api/api.service';
import { ErrorService } from 'src/app/core/services/error/error.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedsComponent implements OnInit {
  public max: number = 3;
  public increment: number = 3;

  public feeds$: Observable<any[]>;
  public currentUser$: Observable<any>;


  constructor(private _route: ActivatedRoute, private _api:APIService, private _alert: ErrorService) { }

  async ngOnInit(): Promise<void> {
    this.feeds$ = this._route.data.pipe(
      map((data: {feeds?: any[]}) => data?.feeds)
    );

    this.currentUser$ = this._route.data.pipe(
      map((data: {curentUser?: any}) => data?.curentUser)
    );
  }

  loadScrollData(event, totalItems: number) {
    if (totalItems > this.max){
      this.max = this.max + this.increment;
    }
    event.target.complete();
  }

  async action($event)
  {
    const currentUser = await this.currentUser$.pipe(first()).toPromise().catch(err => err);
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

  trackByFn(index, item) {
    return index; // or item.id
  }

}
