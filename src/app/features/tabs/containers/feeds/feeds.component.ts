import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {first, map } from 'rxjs/operators';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedsComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public feeds$: Observable<any[]>;
  public max: number = 3;
  public increment: number = 3;

  constructor(private _route: ActivatedRoute) { }

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

}
