import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { APIService } from 'src/app/core/services/api/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedsComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public feeds$: Observable<any[]>;

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {

  await this.api.getData();
  this.feeds$ = this.api.feeds$;
    console.log(this.feeds$);

  }

  loadScrollData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (this.feeds$.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

}
