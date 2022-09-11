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

  // "enviarDados" - Evento de emssão definido no componente output.component.ts(capturamos ele aqui)
  <app-output (enviarDados)="setDados($event)"></app-output>
  <ng-template [ngIf]="getDados">
    <h3>{{getDados.nome}} - {{getDados.idade}} anos</h3>
  </ng-template>

  <router-outlet></router-outlet>
  `
})
export class AppComponent {

  // @Input ==============================================
  // Sempre ao início do componente o valor será zerado
  public addValue: number = 0

  public Add(): void {
    this.addValue += 1
  }

  public Remove(): void {
    this.addValue = 0
  }


  // @Output ==============================================

  public getDados?: { nome: string, idade: number }

  // Recupera as informações vindas de output.component.ts
  public setDados(e: {nome: string, idade: number}): void {
    console.log(e)
    this.getDados = e
  }


}
