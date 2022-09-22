import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "template",
    loadChildren: () => import("./modules/template/template.module").then(m => m.TemplateModule)
  },
  {
    path: "reactive",
    loadChildren: () => import("./modules/reactive/reactive.module").then(m => m.ReactiveModule)
  },
  {
    path: "**",
    redirectTo: "template"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
