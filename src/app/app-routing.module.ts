import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isNotAuthenticatedGuard } from './auth/guards';

const routes: Routes = [
  {
    path: 'fifa',
    loadChildren: () => import('./fifa/fifa.module').then(m => m.FifaModule),
  },
  {
    path: 'auth',
    canActivate: [ isNotAuthenticatedGuard ],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'fifa',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
