import { Injectable } from '@angular/core';

@Injectable({
  // Service injetável em todos os lugares da aplicação 
  providedIn: 'root'
})

// Classe exportada da lista de comidas
export class FoodListService {

  private list: Array<string> = [
    "X-Bacon",
    "X-Salada",
    "X-Egg",
    "Bolinho de Queijo",
    "Refrigerante"
  ]

  constructor() { }

  public getFoodList(): Array<string> {
    return this.list
  }

  public setFoodList(value: string): void {
    this.list.push(value)
  }

}
