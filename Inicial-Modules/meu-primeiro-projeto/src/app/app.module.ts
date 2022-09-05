import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  // Declara componentes dentro desse módulo
  declarations: [
    AppComponent
  ],

  // Importa funcionalidades de outros componentes
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    SharedModule
  ],

  // Declara services para requisições ao backend
  providers: [],

  // Apenas utilizado no componente principal, indica que é a parte do aplicativo que vai startar toda a aplicação(appStarter)
  bootstrap: [AppComponent]
})
export class AppModule { }
