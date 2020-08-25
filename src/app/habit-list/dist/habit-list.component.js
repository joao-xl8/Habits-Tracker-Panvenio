"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HabitListComponent = void 0;
var core_1 = require("@angular/core");
var habit_model_1 = require("./habit.model");
var HabitListComponent = /** @class */ (function () {
    function HabitListComponent() {
        this.habits = [
            new habit_model_1.Habit('Hang Out', "10"),
            new habit_model_1.Habit('Walk', "20"),
            new habit_model_1.Habit('Sleep', "21")
        ];
    }
    HabitListComponent.prototype.ngOnInit = function () {
    };
    HabitListComponent = __decorate([
        core_1.Component({
            selector: 'app-habit-list',
            templateUrl: './habit-list.component.html',
            styleUrls: ['./habit-list.component.css']
        })
    ], HabitListComponent);
    return HabitListComponent;
}());
exports.HabitListComponent = HabitListComponent;
