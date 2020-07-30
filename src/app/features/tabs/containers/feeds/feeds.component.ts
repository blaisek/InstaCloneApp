import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {first, map } from 'rxjs/operators';
import { APIService } from 'src/app/core/services/api/api.service';

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


  constructor(private _route: ActivatedRoute, private _api:APIService) { }

  async ngOnInit(): Promise<void> {
    this.feeds$ = this._route.data.pipe(
      first(),
      map((data: {feeds?: any[]}) => data?.feeds)
    );
  }

  loadScrollData(event, totalItems: number) {
    if (totalItems > this.max){
      this.max = this.max + this.increment;
    }
    event.target.complete();
  }


  // action( ) $event, type: string, data
  action()
  {
    // switch (true) {
    //   case type === 'like':
    //     this._api.like($event, data.id);
    //     break;
    // }
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

}
