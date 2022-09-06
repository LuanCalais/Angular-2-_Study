import { Component } from '@angular/core'; //Define um componente

//Baseado em um decorator
@Component({
  selector: 'app-root',
  template: `
  <app-new-component></app-new-component>
  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="Add()">Add</button>
  <button (click)="Remove()">Remove</button>
  <br>
  <br>
  <hr>
  <app-output></app-output>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {

  // Sempre ao início do componente o valor será zerado
  public addValue:number = 0
  
  public Add():void{
    this.addValue += 1
  }

  public Remove():void{
    this.addValue = 0
  }

}
