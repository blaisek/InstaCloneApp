import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  search$: Observable<any>;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.search$ = this._route.data.pipe(
      first(),
      map((data: {feeds?: any[]}) => data?.feeds)
    );
  }

}
