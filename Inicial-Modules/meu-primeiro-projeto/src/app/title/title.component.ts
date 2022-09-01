import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  public title:string = 'Olá Mundo'

  constructor() { }

  // Ciclo de vida do componente
  ngOnInit(): void {

  }

}
