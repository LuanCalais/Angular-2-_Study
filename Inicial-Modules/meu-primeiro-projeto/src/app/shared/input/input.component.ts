import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  // Anotação para exemplo de @Input, com esse decorator é possível entrada de dados de outros componentes
  @Input() public contador:number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
