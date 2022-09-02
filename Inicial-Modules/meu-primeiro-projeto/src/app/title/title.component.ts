import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

 @Input() public title:string = 'Olá Mundo'

  constructor() { }
  
  
  // ngOnChanges - Tem seu início antes do ngOnInit pois ele irá verificar e tratar possíveis dados trazidos por variáveis externas, marcadas palo decorator @Input, sem o title sendo setado no app.component ele não é ativado
  ngOnChanges(): void{
    console.log('ngOnChanges - informação alterada')
  }

  // ngOnInit - Ciclo de vida do componente(Explicado no app.component.ts)
  ngOnInit(): void {
    console.log('ngOnInit do title component ativado')
  }


  // ngOnDestroy - Esse evendo é executado quando destruímos um componente
  ngOnDestroy(): void{
    // Imprime aviso de componente destruído
    console.log('ngOnDestroy do title component ativado')
  }

}

