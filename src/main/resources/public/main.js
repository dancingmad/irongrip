(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kat_kat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kat/kat.component */ "./src/app/kat/kat.component.ts");
/* harmony import */ var _katlist_katlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../katlist/katlist.component */ "./src/app/katlist/katlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: ':env/kat/:locationId', component: _kat_kat_component__WEBPACK_IMPORTED_MODULE_2__["KatComponent"] },
    { path: ':env', component: _katlist_katlist_component__WEBPACK_IMPORTED_MODULE_3__["KatlistComponent"] },
    { path: '', redirectTo: 'test', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark fixed-top bg-dark shadow\">\n      <h2 class=\"text-light\">Unwetter Warnungen</h2>\n      <a class=\"btn btn-light\" *ngIf=\"getEnvironment()=='test'\" routerLink=\"/live/\">Switch to LIVE</a>\n      <a class=\"btn btn-light\" *ngIf=\"getEnvironment()=='live'\" routerLink=\"/test/\">Switch to TEST</a>\n</nav>\n  <div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-6 d-none d-md-block bg-light sidebar\"><app-mapselector></app-mapselector></nav>\n    <main class=\"col-md-6 ml-sm-auto col-lg-6 px-6\"><router-outlet></router-outlet></main>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_env_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/env.service */ "./src/app/service/env.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, env) {
        this.router = router;
        this.env = env;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.env.setEnvironment(event.url.startsWith('/test') ? 'test' : 'live');
            }
        });
    };
    AppComponent.prototype.getEnvironment = function () {
        return this.env.getEnvironment();
    };
    AppComponent.prototype.setEnvironment = function (env) {
        this.env.setEnvironment(env);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_env_service__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mapselector_mapselector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapselector/mapselector.component */ "./src/app/mapselector/mapselector.component.ts");
