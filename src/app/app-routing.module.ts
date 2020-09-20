import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recetas', pathMatch: 'full' },
  {
    path: 'recetas',
    children: [
      {
        path: '',
        loadChildren: './recetas/recetas.module#RecetasPageModule'
      },
      {
        path: ':recetaId',
        loadChildren:
          './recetas/receta-detail/receta-detail.module#RecetaDetailPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
