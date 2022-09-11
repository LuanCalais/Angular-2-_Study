import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  // Service injetável em todos os lugares da aplicação 
  providedIn: 'root'
})

// Classe exportada da lista de comidas
export class FoodListService {

  // Subscribe - Te inscreve em um evento, e sempre que esse evento fizer algo, o subscribe retornará o dado
  public emitEvent = new EventEmitter()

  private list: Array<string> = [
  ]

  constructor() { }

  public getFoodList(): Array<string> {
    return this.list
  }

  public setFoodList(value: string): void {
    // Irá emitir o evento quando passar por aqui
    this.foodListAlert(value)
    this.list.push(value)
  }

  // Subscribe - sempre que ele receber um valor, irá mostrar um alerta no front
  public foodListAlert(value: string) {
    return this.emitEvent.emit(value)
  }

}
