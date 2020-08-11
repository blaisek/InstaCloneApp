import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProfilsComponent implements OnInit {

  user$: Observable<any>;
  segmentName: 'items' | 'users' = 'items';
  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user$ = this._route.data.pipe(
      map((response: {currentUser?: any}) => response?.currentUser)
    );
  }

  actions($event) {
    const {detail: {value = 'items'} = {}} = $event;
    this.segmentName = value;
    console.log('Segment changed', $event, value);
  }

}