/* harmony import */ var _katlist_katlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./katlist/katlist.component */ "./src/app/katlist/katlist.component.ts");
/* harmony import */ var _kat_kat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kat/kat.component */ "./src/app/kat/kat.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = /** @class */ (function () {
    function AppModule() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__["setTheme"])('bs4');
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _mapselector_mapselector_component__WEBPACK_IMPORTED_MODULE_3__["MapselectorComponent"],
                _katlist_katlist_component__WEBPACK_IMPORTED_MODULE_4__["KatlistComponent"],
                _kat_kat_component__WEBPACK_IMPORTED_MODULE_5__["KatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/kat/kat.component.css":
/*!***************************************!*\
  !*** ./src/app/kat/kat.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kat/kat.component.html":
/*!****************************************!*\
  !*** ./src/app/kat/kat.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\n  <div class=\"col-2\">ID</div><div class=\"col-6\">{{katWarning.id}}</div>\n</div> -->\n<div class=\"row\">\n  <div class=\"col-2\">Standort:</div>\n  <div class=\"col-6\" *ngIf=\"newMode\">\n    <select [(ngModel)]=\"katWarning.locationId\" id=\"locationId\">\n      <option *ngFor=\"let location of availableLocations\" [ngValue]=\"location.locationId\">\n        {{ location.name }}\n      </option>\n    </select>\n  </div>\n  <div class=\"col-6\" *ngIf=\"!newMode\">\n    {{ katWarning.locationId }}\n  </div>\n</div>\n<div class=\"row mt-3\">\n  <div class=\"col-9 offset-2\">\n      In der Zeit zwischen <input class=\"mini-input\" type=\"number\" min=\"0\" max=\"24\" [(ngModel)]=\"katWarning.fromTime\" maxlength=\"2\" name=\"fromTime\"> und <input maxlength=\"2\" class=\"mini-input\" type=\"number\" min=\"0\" max=\"24\" [(ngModel)]=\"katWarning.toTime\" name=\"toTime\"> Uhr\n      werden heute im südlichen Teil des Neusiedler Sees Windstärken über <input class=\"mini-input\" maxlength=\"3\" type=\"number\" min=\"0\" max=\"300\" step=\"1\" [(ngModel)]=\"katWarning.expectedWind\" name=\"expectedWind\"> km/h erwartet.\n      Derzeit beträgt die Windstärke <input class=\"mini-input\" type=\"number\" [(ngModel)]=\"katWarning.currentWind\" maxlength=\"3\" min=\"0\" max=\"300\" step=\".1\" name=\"currentWind\"> km/h.\n  </div>\n</div>\n<div class=\"row mt-3\">\n  <div class=\"col-10 offset-2\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" *ngIf=\"katWarning.id != null\" (click)=\"update()\" [disabled]=\"progress\">Aktualisieren der Warnung</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" *ngIf=\"katWarning.id != null\" (click)=\"cancel()\" [disabled]=\"progress\">Warnung Aufheben</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" *ngIf=\"katWarning.id == null\" (click)=\"create()\" [disabled]=\"progress\">Neue Warnung erstellen</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" routerLink=\"/\">Schliessen</button>\n  </div>\n</div>\n<div class=\"row mt-3\" *ngIf=\"this.message\">\n  <div class=\"col-12\">\n      <div class=\"alert alert-danger\">{{this.message}}</div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/kat/kat.component.ts":
/*!**************************************!*\
  !*** ./src/app/kat/kat.component.ts ***!
  \**************************************/
/*! exports provided: KatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KatComponent", function() { return KatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_katwarn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/katwarn.service */ "./src/app/service/katwarn.service.ts");
/* harmony import */ var _service_katwarning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/katwarning */ "./src/app/service/katwarning.ts");
/* harmony import */ var _service_kat_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/kat-location.service */ "./src/app/service/kat-location.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KatComponent = /** @class */ (function () {
    function KatComponent(router, route, location, katwarnService, katLocationService) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.katwarnService = katwarnService;
        this.katLocationService = katLocationService;
        this.progress = false;
        this.newMode = false;
        this.katWarning = new _service_katwarning__WEBPACK_IMPORTED_MODULE_4__["KatWarning"]();
        this.availableLocations = [];
    }
    KatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLocations();
        this.getKatWarning();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.getKatWarning();
            }
        });
    };
    KatComponent.prototype.getLocations = function () {
        this.locations = this.katLocationService.getLocations();
    };
    KatComponent.prototype.getKatWarning = function () {
        var _this = this;
        var locationId = this.route.snapshot.paramMap.get('locationId');
        if (locationId === 'new') {
            this.newMode = true;
            this.getAvailableLocations();
        }
        else {
            this.katWarning.locationId = locationId;
            this.katwarnService.getKatWarning(locationId)
                .subscribe(function (katwarn) {
                if (katwarn) {
                    _this.katWarning = katwarn;
                }
                else {
                    _this.katWarning = { locationId: locationId };
                }
            });
        }
    };
    KatComponent.prototype.getAvailableLocations = function () {
        var _this = this;
        this.katwarnService.getKatWarnings().subscribe(function (katWarnings) {
            var existingLocations = katWarnings.map(function (warn) { return warn.locationId; });
            _this.availableLocations = [];
            _this.locations.forEach(function (location) {
                if (existingLocations.indexOf(location.locationId) < 0) {
                    _this.availableLocations.push(location);
                }
            });
        });
    };
    KatComponent.prototype.update = function () {
        var _this = this;
        this.progress = true;
        this.message = '';
        this.katwarnService.updateKatWarning(this.katWarning).subscribe(function (result) { _this.router.navigateByUrl('/'); }, function (error) { _this.message = 'Fehler beim Aktualisiern der Warnung:' + error.statusText; _this.progress = false; });
    };
    KatComponent.prototype.cancel = function () {
        var _this = this;
        this.progress = true;
        this.message = '';
        this.katwarnService.deleteKatWarning(this.katWarning).subscribe(function (result) { _this.router.navigateByUrl('/'); }, function (error) { _this.message = 'Fehler beim Aufheben der Warnung:' + error.statusText; _this.progress = false; });
    };
    KatComponent.prototype.create = function () {
        var _this = this;
        this.progress = true;
        this.message = '';
        this.katwarnService.createKatWarning(this.katWarning).subscribe(function (result) { _this.router.navigateByUrl('/'); }, function (error) { _this.message = 'Fehler beim Anlegen der Warnung:' + error.statusText; _this.progress = false; });
    };
    KatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kat',
            template: __webpack_require__(/*! ./kat.component.html */ "./src/app/kat/kat.component.html"),
            styles: [__webpack_require__(/*! ./kat.component.css */ "./src/app/kat/kat.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _service_katwarn_service__WEBPACK_IMPORTED_MODULE_3__["KatwarnService"],
            _service_kat_location_service__WEBPACK_IMPORTED_MODULE_5__["KatLocationService"]])
    ], KatComponent);
    return KatComponent;
}());



/***/ }),

