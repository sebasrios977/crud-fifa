import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FifaRoutingModule } from './fifa-routing.module';
import { SeeTeamsComponent } from './pages/see-teams/see-teams.component';
import { DeleteTeamsComponent } from './pages/delete-teams/delete-teams.component';
import { UpdateTeamsComponent } from './pages/update-teams/update-teams.component';
import { CreateTeamsComponent } from './pages/create-teams/create-teams.component';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from './components/components.module';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';
import { SearchTeamsComponent } from './pages/search-teams/search-teams.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeeTeamsComponent,
    DeleteTeamsComponent,
    UpdateTeamsComponent,
    CreateTeamsComponent,
    LayoutComponent,
    SearchTeamsComponent,
  ],
  imports: [
    CommonModule,
    FifaRoutingModule,
    ComponentsModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class FifaModule { }
