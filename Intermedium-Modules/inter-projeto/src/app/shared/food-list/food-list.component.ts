import { Component, OnInit } from '@angular/core';

// Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  template: `
    <ul *ngIf="foodList.length">
      <li *ngFor="let item of foodList; let i = index">
        {{item}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class FoodListComponent implements OnInit {

  public foodList: Array<string> = []

  // Injeção de dependência da service
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {

    this.foodList = this.foodListService.getFoodList()

    // Sempre que essa função estiver ativa iremos ser inscritos, retornando um success ou error
    this.foodListService.emitEvent.subscribe({
      next: (res: any) => alert(`Você adicionou o item: ${res}`),
      error: (err: any) => alert(err)
    })

  }

}
