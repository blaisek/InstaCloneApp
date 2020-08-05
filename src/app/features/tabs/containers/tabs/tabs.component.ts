import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  title = 'InstaCloneApp';
  constructor() { }

  ngOnInit(): void {
    defineCustomElements(window);
  }

}
