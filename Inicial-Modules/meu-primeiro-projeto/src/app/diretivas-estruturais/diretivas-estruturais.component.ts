import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true
  public conditionClick: boolean = true

  // Tipo lista que receve um objeto com o parâmetro nome do tipo string
  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Luan", idade: 26 },
    { nome: "Marilia", idade: 23 },
    { nome: "Emma", idade: 1 }
  ]

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {

      if (this.condition === true) {
        this.condition = false
      } else if (this.condition === false) {
        this.condition = true
      }

    }, 2000)

  }

  public onClick(): void {
    if (this.conditionClick === true) {
      this.conditionClick = false
    } else if (this.conditionClick === false) {
      this.conditionClick = true
    }
  }

  public onClickAddList(): void{
    this.list.push({nome: "Thalles", idade: 25})
  }

  public onClickRemoveList(): void{
    this.list.pop()
  }

  public onClickEventList(e:MouseEvent, index:number): void{
    console.log(index)
    
    // Remove esse item da lista
    this.list.splice(index, 1)
  }

}
