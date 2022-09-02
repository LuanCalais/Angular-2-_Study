import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core'; //Define um componente

//Baseado em um decorator
@Component({
  selector: 'app-root', //Nome que define a tag personalizada do componente
  template: `
  {{valor}}
  <button (click)="adicionar()">ADD</button>
  <app-title *ngIf="destruir" title='Aula ciclo de vida de componentes'></app-title>
  <br>
  <button (click)="destruirComponent()">Ng-Destroy</button>
  <br>
  <br>
  <router-outlet></router-outlet>` // Hack Organização do componentes
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  
  public valor:number = 1

  constructor() { } 

  // Função para estudo e testes adicionado ao evento
  public adicionar():number{
    return this.valor += 1
  }

  // Arrow Function responsável por fazer o log condensado em um só lugar para debugs e afins
  log: any = (texto: string) => {
    console.log(`${texto}`)
  }

  // Tem seu início após a criação do componente(Nesse caso na inicialização da aplicação), SEGUNDO lifehook na ordem dos componente
  ngOnInit(): void {
    setTimeout(() => {
      this.log('NgOnIniti Ativado')
    }, 5000);
  }

  // ngDoCheck - Este evento é disparado sempre que as propriedades de entrada de um componente são verificadas
  ngDoCheck(): void {
    this.log('DoCheck Ativado')
  }

  // Filhos doo ngDoCheck -------------------------------

  // ngAfterContentInit - Este evento é disparado quando o angular realiza qualquer projeção de conteúdo nas visualizações do componente 
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit Ativado')
  }
  
  //ngAfterContentChecked - Este evento é disparado sempre que o conteúdo do componente é verificado pelo mecanismo de detectção de alteração do Angular, por exemplo='1+1=2' invocaria esse evento
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked Ativado')
  }
  
  
  //ngAfterViewInit - Esse evento é executado quando a visualização do componente foi totalmente inicializada(Tudo que você pretendia mostrar já foi Ativado)'
  ngAfterViewInit(): void {
    this.log('ngAfterViewInit Ativado')
  }
  
  // ngAferViewChecked - Esse evento é executado quando a visualzação de um componente foi verificada pelo algoritmo de detecção de aleração do Angular
  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked Ativado')
  }

  // Variável de controle usado no ngIf 
  public destruir:boolean = true

  // Evento de auxílio para demonstração de ngOnDestroy
  public destruirComponent():void{
    this.destruir = false
  }

  // ngOnDestroy definido no title.component.ts

  
}
