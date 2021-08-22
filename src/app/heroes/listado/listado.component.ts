import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado1 : string  = '';

  borrarHeroe() {
    this.heroeBorrado1 = this.heroes.shift() || '';
  }

}
