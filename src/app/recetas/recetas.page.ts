import { Component, OnInit, OnDestroy } from '@angular/core';

import { Receta } from './receta.model';
import { RecetasService } from './recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss']
})
export class RecetasPage implements OnInit, OnDestroy {
  recetas: Receta[];

  constructor(private recetasService: RecetasService) {}

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.recetas);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.recetas = this.recetasService.getAllRecetas();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
