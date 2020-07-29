import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item$: Observable<any>;

  constructor( private _route: ActivatedRoute) { }

  ngOnInit(): void {
    // prend les data dans le service item-service resolver
    this.item$ = this._route.data.pipe(
      map( resp => resp?.item || {})
    );
  }

}
