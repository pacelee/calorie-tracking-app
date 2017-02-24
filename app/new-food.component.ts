import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h1> Add New Food </h1>
  <div class="container-fluid pie">
    <div>
      <label> Enter Food Name: </label>
      <input #newFood>
    </div>
    <div>
      <label> Enter a Description: </label>
      <input #description>
    </div>
    <div>
      <label> Enter Total Calories: </label>
      <input #calories>
    </div>
    <div>
    <button (click)="
      addClicked(newFood.value, description.value, calories.value);
      newFood.value='';
      description.value='';
      calories.value='';
    "> Add </button>
    </div>
  </div>
  `
})

export class NewFoodComponent {
 @Output() newFoodSender = new EventEmitter();
 addClicked(name: string, description: string, calories: number) {
   var newFoodToAdd: Food = new Food(name, description, calories);
   this.newFoodSender.emit(newFoodToAdd);
 }


}
