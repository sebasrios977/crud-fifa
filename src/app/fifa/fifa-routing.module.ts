import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SeeTeamsComponent } from './pages/see-teams/see-teams.component';
import { CreateTeamsComponent } from './pages/create-teams/create-teams.component';
import { UpdateTeamsComponent } from './pages/update-teams/update-teams.component';
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from '../auth/guards';
import { SearchTeamsComponent } from './pages/search-teams/search-teams.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'teams', component: SeeTeamsComponent },
      { path: 'search-teams', component: SearchTeamsComponent },
      { path: 'create-teams', canActivate: [isAuthenticatedGuard], component: CreateTeamsComponent },
      { path: 'update-teams/:id', canActivate: [isAuthenticatedGuard], component: UpdateTeamsComponent },
      { path: '**', redirectTo: 'teams' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FifaRoutingModule { }
