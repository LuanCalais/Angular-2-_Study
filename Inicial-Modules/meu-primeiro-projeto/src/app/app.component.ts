import { Component } from '@angular/core'; //Define um componente

//Baseado em um decorator
@Component({
  selector: 'app-root',
  template: `
  <app-new-component></app-new-component>

  <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
