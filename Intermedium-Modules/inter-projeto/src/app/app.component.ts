import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-food-list></app-food-list>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'inter-projeto';
}
