import { Component, OnInit } from '@angular/core'; //Define um componente

//Baseado em um decorator
@Component({
  selector: 'app-root', //Nome que define a tag personalizada do componente
  template: '<router-outlet></router-outlet>' // Hack Organização do componentes
})
export class AppComponent implements OnInit {
  constructor() { }

  log: any = (texto: string) => {
    console.log(`${texto}`)
  }

  // Tem seu início após a criação do componente(Nesse caso na inicialização da aplicação), SEGUNDO lifehook na ordem dos componente
  ngOnInit(): void {
    setTimeout(() => {
      this.log('NgOnIniti Criado')
    }, 5000);

  }
}
