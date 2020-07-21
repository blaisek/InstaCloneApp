import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsComponent} from './containers/tabs/tabs.component';
import {FeedsComponent} from './containers/feeds/feeds.component';
import {ProfilsComponent} from './containers/profils/profils.component';
import {SearchComponent} from './containers/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'feeds',
        children: [
          {
            path: '',
            component: FeedsComponent
          },
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            component: SearchComponent
          },
        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            component: ProfilsComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
