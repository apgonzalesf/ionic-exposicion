import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecetasPage } from './recetas.page';
import { RecetaItemComponent } from './receta-item/receta-item.component';

const routes: Routes = [
  {
    path: '',
    component: RecetasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecetasPage, RecetaItemComponent]
})
export class RecetasPageModule {}
