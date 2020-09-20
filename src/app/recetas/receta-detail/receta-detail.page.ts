import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecetasService } from '../recetas.service';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-receta-detail',
  templateUrl: './receta-detail.page.html',
  styleUrls: ['./receta-detail.page.scss']
})
export class RecetaDetailPage implements OnInit, OnDestroy {
  loadedReceta: Receta;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetasService: RecetasService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recetaId')) {
        this.router.navigate(['/recetas']);
        return;
      }
      const recetaId = paramMap.get('recetaId');
      this.loadedReceta = this.recetasService.getReceta(recetaId);
    });
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
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

  onDeleteReceta() {
    this.alertCtrl
      .create({
        header: 'Borrar Receta?',
        message: 'Esta Seguro?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Borrar',
            handler: () => {
              this.recetasService.deleteReceta(this.loadedReceta.id);
              this.router.navigate(['/recetas']);
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
