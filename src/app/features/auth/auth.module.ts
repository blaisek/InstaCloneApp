import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './containers/auth/auth.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule.forRoot()
  ]
})
export class AuthModule { }
