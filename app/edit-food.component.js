"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var food_model_1 = require('./food.model');
var EditFoodComponent = (function () {
    function EditFoodComponent() {
        this.doneClickedSender = new core_1.EventEmitter();
    }
    EditFoodComponent.prototype.doneClicked = function () {
        this.doneClickedSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', food_model_1.Food)
    ], EditFoodComponent.prototype, "childSelectedFood", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditFoodComponent.prototype, "doneClickedSender", void 0);
    EditFoodComponent = __decorate([
        core_1.Component({
            selector: 'edit-food',
            template: "\n  <div class=\"pie\" *ngIf=\"childSelectedFood\">\n    <h1>Edit Meal</h1>\n    <div>\n      <label> Enter Food Name: </label>\n      <input [(ngModel)]=\"childSelectedFood.name\">\n    </div>\n    <div>\n      <label> Enter a Description: </label>\n      <input [(ngModel)]=\"childSelectedFood.description\">\n    </div>\n    <div>\n      <label> Enter Total Calories: </label>\n      <input [(ngModel)]=\"childSelectedFood.calories\">\n      <button (click)=\"doneClicked()\"> Done </button>\n    </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditFoodComponent);
    return EditFoodComponent;
}());
exports.EditFoodComponent = EditFoodComponent;
//# sourceMappingURL=edit-food.component.js.map