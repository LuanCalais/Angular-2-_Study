import { Component } from '@angular/core'; //Define um componente

//Baseado em um decorator
@Component({
  selector: 'app-root',
  template: `
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
