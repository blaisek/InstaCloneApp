import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsRoutingModule } from './tabs-routing.module';
import { FeedsComponent } from './containers/feeds/feeds.component';
import { SearchComponent } from './containers/search/search.component';
import { ProfilsComponent } from './containers/profils/profils.component';
import { TabsComponent } from './containers/tabs/tabs.component';


@NgModule({
  declarations: [FeedsComponent, SearchComponent, ProfilsComponent, TabsComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule.forRoot()
  ]
})
export class TabsModule {}
