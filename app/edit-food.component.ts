import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food',
  template: `
  <div class="pie" *ngIf="childSelectedFood">
    <h1>Edit Meal</h1>
    <div>
      <label> Enter Food Name: </label>
      <input [(ngModel)]="childSelectedFood.name">
    </div>
    <div>
      <label> Enter a Description: </label>
      <input [(ngModel)]="childSelectedFood.description">
    </div>
    <div>
      <label> Enter Total Calories: </label>
      <input [(ngModel)]="childSelectedFood.calories">
      <button (click)="doneClicked()"> Done </button>
    </div>

  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
