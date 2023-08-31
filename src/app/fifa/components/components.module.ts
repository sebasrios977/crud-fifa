import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    NavBarComponent,
  ]
})
export class ComponentsModule { }
