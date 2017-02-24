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
var core_1 = require("@angular/core");
var FoodListComponent = (function () {
    function FoodListComponent() {
        this.selectedCompleteness = "all";
        this.clickSender = new core_1.EventEmitter();
    }
    FoodListComponent.prototype.editButtonHasBeenClicked = function (FoodToEdit) {
        this.clickSender.emit(FoodToEdit);
    };
    FoodListComponent.prototype.onChange = function (optionFromMenu) {
        this.selectedCompleteness = optionFromMenu;
    };
    return FoodListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], FoodListComponent.prototype, "childFoodList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FoodListComponent.prototype, "clickSender", void 0);
FoodListComponent = __decorate([
    core_1.Component({
        selector: 'food-list',
        template: "\n    <select (change)=\"onChange($event.target.value)\">\n    <option value=\"all\">Show All</option>\n    <option value=\"hiCal\">Show High Calorie Meals</option>\n    <option value=\"lowCal\" selected=\"selected\">Show Low Calorie Meals</option>\n    </select>\n    <div class=\"pie\" *ngFor=\"let thisFood of childFoodList | calories:selectedCompleteness\">\n      <h3> {{ thisFood.name }} </h3>\n      <p>  Description: {{ thisFood.description}} </p>\n      <p> Calories: {{ thisFood.calories}} </p>\n      <button (click)=\"editButtonHasBeenClicked(thisFood)\">Edit</button>\n    </div>\n  "
    })
], FoodListComponent);
exports.FoodListComponent = FoodListComponent;
//# sourceMappingURL=food-list.component.js.map