/***/ "./src/app/katlist/katlist.component.css":
/*!***********************************************!*\
  !*** ./src/app/katlist/katlist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/katlist/katlist.component.html":
/*!************************************************!*\
  !*** ./src/app/katlist/katlist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\" *ngIf=\"katWarnings\">\n      <button type=\"button\" routerLink=\"/kat/{{katwarn.locationId}}\" *ngFor=\"let katwarn of katWarnings\" class=\"list-group-item list-group-item-action\">\n        In der Zeit zwischen {{katwarn.fromTime}} und {{katwarn.toTime}} Uhr\n        werden heute in {{katwarn.locationId}} Windstärken über {{katwarn.expectedWind}} km/h erwartet.\n        Derzeit beträgt die Windstärke {{katwarn.currentWind}} km/h.\n      </button>\n     <button type=\"button\" *ngIf=\"katWarnings.length == 0\" class=\"list-group-item disabled\" href=\"#\">Keine aktuellen Warnungen</button>\n     <button type=\"button\" routerLink=\"/kat/new\" class=\"list-group-item list-group-item-action\">Neue Unwetterwarnung...</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/katlist/katlist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/katlist/katlist.component.ts ***!
  \**********************************************/
/*! exports provided: KatlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KatlistComponent", function() { return KatlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_katwarn_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/katwarn.service */ "./src/app/service/katwarn.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/env.service */ "./src/app/service/env.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KatlistComponent = /** @class */ (function () {
    function KatlistComponent(router, route, env, katwarnService) {
        this.router = router;
        this.route = route;
        this.env = env;
        this.katwarnService = katwarnService;
    }
    KatlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.initKatWarnings();
            }
        });
        this.initKatWarnings();
    };
    KatlistComponent.prototype.initKatWarnings = function () {
        var _this = this;
        this.katwarnService.getKatWarnings().subscribe(function (katWarnings) { return _this.katWarnings = katWarnings.filter(function (warn) { return warn.locationId; }); });
    };
    KatlistComponent.prototype.getKatWarnings = function () {
        return this.katWarnings;
    };
    KatlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-katlist',
            template: __webpack_require__(/*! ./katlist.component.html */ "./src/app/katlist/katlist.component.html"),
            styles: [__webpack_require__(/*! ./katlist.component.css */ "./src/app/katlist/katlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"],
            _service_katwarn_service__WEBPACK_IMPORTED_MODULE_1__["KatwarnService"]])
    ], KatlistComponent);
    return KatlistComponent;
}());



/***/ }),

/***/ "./src/app/mapselector/mapselector.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mapselector/mapselector.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".katmap {\n  background-image: url('Neusiedlersee.png');\n  width: 480px;\n  height: 570px;\n}\n\n.location {\n  fill:palegreen;\n  stroke: black;\n  stroke-width: 1px;\n}\n\n.location:hover {\n  stroke-width: 3px;\n}\n\n.location.active {\n  fill:darkred;\n}\n\n.location.selected {\n  stroke-width: 3px;\n}\n"

/***/ }),

/***/ "./src/app/mapselector/mapselector.component.html":
/*!********************************************************!*\
  !*** ./src/app/mapselector/mapselector.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 text-center\"><svg class=\"katmap\">\n    <circle *ngFor=\"let loc of locations\" [attr.cx]=\"loc.x\" [attr.cy]=\"loc.y\" r=\"10\"\n            [ngClass]=\"{'location':true, 'active':loc.active, 'selected':loc.selected}\"\n            (click)=\"openLocation(loc)\" ></circle>\n\n  </svg> </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mapselector/mapselector.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mapselector/mapselector.component.ts ***!
  \******************************************************/
/*! exports provided: MapselectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapselectorComponent", function() { return MapselectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_katwarn_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/katwarn.service */ "./src/app/service/katwarn.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_kat_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/kat-location.service */ "./src/app/service/kat-location.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapselectorComponent = /** @class */ (function () {
    function MapselectorComponent(route, router, location, katLocationService, katWarnService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.katLocationService = katLocationService;
        this.katWarnService = katWarnService;
    }
    MapselectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locations = this.katLocationService.getLocations();
        // get all active warnings to add colors
        // check route to see which is
        this.locations.forEach(function (loc) { return loc.active = false; });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.updateLocations();
            }
        });
    };
    MapselectorComponent.prototype.updateLocations = function () {
        var _this = this;
        this.katWarnService.getKatWarnings().subscribe(function (warnings) {
            var warnLocations = warnings.map(function (warn) { return warn.locationId; });
            _this.locations.forEach(function (loc) {
                loc.active = (warnLocations.indexOf(loc.locationId) > -1);
            });
        });
    };
    MapselectorComponent.prototype.openLocation = function (loc) {
        this.router.navigate(['/kat', loc.locationId]);
    };
    MapselectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mapselector',
            template: __webpack_require__(/*! ./mapselector.component.html */ "./src/app/mapselector/mapselector.component.html"),
            styles: [__webpack_require__(/*! ./mapselector.component.css */ "./src/app/mapselector/mapselector.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _service_kat_location_service__WEBPACK_IMPORTED_MODULE_4__["KatLocationService"],
            _service_katwarn_service__WEBPACK_IMPORTED_MODULE_1__["KatwarnService"]])
    ], MapselectorComponent);
    return MapselectorComponent;
}());



