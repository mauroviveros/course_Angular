import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './modules/auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "heroes",
    loadChildren: () => import("./modules/heroes/heroes.module").then(m => m.HeroesModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: "404",
    component: ErrorPageComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
