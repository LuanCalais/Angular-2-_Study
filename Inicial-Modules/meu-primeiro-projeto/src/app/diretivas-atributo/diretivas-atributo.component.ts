import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributo',
  templateUrl: './diretivas-atributo.component.html',
  styleUrls: ['./diretivas-atributo.component.scss']
})
export class DiretivasAtributoComponent implements OnInit {

  public valor: boolean = true
  public height: string = "20px"
  public border: string = "1px solid red"

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {

      if (this.valor) {
        this.valor = false
      } else {
        this.valor = true
      }

      if(this.height === "20px"){
        this.height = "100px"
        this.border = '1px dashed blue'

      }else{
        this.height = "50px"
        this.border = '1px dotted green'
      }

    }, 2000)

  }

}
