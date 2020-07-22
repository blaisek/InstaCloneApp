import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api/api.service';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  public feeds$: Observable<any[]>;

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {

  await this.api.getData();
  this.feeds$ = this.api.feeds$;

  }

}
