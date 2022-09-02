import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome:string = 'Luan Calais'
  public idade:number = 26

  // Property Biding
  public checkedDisabled: boolean = true
  public imgSrc: string = 'https://lupadigital.info/wp-content/uploads/2018/05/imagens-gratis.jpg'
  public imgTitle: string = 'background'

  constructor() { }

  ngOnInit(): void {
  }

}
