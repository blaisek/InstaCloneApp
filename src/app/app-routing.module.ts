import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedsResolverService } from './core/services/feeds-resolver/feeds-resolver.service';


const routes: Routes = [
  {
    path: 'tabs',
    resolve: {
      feeds: FeedsResolverService
    },
    loadChildren: () => import('./features/tabs/tabs.module').then(m => m.TabsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: '/tabs/feeds',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
