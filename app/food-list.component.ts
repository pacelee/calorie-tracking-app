import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="hiCal">Show High Calorie Meals</option>
    <option value="lowCal" selected="selected">Show Low Calorie Meals</option>
    </select>
    <div class="pie" *ngFor="let thisFood of childFoodList | calories:selectedCompleteness">
      <h3> {{ thisFood.name }} </h3>
      <p>  Description: {{ thisFood.description}} </p>
      <p> Calories: {{ thisFood.calories}} </p>
      <button (click)="editButtonHasBeenClicked(thisFood)">Edit</button>
    </div>
  `
})

export class FoodListComponent {
  public selectedCompleteness: string = "all";
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(FoodToEdit: Food) {
    this.clickSender.emit(FoodToEdit);
  }
  onChange(optionFromMenu) {
  this.selectedCompleteness = optionFromMenu;
  }
}
