import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';

// Modulo SHARED organiza o que é compartilhado com a aplicação inteira

@NgModule({
  declarations: [
    NewComponentComponent
  ],
  // Exporta componentes
  exports: [NewComponentComponent],
  imports: [
    CommonModule
  ]
})

// Class do múdulo exporável(cadastrar no módulo principal para uso externo)
export class SharedModule { }
