import { Component } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="col-md-4">
      <h1>Food Tracker</h1>
        <food-list
          [childFoodList]="masterFoodList"
          (clickSender)="showDetails($event)"
        ></food-list>
    </div>
    <div class="col-md-4">
      <new-food
          (newFoodSender)="addFood($event)"
      ></new-food>
      <edit-food
        [childSelectedFood] = "selectedFood"
        (doneClickedSender) = "finishedEditing()"
      ></edit-food>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Hamburger", "Ate it without fries", 600),
    new Food("BLT Sandwich", "The bacon was quite good", 450),
    new Food("Barbeque Ribs", "Man they were tender", 800)
  ];
  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  finishedEditing() {
    this.selectedFood = null;
  }
  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
  // lowCalories(){
  //   for (x = 0; x < this.masterFoodList.length; x++) {
  //       if (this.masterFoodList[x].calories > 500) {
  //         this.masterFoodList[x] = null
  //       }
  //       else {
  //         return this.masterFoodList[x];
  //         console.log(this.masterFoodList[x]);
  //       }
  //     };
  };
