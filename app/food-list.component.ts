import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <div class="pie" *ngFor="let thisFood of childFoodList">
      <h3> {{ thisFood.name }} </h3>
      <p>  Description: {{ thisFood.description}} </p>
      <p> Calories: {{ thisFood.calories}} </p>
      <button (click)="editButtonHasBeenClicked(thisFood)">Edit</button>
    </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(FoodToEdit: Food) {
    this.clickSender.emit(FoodToEdit);
  }
}
