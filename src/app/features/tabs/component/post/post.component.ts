import { Component, OnInit, ViewEncapsulation, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { APIService } from 'src/app/core/services/api/api.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @Input() post: any;
  @Output() actionEvent: EventEmitter<any> = new EventEmitter(null);
  constructor(private _api: APIService) { }

  ngOnInit(): void {
  }

  action( $event, type: string, data) {
    switch (true) {
      case type === 'like':
        this._api.like($event, data.id);
        break;
    }
  }



}
