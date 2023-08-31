import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabMenuModule } from 'primeng/tabmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    TabMenuModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    ConfirmPopupModule,
    InputTextModule,
    CalendarModule,
  ]
})
export class PrimeNgModule { }
