"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.itemNameOut = new core_1.EventEmitter();
        this.itemName = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onAddButton = function (buttonContent) {
        console.log(buttonContent);
        var view = this.modalAdd.createEmbeddedView(null);
        this.vc.insert(view);
        this.modalAdd.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
        this.modalAdd.elementRef.nativeElement.previousElementSibling.classList.add('modal-open');
        // this.modalAdd.elementRef.nativeElement.previousElementSibling.classList.add('modal-backdrop'); 
        this.modalAdd.elementRef.nativeElement.previousElementSibling.style.display = 'block';
        // this.backdrop = document.createElement('DIV')
        // this.backdrop.className = 'modal-backdrop';
        // this.backdrop.style = "background-color: #ffff";
        // document.body.appendChild(this.backdrop)
    };
    HeaderComponent.prototype.onCloseModal = function () {
        console.log('close');
        this.vc.clear();
        // document.body.removeChild(this.backdrop)
    };
    HeaderComponent.prototype.onSaveHabit = function () {
        this.itemNameOut.emit(this.habitInput.nativeElement.value);
        console.log(this.habitInput.nativeElement.value);
        this.onCloseModal();
    };
    __decorate([
        core_1.ViewChild('modalAdd')
    ], HeaderComponent.prototype, "modalAdd");
    __decorate([
        core_1.ViewChild('vc', { read: core_1.ViewContainerRef })
    ], HeaderComponent.prototype, "vc");
    __decorate([
        core_1.ViewChild('habitInput')
    ], HeaderComponent.prototype, "habitInput");
    __decorate([
        core_1.Output()
    ], HeaderComponent.prototype, "itemNameOut");
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
