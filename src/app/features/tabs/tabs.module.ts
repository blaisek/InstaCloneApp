import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsRoutingModule } from './tabs-routing.module';
import { FeedsComponent } from './containers/feeds/feeds.component';
import { SearchComponent } from './containers/search/search.component';
import { ProfilsComponent } from './containers/profils/profils.component';
import { TabsComponent } from './containers/tabs/tabs.component';
import { ItemComponent } from './containers/item/item.component';


@NgModule({
  declarations: [FeedsComponent, SearchComponent, ProfilsComponent, TabsComponent, ItemComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule.forRoot(
      {mode: 'ios'}
    )
  ]
})
export class TabsModule {}
