import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  template: `
    
    <input type="text" [(ngModel)]="novoItem"> 
    <button (click)="add()">Enviar</button>
    <hr>
  `,
  styles: [
  ]
})
export class FoodAddComponent implements OnInit {

  public novoItem: string = ''

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }

  public add(): void {

    this.foodListService.setFoodList(this.novoItem)
    this.novoItem = ''
  }

}
