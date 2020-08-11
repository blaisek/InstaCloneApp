import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsComponent} from './containers/tabs/tabs.component';
import {FeedsComponent} from './containers/feeds/feeds.component';
import {ProfilsComponent} from './containers/profils/profils.component';
import {SearchComponent} from './containers/search/search.component';
import { FeedsResolverService } from 'src/app/core/services/feeds-resolver/feeds-resolver.service';
import { ItemResolverService } from './services/item-resolver/item-resolver.service';
import { ItemComponent } from './containers/item/item.component';
import { UserResolverService } from './services/user-resolver/user-resolver.service';
import { AuthGuardService } from 'src/app/core/services/authGuard/auth-guard.service';
import { CurrentUserResolverService } from './services/currentUserResolver/current-user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'feeds',
        component: FeedsComponent,
        resolve: {
          currentUser: CurrentUserResolverService
        }
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
              currentUser: CurrentUserResolverService
            }
          }
        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            component: ProfilsComponent,
            canActivate: [AuthGuardService],
            resolve: {
              currentUser: CurrentUserResolverService
            }
          },
          {
            path: ':id',
            component: ProfilsComponent,
            resolve: {
              currentUser: UserResolverService
            }
          }
        ]
      },
      {
        path: '',
        redirectTo: 'feeds',
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
