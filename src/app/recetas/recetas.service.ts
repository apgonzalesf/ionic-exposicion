import { Injectable } from '@angular/core';

import { Receta } from './receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private recetas: Receta[] = [
    {
      id: 'r1',
      titulo: 'Papa a la Huancaina',
      imageUrl:
        'https://www.comeperuano.pe/wp-content/uploads/2019/05/Papa-a-la-huancayna-receta-peruana.jpg',
      ingredientes: ['Ají amarillo', 'Queso fresco', 'Huevos', 'Aceitunas', 'Papa', 'Lechuga']

  
    },
    {
      id: 'r2',
      titulo: 'Spaghetti',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      ingredientes: ['Spaghetti', 'Carne', 'Tomates']
    }
  ];

  constructor() {}

  getAllRecetas() {
    return [...this.recetas];
  }

  getReceta(recetaId: string) {
    return {
      ...this.recetas.find(receta => {
        return receta.id === recetaId;
      })
    };
  }

  deleteReceta(recetaId: string) {
    this.recetas = this.recetas.filter(receta => {
      return receta.id !== recetaId;
    });
  }
}
