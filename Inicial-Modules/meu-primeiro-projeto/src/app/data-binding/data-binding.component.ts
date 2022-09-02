import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  // Interpolation
  public nome:string = 'Luan Calais'
  public idade:number = 26

  // Property Biding
  public checkedDisabled: boolean = true
  public imgSrc: string = 'https://lupadigital.info/wp-content/uploads/2018/05/imagens-gratis.jpg'
  public imgTitle: string = 'background'

  // Event Biding
  public position: {x:number, y: number} = {x: 0, y: 0} 

  constructor() { }

  ngOnInit(): void {
  }

  // Event Binding
  public alertaInfo(valor:MouseEvent):void{
    // Recebe vários eventos de mouse usando a variável $event no evento de (click)
    console.log(valor)
  }

  public mouseMoveTest(valor:MouseEvent):void{
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }

}
