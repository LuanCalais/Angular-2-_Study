import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';

// Modulo SHARED organiza o que é compartilhado com a aplicação inteira

@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent
  ],
  // Exporta componentes
  exports: [NewComponentComponent, InputComponent],
  imports: [
    CommonModule
  ]
})

// Class do múdulo exporável(cadastrar no módulo principal para uso externo)
export class SharedModule { }
