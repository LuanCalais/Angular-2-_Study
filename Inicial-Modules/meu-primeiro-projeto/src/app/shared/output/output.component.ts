import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  // Envia dados para o app.component.ts como um novo emissor de evento
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade: number }> = [
    { nome: 'Luan Calais', idade: 26 },
    { nome: 'Marilia Lima', idade: 23 },
    { nome: 'Emma Lima Calais', idade: 1 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number): void {
    
    // Recupera lista a partir do índice
    console.log(this.list[event])

    // Envia os dados para ser recuperado em outro lugar
    this.enviarDados.emit(this.list[event])

  }

}
