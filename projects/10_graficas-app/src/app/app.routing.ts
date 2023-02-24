import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "graficos", loadChildren: () => import("./modules/graficas/graficas.module").then(m => m.GraficasModule) },
  { path: "**", redirectTo: "graficos" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
