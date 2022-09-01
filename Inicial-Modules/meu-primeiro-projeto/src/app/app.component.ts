import { Component, OnInit } from '@angular/core'; //Define um componente

//Baseado em um decorator
@Component({
  selector: 'app-root', //Nome que define a tag personalizada do componente
  template: '<router-outlet></router-outlet>' // Hack Organização do componentes
})
export class AppComponent implements OnInit{
  constructor(){}

  ngOnInit{}
}
