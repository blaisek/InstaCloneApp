import { Component, OnInit, ViewEncapsulation, Input, ViewChild, Output, EventEmitter } from '@angular/core';
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
  @Output() actionEvent = new EventEmitter <any>();
  constructor() { }

  ngOnInit(): void {
  }

  action( $event, type: string, data) {

    this.actionEvent.emit({
      type,
      $event,
      data
    });
  }



}
