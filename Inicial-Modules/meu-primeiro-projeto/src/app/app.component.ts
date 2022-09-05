import { Component } from '@angular/core'; //Define um componente

//Baseado em um decorator
@Component({
  selector: 'app-root',
  template: `
  <app-diretivas-estruturais></app-diretivas-estruturais>
  
  <app-diretivas-atributo>
  <h1>Diretivas de Atributo</h1>
  <hr>
  <h3>Conteúdo Final</h3>
  </app-diretivas-atributo>
  
  <app-diretivas-atributo>
  <h1>Teste de NG-CONTENT</h1>
  <hr>
  <h3>Olá mundo</h3>
  </app-diretivas-atributo>



  <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
