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
var router_1 = require('@angular/router');
var menu_component_1 = require('./components/menu/menu.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent.prototype.toggleMenu = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'meu-app',
            template: "\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n\t  <div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t  <a class=\"navbar-brand\" href=\"#\">Corretora</a>\n\t\t</div>\n\t\t<div>\n\t\t  <ul class=\"nav navbar-nav\">\n\t\t  \t<li><a [routerLink]=\"['/aluno-listar']\">Alunos</a></li>\n\t\t  \t<li><a [routerLink]=\"['/logout']\">Sair</a></li>\n\t\t  </ul>\n\t\t</div>\n\t  </div>\n\t\t</nav>\n    <br /><br /><br />\n\n\n<!--\n\t\t<button (click)=\"toggleMenu()\" class=\"hamburger\">\n  \t\t<span>toggle menu</span>\n\t\t</button>\n\t\t<h1>\n\t\t\t{{title}}\n\t\t</h1>\n\t\t\n\t\t<app-menu></app-menu> -->\n    <router-outlet></router-outlet>\n\t",
            styleUrls: ['/app/views/menu/menu.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, menu_component_1.MenuComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map