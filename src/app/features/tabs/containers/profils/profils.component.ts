import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent implements OnInit {

  user$: Observable<any>;
  segmentName: 'items' | 'users' = 'items';
  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user$ = this._route.data.pipe(
      map((respons: {user?: any}) => respons?.user)
    );
  }

  actions($event) {
    const {detail: {value = 'items'} = {}} = $event;
    this.segmentName = value;
    console.log('Segment changed', $event, value);
  }

}
