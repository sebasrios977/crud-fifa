import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
