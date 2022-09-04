import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition:boolean = true
  public conditionClick: boolean = true

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {

      if(this.condition === true){
        this.condition = false
      }else if(this.condition === false){
        this.condition = true
      }

    }, 2000)

  }

  public onClick():void{
    if(this.conditionClick === true){
      this.conditionClick = false
    }else if(this.conditionClick === false){
      this.conditionClick = true
    }
  }

}
