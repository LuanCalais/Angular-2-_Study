import { Component } from '@angular/core'; //Define um componente

//Baseado em um decorator
@Component({
  selector: 'app-root', //Nome que define a tag personalizada do componente
  templateUrl: './app.component.html', //Url de onde esta o html 
  styleUrls: ['./app.component.scss'] //Url de onde esta o estilo
})
export class AppComponent {
}