/***/ }),

/***/ "./src/app/service/env.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/env.service.ts ***!
  \****************************************/
/*! exports provided: EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EnvironmentService = /** @class */ (function () {
    function EnvironmentService() {
        this.env = 'test';
    }
    EnvironmentService.prototype.setEnvironment = function (env) {
        this.env = env;
    };
    EnvironmentService.prototype.getEnvironment = function () {
        return this.env;
    };
    EnvironmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], EnvironmentService);
    return EnvironmentService;
}());



/***/ }),

/***/ "./src/app/service/kat-location.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/kat-location.service.ts ***!
  \*************************************************/
/*! exports provided: KatLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KatLocationService", function() { return KatLocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KatLocationService = /** @class */ (function () {
    function KatLocationService() {
        this.locations = [
            { x: 308, y: 45, name: 'Neusiedl', locationId: 'Neusiedl' },
            { x: 330, y: 88, name: 'Weiden', locationId: 'Weiden' },
            { x: 297, y: 197, name: 'Podersdorf', locationId: 'Podersdorf' },
            { x: 217, y: 316, name: 'Illmitz-Hölle', locationId: 'Illmitz-Hölle' },
            { x: 187, y: 402, name: 'Illmitz', locationId: 'Illmitz' },
            { x: 100, y: 489, name: 'Fertörakos', locationId: 'Fertörakos' },
            { x: 87, y: 374, name: 'Mörbisch', locationId: 'Mörbisch' },
            { x: 110, y: 318, name: 'Rust', locationId: 'Rust' },
            { x: 134, y: 230, name: 'Oggau', locationId: 'Oggau' },
            { x: 173, y: 97, name: 'Purbach', locationId: 'Purbach' },
            { x: 200, y: 68, name: 'Breitenbrunn', locationId: 'Breitenbrunn' }
        ];
    }
    KatLocationService.prototype.getLocations = function () {
        return this.locations;
    };
    KatLocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], KatLocationService);
    return KatLocationService;
}());



/***/ }),

/***/ "./src/app/service/katwarn.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/katwarn.service.ts ***!
  \********************************************/
/*! exports provided: KatwarnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KatwarnService", function() { return KatwarnService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env.service */ "./src/app/service/env.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KatwarnService = /** @class */ (function () {
    function KatwarnService(http, env) {
        this.http = http;
        this.env = env;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.katwarnUrl = 'api/katwarn/'; // URL to web api
    }
    KatwarnService.prototype.getKatWarnings = function () {
        return this.http.get(this.env.getEnvironment() + '/' + this.katwarnUrl);
    };
    KatwarnService.prototype.getKatWarning = function (locationId) {
        var detailUrl = this.env.getEnvironment() + "/" + this.katwarnUrl + locationId;
        return this.http.get(detailUrl);
    };
    KatwarnService.prototype.updateKatWarning = function (katWarning) {
        // do update
        return this.http.put(this.env.getEnvironment() + '/' + this.katwarnUrl, katWarning);
    };
    KatwarnService.prototype.createKatWarning = function (katWarning) {
        return this.http.post(this.env.getEnvironment() + '/' + this.katwarnUrl, katWarning);
    };
    KatwarnService.prototype.deleteKatWarning = function (katWarning) {
        var detailUrl = this.env.getEnvironment() + "/" + this.katwarnUrl + katWarning.locationId;
        return this.http.delete(detailUrl);
    };
    KatwarnService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _env_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"]])
    ], KatwarnService);
    return KatwarnService;
}());



/***/ }),

/***/ "./src/app/service/katwarning.ts":
/*!***************************************!*\
  !*** ./src/app/service/katwarning.ts ***!
  \***************************************/
/*! exports provided: KatWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KatWarning", function() { return KatWarning; });
var KatWarning = /** @class */ (function () {
    function KatWarning() {
    }
    return KatWarning;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thorstenreis/IdeaProjects/irongrp/src/main/angular/katwarn/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map