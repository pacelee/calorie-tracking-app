"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var food_model_1 = require("./food.model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterFoodList = [
            new food_model_1.Food("Hamburger", "Ate it without fries", 600),
            new food_model_1.Food("BLT Sandwich", "The bacon was quite good", 450),
            new food_model_1.Food("Barbeque Ribs", "Man they were tender", 800)
        ];
        this.selectedFood = null;
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
    }
    AppComponent.prototype.showDetails = function (clickedFood) {
        this.selectedFood = clickedFood;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedFood = null;
    };
    AppComponent.prototype.addFood = function (newFoodFromChild) {
        this.masterFoodList.push(newFoodFromChild);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"container\">\n    <div class=\"col-md-4\">\n      <h1>Food Tracker</h1>\n        <food-list\n          [childFoodList]=\"masterFoodList\"\n          (clickSender)=\"showDetails($event)\"\n        ></food-list>\n    </div>\n    <div class=\"col-md-4\">\n      <new-food\n          (newFoodSender)=\"addFood($event)\"\n      ></new-food>\n      <edit-food\n        [childSelectedFood] = \"selectedFood\"\n        (doneClickedSender) = \"finishedEditing()\"\n      ></edit-food>\n    </div>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map