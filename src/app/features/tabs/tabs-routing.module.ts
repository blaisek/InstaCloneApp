import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsComponent} from './containers/tabs/tabs.component';
import {FeedsComponent} from './containers/feeds/feeds.component';
import {ProfilsComponent} from './containers/profils/profils.component';
import {SearchComponent} from './containers/search/search.component';
import { FeedsResolverService } from 'src/app/core/services/feeds-resolver/feeds-resolver.service';
import { ItemResolverService } from './servives/item-resolver/item-resolver.service';
import { ItemComponent } from './containers/item/item.component';
import { UserResolverService } from './servives/user-resolver/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'feeds',
        component: FeedsComponent,
        resolve: {
          feeds: FeedsResolverService
        },
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            component: SearchComponent
          },
          {
            path: ':id',
            component: ItemComponent,
            resolve: {
              item: ItemResolverService,
              currentUser: UserResolverService
            }
          }
        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            component: ProfilsComponent
          },
          {
            path: ':id',
            component: ProfilsComponent,
            resolve: {
              user: UserResolverService
            }
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
