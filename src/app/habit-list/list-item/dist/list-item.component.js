"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListItemComponent = void 0;
var core_1 = require("@angular/core");
var habit_model_1 = require("../habit.model");
var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
        this.habitInput = new habit_model_1.Habit('', "0");
        this.habitString = '0';
        this.MAXDAYS = 21;
    }
    ListItemComponent.prototype.ngOnInit = function () {
    };
    ListItemComponent.prototype.onValuePercent = function (habitInput) {
        var habitNumber = parseInt(habitInput);
        habitNumber = habitNumber * 100 / this.MAXDAYS;
        this.habitString = String(habitNumber);
        return this.habitString;
    };
    __decorate([
        core_1.Input()
    ], ListItemComponent.prototype, "habitInput");
    ListItemComponent = __decorate([
        core_1.Component({
            selector: 'app-list-item',
            templateUrl: './list-item.component.html',
            styleUrls: ['./list-item.component.css']
        })
    ], ListItemComponent);
    return ListItemComponent;
}());
exports.ListItemComponent = ListItemComponent;
