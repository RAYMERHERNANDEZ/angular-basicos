import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>

        <h3>Ejemplo 1</h3>
        
        <button (click)="sumar()"> + 1 </button>
        
        <span> {{ numero1 }} </span>
        
        <button (click)="restar()"> - 1 </button>
        
        <h3>Ejemplo 2</h3>
        
        <button (click)="acumular(+2)"> + 2 </button>
        
        <span> {{ numero2 }} </span>
        
        <button (click)="acumular(-2)"> - 2 </button>
        
        <h3>Ejemplo 3</h3>
        
        <h4>La base es: <strong>{{ base }}</strong> </h4>
        
        <button (click)="contador(base)">+ {{ base }} </button>
        
        <span>{{ numero3 }}</span>
        
        <button (click)="contador(-base)">- {{ base }} </button>
    `

})

export class ContadorComponent {
    public titulo: string = 'Contador App';
    numero1: number = 10;
    numero2: number = 10;
    numero3: number = 10;

    base: number = 5;

    sumar() {
        this.numero1 += 1;
    }

    restar() {
        this.numero1 -= 1;
    }

    acumular(valor: number) {
        this.numero2 += valor;
    }

    contador(valor: number) {
        this.numero3 += valor;
    }


}