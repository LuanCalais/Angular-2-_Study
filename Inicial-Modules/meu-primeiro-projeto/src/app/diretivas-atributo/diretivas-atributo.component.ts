import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributo',
  templateUrl: './diretivas-atributo.component.html',
  styleUrls: ['./diretivas-atributo.component.scss']
})
export class DiretivasAtributoComponent implements OnInit {

  public valor: boolean = true

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if (this.valor) {
        this.valor = false
      } else {
        this.valor = true
      }
    }, 2000)

  }

}
