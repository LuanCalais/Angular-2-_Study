import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  // Declara componentes dentro desse módulo
  declarations: [
    AppComponent,
    TitleComponent
  ],

  // Importa funcionalidades de outros componentes
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // Declara services para requisições ao backend
  providers: [],

  // Apenas utilizado no componente principal, indica que é a parte do aplicativo que vai startar toda a aplicação(appStarter)
  bootstrap: [AppComponent]
})
// Exporta componentes 
export class AppModule { }
