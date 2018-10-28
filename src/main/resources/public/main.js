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
/* harmony import */ var _components_translation_translations_translations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/translation/translations/translations.component */ "./src/app/components/translation/translations/translations.component.ts");
/* harmony import */ var _components_translation_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/translation/home/home.component */ "./src/app/components/translation/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_translation_course_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/translation/course/course.component */ "./src/app/components/translation/course/course.component.ts");
/* harmony import */ var _components_training_training_training_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/training/training/training.component */ "./src/app/components/training/training/training.component.ts");
/* harmony import */ var _components_training_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/training/statistics/statistics.component */ "./src/app/components/training/statistics/statistics.component.ts");
/* harmony import */ var _components_training_trainingconfig_trainingconfig_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/training/trainingconfig/trainingconfig.component */ "./src/app/components/training/trainingconfig/trainingconfig.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'home', component: _components_translation_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'translations', component: _components_translation_translations_translations_component__WEBPACK_IMPORTED_MODULE_2__["TranslationsComponent"] },
    { path: 'course/:id', component: _components_translation_course_course_component__WEBPACK_IMPORTED_MODULE_5__["CourseComponent"] },
    { path: 'config', component: _components_training_trainingconfig_trainingconfig_component__WEBPACK_IMPORTED_MODULE_8__["TrainingconfigComponent"] },
    { path: 'training/:id', component: _components_training_training_training_component__WEBPACK_IMPORTED_MODULE_6__["TrainingComponent"] },
    { path: 'statistics', component: _components_training_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__["StatisticsComponent"] },
    { path: '', redirectTo: '/translations', pathMatch: 'full' }
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

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-5\">\n    </div>\n    <div class=\"col-7\">\n      <app-noty></app-noty>\n    </div>\n  </div>\n    <div class=\"row shadow-sm headline\">\n      <div class=\"col-4 m-2 text-left\"><h1>{{ 'application.title' | translate }}</h1></div>\n      <div class=\"col m-2 text-right\"></div>\n      <div class=\"col-2 m-2 text-right\">\n        <div *ngIf=\"user\" class=\"btn-group\" dropdown>\n          <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle material-icons\"\n                  aria-controls=\"dropdown-basic\">person<span class=\"caret\"></span>\n          </button>\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\n              role=\"menu\" aria-labelledby=\"button-basic\">\n            <li role=\"menuitem\"><a class=\"dropdown-item\" routerLink=\"/profile\">Profile</a></li>\n            <li class=\"divider dropdown-divider\"></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"logout()\">Logout</a></li>\n          </ul>\n          </div>\n        </div>\n    </div>\n  <div class=\"row d-lg-none mt-2 shadow-sm p-2\">\n    <div class=\"btn-group\" role=\"group\">\n      <a routerLink=\"/home\" title=\"Home\" class=\"btn btn-outline-dark material-icons\">home</a>\n      <a routerLink=\"/translations\" title=\"Translations\" class=\"btn btn-outline-dark material-icons\">library_books</a>\n    </div>\n  </div>\n    <div class=\"row\">\n      <div class=\"col-1 mt-2 d-none d-lg-block\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <a routerLink=\"/home\" title=\"Home\" class=\"btn btn-lg btn-outline-dark material-icons\">home</a>\n          </div>\n        </div>\n        <div class=\"row mt-2\">\n          <div class=\"col\">\n            <a routerLink=\"/translations\" title=\"Translations\" class=\"btn btn-lg btn-outline-dark material-icons\">library_books</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col mt-2 pb-4 shadow-sm\">\n          <app-login *ngIf=\"!user\"></app-login>\n          <router-outlet *ngIf=\"user\"></router-outlet>\n      </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
    function AppComponent(userService, translate, route, location) {
        this.userService = userService;
        this.translate = translate;
        this.route = route;
        this.location = location;
        this.fetchUser();
        translate.setDefaultLang('ENGLISH');
    }
    AppComponent.prototype.fetchUser = function () {
        var _this = this;
        this.userService.getLoggedInUser().subscribe(function (user) {
            _this.user = user;
            _this.translate.use(user.language || 'ENGLISH');
        });
    };
    AppComponent.prototype.logout = function () {
        this.userService.logout();
    };
    AppComponent.prototype.openProfile = function () {
        this.location.go('/profile');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_translation_translations_translations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/translation/translations/translations.component */ "./src/app/components/translation/translations/translations.component.ts");
/* harmony import */ var _components_noty_noty_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/noty/noty.component */ "./src/app/components/noty/noty.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_translation_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/translation/home/home.component */ "./src/app/components/translation/home/home.component.ts");
/* harmony import */ var _components_translation_course_course_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/translation/course/course.component */ "./src/app/components/translation/course/course.component.ts");
/* harmony import */ var _components_translation_translationentry_translationentry_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/translation/translationentry/translationentry.component */ "./src/app/components/translation/translationentry/translationentry.component.ts");
/* harmony import */ var _components_translation_translations_filter_language_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/translation/translations/filter-language.pipe */ "./src/app/components/translation/translations/filter-language.pipe.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _components_training_trainingconfig_trainingconfig_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/training/trainingconfig/trainingconfig.component */ "./src/app/components/training/trainingconfig/trainingconfig.component.ts");
/* harmony import */ var _components_training_training_training_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/training/training/training.component */ "./src/app/components/training/training/training.component.ts");
/* harmony import */ var _components_training_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/training/statistics/statistics.component */ "./src/app/components/training/statistics/statistics.component.ts");
/* harmony import */ var _components_translation_coursepicker_coursepicker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/translation/coursepicker/coursepicker.component */ "./src/app/components/translation/coursepicker/coursepicker.component.ts");
/* harmony import */ var _components_training_trainingresult_trainingresult_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/training/trainingresult/trainingresult.component */ "./src/app/components/training/trainingresult/trainingresult.component.ts");
/* harmony import */ var _components_training_trainingconfig_staricon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/training/trainingconfig/staricon.component */ "./src/app/components/training/trainingconfig/staricon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_translation_translations_translations_component__WEBPACK_IMPORTED_MODULE_7__["TranslationsComponent"],
                _components_noty_noty_component__WEBPACK_IMPORTED_MODULE_8__["NotyComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_translation_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_translation_course_course_component__WEBPACK_IMPORTED_MODULE_14__["CourseComponent"],
                _components_translation_translationentry_translationentry_component__WEBPACK_IMPORTED_MODULE_15__["TranslationentryComponent"],
                _components_translation_translations_filter_language_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterLanguagePipe"],
                _components_training_trainingconfig_trainingconfig_component__WEBPACK_IMPORTED_MODULE_18__["TrainingconfigComponent"],
                _components_training_training_training_component__WEBPACK_IMPORTED_MODULE_19__["TrainingComponent"],
                _components_training_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_20__["StatisticsComponent"],
                _components_translation_coursepicker_coursepicker_component__WEBPACK_IMPORTED_MODULE_21__["CoursepickerComponent"],
                _components_training_trainingresult_trainingresult_component__WEBPACK_IMPORTED_MODULE_22__["TrainingresultComponent"],
                _components_training_trainingconfig_staricon_component__WEBPACK_IMPORTED_MODULE_23__["StarIconComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["TypeaheadModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["ProgressbarModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n      <h1 class=\"page-title\">Login</h1>\n  </div>\n</div>\n<div class=\"row\">\n<div class=\"col-4\">\n    Username:\n</div>\n  <div class=\"col\">\n    <input class=\"form-control-sm\" type=\"text\" #username placeholder=\"username\" >\n  </div>\n</div>\n<div class=\"row mt-1\">\n  <div class=\"col-4\">\n    Password:\n  </div>\n  <div class=\"col\">\n    <input class=\"form-control-sm\" type=\"password\" #password placeholder=\"password\" >\n  </div>\n</div>\n<div class=\"row mt-3\">\n  <div class=\"col-4\">\n\n  </div>\n  <div class=\"col\">\n    <button  (click)=\"authenticate(username.value, password.value)\">Login</button>\n    <button  (click)=\"register(username.value, password.value)\">Register</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.authenticate = function (username, password) {
        // will propagate current user after authentication to all components
        this.userService.authenticate(username, password);
    };
    LoginComponent.prototype.register = function (username, password) {
        // will propagate current user after register to all components
        this.userService.register(username, password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/noty/noty.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/noty/noty.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noty {\n   z-index: 99999;\n   box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;\n}\n"

/***/ }),

/***/ "./src/app/components/noty/noty.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/noty/noty.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:absolute;top:30px\">\n\n\n  <div *ngFor=\"let noty of activeNotys\" [@notyTrigger]=\"'dummy'\" class=\"alert noty\" [ngClass]=\"noty.cssClass\">\n     {{noty.message}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/noty/noty.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/noty/noty.component.ts ***!
  \***************************************************/
/*! exports provided: NotyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotyComponent", function() { return NotyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_noty_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/noty.service */ "./src/app/services/noty.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotyComponent = /** @class */ (function () {
    function NotyComponent(notyService) {
        this.notyService = notyService;
        this.activeNotys = [];
    }
    NotyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notyService.getNotys().subscribe(function (noty) {
            _this.activeNotys.push(noty);
            setTimeout(function () { return _this.activeNotys.splice(0, 1); }, 3000);
        });
    };
    NotyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-noty',
            template: __webpack_require__(/*! ./noty.component.html */ "./src/app/components/noty/noty.component.html"),
            styles: [__webpack_require__(/*! ./noty.component.css */ "./src/app/components/noty/noty.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('notyTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.5s ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.5s ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                    ])
                ])
            ],
        }),
        __metadata("design:paramtypes", [_services_noty_service__WEBPACK_IMPORTED_MODULE_1__["NotyService"]])
    ], NotyComponent);
    return NotyComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2\">Username</div>\n  <div class=\"col col-md-5\">{{user.username}}</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-2\">Language</div>\n  <div class=\"col col-md-5\">\n    <select class=\"form-control\" [(ngModel)]=\"user.language\" (change)=\"onChangeLanguage()\">\n      <option *ngFor=\"let language of languages\" [value]=\"language\">{{ 'language.'+language | translate}}</option>\n    </select>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, translationService) {
        this.userService = userService;
        this.translationService = translationService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedInUser().subscribe(function (u) { return _this.user = u; });
        this.languages = ['ENGLISH', 'GERMAN'];
    };
    ProfileComponent.prototype.onChangeLanguage = function () {
        this.translationService.use(this.user.language);
        this.userService.update(this.user);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/training/statistics/statistics.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/training/statistics/statistics.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/training/statistics/statistics.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/training/statistics/statistics.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"statisticsList && statisticsList.length == 0\">\n   No statistics recorded yet\n</div>\n<div class=\"row\" *ngFor=\"let stat of statisticsList\">\n  <div class=\"col-5\">\n    {{stat.translation.translation}}\n  </div>\n  <div class=\"col\">\n    {{stat.skillLevelFrom}}/{{stat.skillLevelTo}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/training/statistics/statistics.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/training/statistics/statistics.component.ts ***!
  \************************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_training_translationstatistics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/training/translationstatistics.service */ "./src/app/services/training/translationstatistics.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(statisticsService, userService) {
        this.statisticsService = statisticsService;
        this.userService = userService;
        this.loading = false;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statisticsService.getLoadingListener().subscribe(function (loading) { return _this.loading = loading; });
        this.userService.getLoggedInUser().subscribe(function (u) {
            _this.user = u;
            _this.refreshStatistics();
        });
    };
    StatisticsComponent.prototype.refreshStatistics = function () {
        var _this = this;
        this.statisticsService.listStatistics().subscribe(function (stats) { return _this.statisticsList = stats; });
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/components/training/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/components/training/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_services_training_translationstatistics_service__WEBPACK_IMPORTED_MODULE_1__["TranslationStatisticsService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/components/training/training/training.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/training/training/training.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question {\n  font-size: xx-large;\n}\n\n.answer {\n  font-size: xx-large;\n  line-height: 2;\n  width:100%;\n}\n\nbutton.answer-ok {\n  font-size: xx-large;\n  line-height: 2;\n  width:50%;\n}\n\nbutton.answer-nok {\n  font-size: xx-large;\n  line-height: 2;\n  width:50%;\n}\n\n.hint {\n  font-size: x-large;\n  color: gray;\n}\n\n.font-big {\n  font-size: 48pt;\n}\n\n.font-normal {\n  font-size: 32pt;\n}\n"

/***/ }),

/***/ "./src/app/components/training/training/training.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/training/training/training.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"guessingForm\" (keyup.enter)=\"checkGuess()\">\n<div *ngIf=\"trainingFinish\">\n    <app-trainingresult [startResult]=\"training.result\"\n                        [finishResult]=\"trainingFinish.result\"\n                        [direction]=\"training.configuration.direction\"></app-trainingresult>\n</div>\n<div class=\"row\" *ngIf=\"currentStatistics\">\n  <div class=\"col\">\n    <div class=\"row question\">\n      <div class=\"col\" *ngIf=\"isCurrentDirectionTo\">\n        <div class=\"row\">\n          <div *ngIf=\"currentStatistics.translation.iconUrl\" class=\"col-2\"><img [src]=\"currentStatistics.translation.iconUrl\"></div>\n          <div class=\"col\" [ngClass]=\"fontClass\">{{currentStatistics.translation.translation}}</div>\n            <div class=\"col text-right\" *ngIf=\"currentStatistics.showHint\">{{currentStatistics.translation.hint}}</div>\n            <div class=\"col text-right\" *ngIf=\"!currentStatistics.showHint\">\n              <button class=\"btn btn-outline-dark \" (click)=\"currentStatistics.showHint = true\">show hint</button>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!guessInput\">\n          <div class=\"col\">\n            <span>{{lockedGuess}} => </span>\n            <span>{{currentStatistics.translation.translatesTo[0].translation}}</span>\n            <span *ngIf=\"isGuessCorrect\"> (Success) </span>\n            <span *ngIf=\"!isGuessCorrect\"> (Failed) </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\" *ngIf=\"!isCurrentDirectionTo\">\n        <div class=\"row\"><div class=\"col\">{{currentStatistics.translation.translatesTo[0].translation}}</div></div>\n        <div class=\"row\" *ngIf=\"!guessInput\">\n          <div class=\"col\">{{lockedGuess}} => </div>\n          <div class=\"col\">{{currentStatistics.translation.translation}}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n          <input *ngIf=\"guessInput\" name=\"guess\" type=\"text\"  class=\"form-control form-control-sm answer\" [(ngModel)]=\"guess\">\n      </div>\n    </div>\n    <div class=\"row mt-2\">\n      <div class=\"col\">\n        <button *ngIf=\"guessInput\" class=\"material-icons btn btn-outline-dark answer\" (click)=\"checkGuess()\">input</button>\n        <div class=\"btn-group\" *ngIf=\"!guessInput\">\n          <button class=\"material-icons btn btn-outline-dark answer-ok\" (click)=\"addRun(true)\" [disabled]=\"loading\">check</button>\n          <button class=\"material-icons btn btn-outline-dark answer-nok\" (click)=\"addRun(false)\" [disabled]=\"loading\">cancel</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/training/training/training.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/training/training/training.component.ts ***!
  \********************************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_training_training_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/training/training.service */ "./src/app/services/training/training.service.ts");
/* harmony import */ var _services_training_translationstatistics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/training/translationstatistics.service */ "./src/app/services/training/translationstatistics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(route, userService, trainingService, statisticsService) {
        this.route = route;
        this.userService = userService;
        this.trainingService = trainingService;
        this.statisticsService = statisticsService;
        this.isCurrentDirectionTo = true;
        this.loading = false;
        this.guessInput = false;
    }
    TrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.reset();
            var trainingId = +params.get('id');
            _this.trainingService.getTraining(trainingId).subscribe(function (t) {
                _this.training = t;
                _this.fetchNextTranslations();
            });
        });
    };
    TrainingComponent.prototype.reset = function () {
        this.training = null;
        this.trainingFinish = null;
        this.guessInput = false;
        this.loading = false;
    };
    TrainingComponent.prototype.fetchNextTranslations = function () {
        var _this = this;
        this.loading = true;
        this.statisticsService.fetchNextStatistics(this.training.id)
            .subscribe(function (stats) {
            if (stats.length === 0) {
                _this.trainingService.closeTraining(_this.training).subscribe(function (t) {
                    _this.trainingFinish = t;
                    _this.loading = false;
                });
            }
            else {
                _this.loading = false;
                _this.stats = stats;
                _this.loadNextStatistics();
            }
        });
    };
    TrainingComponent.prototype.addRun = function (hit) {
        var _this = this;
        this.loading = true;
        this.statisticsService.addTranslationRun(this.training.id, this.currentStatistics.translation.id, { hit: hit ? 1 : 0, runAt: new Date(), directionTo: this.isCurrentDirectionTo })
            .subscribe(function () {
            _this.loadNextStatistics();
            _this.loading = false;
        });
    };
    TrainingComponent.prototype.loadNextStatistics = function () {
        if (this.stats.length === 0) {
            this.currentStatistics = null;
            this.fetchNextTranslations();
            return;
        }
        this.currentStatistics = this.stats.pop();
        this.guess = '';
        this.guessInput = true;
        if (this.training.configuration.direction === 'FROM') {
            this.isCurrentDirectionTo = false;
        }
        else if (this.training.configuration.direction === 'TO') {
            this.isCurrentDirectionTo = true;
        }
        else {
            this.isCurrentDirectionTo = !this.isCurrentDirectionTo;
        }
    };
    TrainingComponent.prototype.checkGuess = function () {
        if (this.loading) {
            return;
        }
        this.lockedGuess = this.guess;
        if (!this.guessInput) {
            this.addRun(this.isGuessCorrect);
        }
        else {
            this.guessInput = false;
            if (this.isCurrentDirectionTo) {
                this.isGuessCorrect =
                    this.guess === this.currentStatistics.translation.translatesTo[0].translation;
            }
            else {
                this.isGuessCorrect =
                    this.guess === this.currentStatistics.translation.translation;
            }
        }
    };
    Object.defineProperty(TrainingComponent.prototype, "fontClass", {
        get: function () {
            return this.currentStatistics.translation.translation.length < 10 ? 'font-big' : 'font-normal';
        },
        enumerable: true,
        configurable: true
    });
    TrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! ./training.component.html */ "./src/app/components/training/training/training.component.html"),
            styles: [__webpack_require__(/*! ./training.component.css */ "./src/app/components/training/training/training.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_training_training_service__WEBPACK_IMPORTED_MODULE_3__["TrainingService"],
            _services_training_translationstatistics_service__WEBPACK_IMPORTED_MODULE_4__["TranslationStatisticsService"]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/components/training/trainingconfig/staricon.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/training/trainingconfig/staricon.component.ts ***!
  \**************************************************************************/
/*! exports provided: StarIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarIconComponent", function() { return StarIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translation_model_chapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/translation/model/chapter */ "./src/app/services/translation/model/chapter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarIconComponent = /** @class */ (function () {
    function StarIconComponent() {
    }
    StarIconComponent_1 = StarIconComponent;
    StarIconComponent.getIconForScore = function (score) {
        if (score < 100) {
            return 'star0';
        }
        if (score < 200) {
            return 'star100';
        }
        if (score < 300) {
            return 'star200';
        }
        return 'star300';
    };
    StarIconComponent.getStarIcon = function (chapter, selectedDirection) {
        switch (selectedDirection) {
            case 'FROM': return StarIconComponent_1.getIconForScore(chapter.chapterStatistics.chapterScoreFrom);
            case 'TO': return StarIconComponent_1.getIconForScore(chapter.chapterStatistics.chapterScoreTo);
            default: return StarIconComponent_1.getIconForScore(chapter.chapterStatistics.chapterScoreFrom > chapter.chapterStatistics.chapterScoreTo ?
                chapter.chapterStatistics.chapterScoreTo : chapter.chapterStatistics.chapterScoreFrom);
        }
    };
    Object.defineProperty(StarIconComponent.prototype, "icon", {
        get: function () {
            return StarIconComponent_1.getStarIcon(this.chapter, this.direction);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _services_translation_model_chapter__WEBPACK_IMPORTED_MODULE_1__["Chapter"])
    ], StarIconComponent.prototype, "chapter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarIconComponent.prototype, "direction", void 0);
    StarIconComponent = StarIconComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-star-icon',
            template: "<img *ngIf=\"chapter.chapterStatistics\" src=\"assets/icons/{{icon}}.png\">"
        })
    ], StarIconComponent);
    return StarIconComponent;
    var StarIconComponent_1;
}());



/***/ }),

/***/ "./src/app/components/training/trainingconfig/trainingconfig.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/training/trainingconfig/trainingconfig.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chapter {\n  margin-right:5px;\n  padding: 2px;\n  color: white;\n  border-radius: 5px;\n  font-size:0.7em;\n  min-width: 100px;\n}\n\n.chapter.on {\n  background-color: #98ff98;\n  border: 1px solid #98ff98;\n  color: black;\n}\n\n.chapter.on:hover {\n  background-color: #ff99ba;\n  border: 1px solid #ff99ba;\n}\n\n.chapter.off {\n  background-color: #ff99ba;\n  border: 1px solid #ff99ba;\n}\n\n.chapter.off:hover {\n  background-color: #98ff98;\n  border: 1px solid #98ff98;\n  color: black;\n}\n"

/***/ }),

/***/ "./src/app/components/training/trainingconfig/trainingconfig.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/training/trainingconfig/trainingconfig.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2\">{{'translations.course' | translate}}</div>\n  <div class=\"col-lg-5 col-10\">\n    <div class=\"input-group\">\n      <select class=\"form-control\" [(ngModel)]=\"selectedCourse\">\n        <option *ngFor=\"let course of courses\" [ngValue]=\"course\">\n          {{course.name}} ({{'language.'+course.language | translate}})\n        </option>\n      </select>\n    </div>\n  </div>\n</div>\n<div class=\"row mt-1\" *ngIf=\"selectedCourse\">\n  <div class=\"col-2\">\n     Chapters\n  </div>\n  <div class=\"col\">\n    <button class=\"btn btn-outline-dark\"\n            *ngFor=\"let chapter of selectedCourse.chapters\"\n            (click)=\"chapter.toggle = !chapter.toggle\"\n            [ngClass]=\"{'active':chapter.toggle}\">\n      {{chapter.name}} <app-star-icon [chapter]=\"chapter\" [direction]=\"selectedDirection\"></app-star-icon>\n    </button>\n  </div>\n</div>\n\n<div class=\"row mt-1\" *ngIf=\"selectedCourse\">\n  <div class=\"col-2\">\n    Tags\n  </div>\n  <div class=\"col\">\n    <div class=\"btn-group\" role=\"group\">\n      <button class=\"btn btn-outline-dark\"\n              *ngFor=\"let tag of tags\"\n              (click)=\"tag.toggle = !tag.toggle\"\n              [ngClass]=\"{'active':tag.toggle}\">\n        {{tag.name}}\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row mt-1\" *ngIf=\"selectedCourse\">\n  <div class=\"col-2\">\n    Direction\n  </div>\n  <div class=\"col\">\n    <div class=\"btn-group\" role=\"group\">\n      <button class=\"btn btn-outline-dark material-icons\"\n              *ngFor=\"let direction of directionOptions\"\n              (click)=\"selectedDirection = direction\"\n              [ngClass]=\"{'active':selectedDirection == direction}\">\n         {{getDirectionImage(direction)}}\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row mt-2\" *ngIf=\"selectedCourse\">\n  <div class=\"col-2\">\n    Limit\n  </div>\n  <div class=\"col\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"btn-group\" role=\"group\">\n          <button class=\"btn btn-outline-dark\"\n                  [ngClass]=\"{'active':!iterationMode}\"\n                  (click)=\"iterationMode = false\">\n             SkillLevel\n          </button>\n          <button class=\"btn btn-outline-dark\"\n                  [ngClass]=\"{'active':iterationMode}\"\n                  (click)=\"iterationMode = true\">\n            Iteration\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-1\">\n      <div class=\"col\">\n        <div class=\"btn-group\" role=\"group\">\n          <button class=\"btn btn-outline-dark\"\n                  *ngFor=\"let limit of limitOptions\"\n                  (click)=\"selectedLimit = limit\"\n                  [ngClass]=\"{'active':selectedLimit == limit}\">\n            {{limit}}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row mt-3\" *ngIf=\"selectedCourse\">\n  <div class=\"col offset-2\">\n      <button class=\"btn btn-outline-dark\" (click)=\"startTraining()\" [disabled]=\"loading\">Start Training...</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/training/trainingconfig/trainingconfig.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/training/trainingconfig/trainingconfig.component.ts ***!
  \********************************************************************************/
/*! exports provided: TrainingconfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingconfigComponent", function() { return TrainingconfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_translation_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/translation/translation.service */ "./src/app/services/translation/translation.service.ts");
/* harmony import */ var _services_training_training_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/training/training.service */ "./src/app/services/training/training.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrainingconfigComponent = /** @class */ (function () {
    function TrainingconfigComponent(userService, translationService, trainingService, location, router) {
        this.userService = userService;
        this.translationService = translationService;
        this.trainingService = trainingService;
        this.location = location;
        this.router = router;
        this.iterationMode = true;
        this.limitOptions = [1, 2, 3, 4];
        this.selectedLimit = 1;
        this.selectedDirection = 'TO';
        this.directionOptions = ['FROM', 'BOTH', 'TO'];
        this.loading = false;
    }
    TrainingconfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedInUser().subscribe(function (u) {
            _this.user = u;
            _this.translationService.getCourseSubscription().subscribe(function (c) { return _this.courses = c; });
            _this.translationService.subscribeTranslationTags().subscribe(function (t) { return _this.tags = t; });
            _this.translationService.updateCourseList();
            _this.translationService.listTranslationTags().subscribe();
        });
    };
    TrainingconfigComponent.prototype.startTraining = function () {
        var _this = this;
        this.loading = true;
        this.trainingService
            .addTraining({
            course: this.selectedCourse,
            chapters: this.selectedCourse.chapters.filter(function (c) { return c.toggle; }),
            direction: this.selectedDirection,
            iterationMode: this.iterationMode,
            iterationsLimit: this.iterationMode ? this.selectedLimit : 0,
            skillLevelLimit: this.iterationMode ? 0 : this.selectedLimit,
            toLanguage: this.user.language,
            tags: this.tags.filter(function (t) { return t.toggle; })
        })
            .subscribe(function (training) {
            _this.loading = false;
            _this.router.navigateByUrl('training/' + training.id);
        }, function () { _this.loading = false; });
    };
    TrainingconfigComponent.prototype.getDirectionImage = function (direction) {
        switch (direction) {
            case 'FROM': return 'arrow_back';
            case 'TO': return 'arrow_forward';
            default: return 'swap_horiz';
        }
    };
    TrainingconfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainingconfig',
            template: __webpack_require__(/*! ./trainingconfig.component.html */ "./src/app/components/training/trainingconfig/trainingconfig.component.html"),
            styles: [__webpack_require__(/*! ./trainingconfig.component.css */ "./src/app/components/training/trainingconfig/trainingconfig.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_translation_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"],
            _services_training_training_service__WEBPACK_IMPORTED_MODULE_3__["TrainingService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TrainingconfigComponent);
    return TrainingconfigComponent;
}());



/***/ }),

/***/ "./src/app/components/training/trainingresult/aggregatedTrainingResult.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/training/trainingresult/aggregatedTrainingResult.ts ***!
  \********************************************************************************/
/*! exports provided: AggregatedTrainingResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregatedTrainingResult", function() { return AggregatedTrainingResult; });
var AggregatedTrainingResult = /** @class */ (function () {
    function AggregatedTrainingResult() {
    }
    AggregatedTrainingResult.convertHitScoreToClass = function (hitScore) {
        if (hitScore < 20) {
            return 'danger';
        }
        if (hitScore < 50) {
            return 'warning';
        }
        if (hitScore < 70) {
            return 'info';
        }
        return 'success';
    };
    AggregatedTrainingResult.convertScoreToClass = function (score) {
        if (score < 200) {
            return 'danger';
        }
        if (score < 300) {
            return 'warning';
        }
        if (score < 400) {
            return 'info';
        }
        return 'success';
    };
    return AggregatedTrainingResult;
}());



/***/ }),

/***/ "./src/app/components/training/trainingresult/trainingresult.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/training/trainingresult/trainingresult.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/training/trainingresult/trainingresult.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/training/trainingresult/trainingresult.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\n  <div class=\"col-6\" [ngClass]=\"result.hitScoreClass\">\n    <progressbar [value]=\"result.hitScore\"\n                 [type]=\"result.hitScoreClass\"\n                 [animate]=\"true\">{{result.hitScore}}% Hit</progressbar>\n  </div>\n</div>\n<div class=\"row mt-2\">\n  <div class=\"col-6\">\n    <progressbar *ngIf=\"direction =='FROM' || direction == 'BOTH'\"\n                 [max]=\"400\"\n                 [value]=\"result.skillScoreFrom\"\n                 [animate]=\"true\">\n      {{result.skillScoreFrom}} Skill</progressbar>\n  </div>\n</div>\n<div class=\"row mt-2\">\n  <div class=\"col-6\">\n    <progressbar *ngIf=\"direction =='TO' || direction == 'BOTH'\"\n                 [max]=\"400\"\n                 [value]=\"result.skillScoreTo\"\n                 [animate]=\"true\">{{result.skillScoreTo}} Skill</progressbar>\n  </div>\n</div>\n<div class=\"row mt-2\">\n  <div class=\"col-2\">Words</div>\n  <div class=\"col-2\">\n    {{result.runCount}}\n  </div>\n</div>\n<div class=\"row mt-2\">\n  <div class=\"col\">\n      <button class=\"btn btn-outline-dark material-icons\" routerLink=\"/home\">chevron_left</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/training/trainingresult/trainingresult.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/training/trainingresult/trainingresult.component.ts ***!
  \********************************************************************************/
/*! exports provided: TrainingresultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingresultComponent", function() { return TrainingresultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aggregatedTrainingResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aggregatedTrainingResult */ "./src/app/components/training/trainingresult/aggregatedTrainingResult.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_training_model_trainingresult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/training/model/trainingresult */ "./src/app/services/training/model/trainingresult.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrainingresultComponent = /** @class */ (function () {
    function TrainingresultComponent() {
    }
    TrainingresultComponent.prototype.ngOnChanges = function () {
        this.result = this.createTrainingComponentResult(this.startResult, this.finishResult, this.direction);
    };
    TrainingresultComponent.prototype.createTrainingComponentResult = function (startResult, finishResult, direction) {
        var result = new _aggregatedTrainingResult__WEBPACK_IMPORTED_MODULE_1__["AggregatedTrainingResult"]();
        var hitScore = finishResult.hitScore;
        result.hitScore = 0;
        result.hitScoreClass = 'danger';
        // animate the hit score
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(hitScore).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000))
            .subscribe(function (score) {
            result.hitScore = score > 0 ? score : 0;
            result.hitScoreClass = _aggregatedTrainingResult__WEBPACK_IMPORTED_MODULE_1__["AggregatedTrainingResult"].convertHitScoreToClass(result.hitScore);
        });
        var skillScoreFrom = finishResult.skillScoreFrom;
        var skillScoreTo = finishResult.skillScoreTo;
        result.skillScoreTo = startResult.skillScoreTo;
        result.skillScoreFrom = startResult.skillScoreFrom;
        result.skillScoreChangeFrom = 0;
        result.skillScoreChangeTo = 0;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(skillScoreFrom).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000)).subscribe(function (score) {
            result.skillScoreFrom = score;
            result.skillScoreFromClass = _aggregatedTrainingResult__WEBPACK_IMPORTED_MODULE_1__["AggregatedTrainingResult"].convertScoreToClass(score);
            if (direction === 'FROM' ||
                direction === 'BOTH') {
                result.skillScoreChangeFrom = score - startResult.skillScoreFrom;
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(skillScoreTo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000)).subscribe(function (score) {
            result.skillScoreTo = score;
            result.skillScoreToClass = _aggregatedTrainingResult__WEBPACK_IMPORTED_MODULE_1__["AggregatedTrainingResult"].convertScoreToClass(score);
            if (direction === 'TO' ||
                direction === 'BOTH') {
                result.skillScoreChangeTo = score - startResult.skillScoreTo;
            }
        });
        result.runCount = finishResult.runCount;
        return result;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('finishResult'),
        __metadata("design:type", _services_training_model_trainingresult__WEBPACK_IMPORTED_MODULE_4__["TrainingResult"])
    ], TrainingresultComponent.prototype, "finishResult", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('startResult'),
        __metadata("design:type", _services_training_model_trainingresult__WEBPACK_IMPORTED_MODULE_4__["TrainingResult"])
    ], TrainingresultComponent.prototype, "startResult", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('direction'),
        __metadata("design:type", String)
    ], TrainingresultComponent.prototype, "direction", void 0);
    TrainingresultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainingresult',
            template: __webpack_require__(/*! ./trainingresult.component.html */ "./src/app/components/training/trainingresult/trainingresult.component.html"),
            styles: [__webpack_require__(/*! ./trainingresult.component.css */ "./src/app/components/training/trainingresult/trainingresult.component.css")],
            animations: [
                // animation triggers go here
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('progress', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                        width: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                        width: '100%'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('start => end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('1s'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingresultComponent);
    return TrainingresultComponent;
}());



/***/ }),

/***/ "./src/app/components/translation/course/course.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/translation/course/course.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/translation/course/course.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/translation/course/course.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"course\" class=\"row\">\n  <div class=\"col\">\n    <div class=\"row\">\n      <div class=\"col\">\n        Course:\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"course.name\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n       Language:\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <select class=\"form-control\" [(ngModel)]=\"course.language\">\n          <option *ngFor=\"let language of languages\" [value]=\"language\">{{ 'language.'+language | translate}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        Chapters:\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n         <a class=\"btn btn-outline-light material-icons\" (click)=\"addChapter()\">add</a>\n      </div>\n    </div>\n    <div *ngFor=\"let chapter of course.chapters\" class=\"row\">\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"chapter.name\">\n      </div>\n      <div class=\"col\">\n        <div class=\"btn-group btn-group-lg\">\n          <a class=\"btn btn-outline-light material-icons\" (click)=\"moveChapterUp(chapter)\">arrow_upward</a>\n          <a class=\"btn btn-outline-light material-icons\" (click)=\"removeChapter(chapter)\">cancel</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-5\">\n      <div class=\"col\">\n        <div class=\"btn-group btn-group-lg\">\n          <a class=\"btn btn-lg btn-outline-info material-icons\" routerLink=\"/translations\">chevron_left</a>\n          <button [disabled]=\"saving\" class=\"btn btn-lg btn-outline-info\" (click)=\"save()\">Save</button>\n          <button [disabled]=\"saving\" class=\"btn btn-lg btn-outline-info material-icons\" (click)=\"delete()\">delete_forever</button>\n        </div>\n      </div>\n      <div class=\"col\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/translation/course/course.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/translation/course/course.component.ts ***!
  \*******************************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_translation_model_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/translation/model/course */ "./src/app/services/translation/model/course.ts");
/* harmony import */ var _services_translation_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/translation/translation.service */ "./src/app/services/translation/translation.service.ts");
/* harmony import */ var _services_noty_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/noty.service */ "./src/app/services/noty.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseComponent = /** @class */ (function () {
    function CourseComponent(route, location, translationService, notyService) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.translationService = translationService;
        this.notyService = notyService;
        this.saving = false;
        this.loading = false;
        translationService.getLoadingListener().subscribe(function (loading) { return _this.loading = loading; });
    }
    CourseComponent_1 = CourseComponent;
    CourseComponent.updateChapterIndex = function (chapters) {
        chapters.forEach(function (chapter, index) {
            chapter.index = index;
        });
    };
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languages = this.translationService.listLanguages();
        this.route.paramMap.subscribe(function (params) {
            if (params.get('id') === 'new') {
                _this.course = new _services_translation_model_course__WEBPACK_IMPORTED_MODULE_3__["Course"]();
                _this.course.chapters = [];
            }
            else {
                var id = +_this.route.snapshot.paramMap.get('id');
                _this.translationService.getCourse(id).subscribe(function (course) { return _this.course = course; });
            }
        });
    };
    CourseComponent.prototype.save = function () {
        var _this = this;
        CourseComponent_1.updateChapterIndex(this.course.chapters);
        if (this.course.id) {
            this.translationService.updateCourse(this.course).subscribe(function () {
                _this.notyService.addSuccess('Course updated');
                _this.translationService.updateCourseList();
            });
        }
        else {
            this.saving = true;
            this.translationService.addCourse(this.course).subscribe(function (course) {
                _this.saving = false;
                if (course) {
                    _this.course = course;
                    _this.notyService.addSuccess('New Course added');
                    _this.translationService.updateCourseList();
                }
            });
        }
    };
    CourseComponent.prototype.addChapter = function () {
        this.course.chapters.push({});
    };
    CourseComponent.prototype.removeChapter = function (chapter) {
        var _this = this;
        this.course.chapters.forEach(function (value, index) {
            if (value === chapter) {
                _this.course.chapters.splice(index, 1);
            }
        });
    };
    CourseComponent.prototype.moveChapterUp = function (chapter) {
        var idx = this.course.chapters.indexOf(chapter);
        if (idx <= 0) {
            return;
        }
        this.course.chapters.splice(idx - 1, 0, chapter);
        this.course.chapters.splice(idx + 1, 1);
    };
    CourseComponent.prototype.delete = function () {
        var _this = this;
        this.saving = true;
        this.translationService.deleteCourse(this.course.id).subscribe(function () { return _this.location.back(); });
    };
    CourseComponent = CourseComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/components/translation/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/components/translation/course/course.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_translation_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"],
            _services_noty_service__WEBPACK_IMPORTED_MODULE_5__["NotyService"]])
    ], CourseComponent);
    return CourseComponent;
    var CourseComponent_1;
}());



/***/ }),

/***/ "./src/app/components/translation/coursepicker/coursepicker.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/translation/coursepicker/coursepicker.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/translation/coursepicker/coursepicker.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/translation/coursepicker/coursepicker.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2\">{{'translations.course' | translate}}</div>\n  <div class=\"col-lg-5 col-10\">\n    <div class=\"input-group\">\n      <select class=\"form-control\" [(ngModel)]=\"coursePick.selectedCourse\" (change)=\"changeCourse()\">\n        <option *ngFor=\"let course of courses\" [ngValue]=\"course\">\n          {{course.name}} ({{'language.'+course.language | translate}})\n        </option>\n      </select>\n      <div class=\"input-group-append\">\n        <a *ngIf=\"coursePick.selectedCourse\" class=\"material-icons btn btn-outline-info\" routerLink=\"/course/{{coursePick.selectedCourse.id}}\">create</a>\n        <a class=\"material-icons btn btn-outline-info\" routerLink=\"/course/new\">add</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row mt-2\">\n  <div class=\"col-2\">{{'translations.chapter' | translate}}</div>\n  <div class=\"col-lg-5 col-10\">\n    <select *ngIf=\"coursePick.selectedCourse\" class=\"form-control\" [(ngModel)]=\"coursePick.selectedChapter\" (change)=\"refreshChapter()\">\n      <option *ngFor=\"let chapter of coursePick.selectedCourse.chapters\" [ngValue]=\"chapter\">{{chapter.name}}</option>\n    </select>\n  </div>\n</div>\n<div class=\"row mt-2\">\n  <div class=\"col-2\">{{'translations.language' | translate}}</div>\n  <div class=\"col-lg-5 col-10\">\n    <select class=\"form-control\" [(ngModel)]=\"coursePick.selectedLanguage\">\n      <option *ngFor=\"let language of languages\" [value]=\"language\">{{ 'language.'+language | translate}}</option>\n    </select>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/translation/coursepicker/coursepicker.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/translation/coursepicker/coursepicker.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CoursepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursepickerComponent", function() { return CoursepickerComponent; });
/* harmony import */ var _services_translation_model_coursepick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/translation/model/coursepick */ "./src/app/services/translation/model/coursepick.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_translation_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/translation/translation.service */ "./src/app/services/translation/translation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoursepickerComponent = /** @class */ (function () {
    function CoursepickerComponent(userService, translationService) {
        this.userService = userService;
        this.translationService = translationService;
    }
    CoursepickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedInUser().subscribe(function (u) {
            _this.user = u;
            _this.subscribeCourseUpdates();
            _this.translationService.updateCourseList();
        });
        this.languages = this.translationService.listLanguages();
    };
    CoursepickerComponent.prototype.subscribeCourseUpdates = function () {
        var _this = this;
        this.translationService.getCourseSubscription().subscribe(function (courses) { return _this.courses = courses; });
    };
    CoursepickerComponent.prototype.changeCourse = function () {
        if (this.coursePick.selectedCourse.chapters.length > 0) {
            this.coursePick.selectedChapter = this.coursePick.selectedCourse.chapters[0];
            this.refreshChapter();
        }
    };
    CoursepickerComponent.prototype.refreshChapter = function () {
        var _this = this;
        this.translationService.getChapter(this.coursePick.selectedChapter.id).subscribe(function (chapter) {
            // replace with refreshed chapter
            var idx = _this.coursePick.selectedCourse.chapters
                .findIndex(function (c) { return c === _this.coursePick.selectedChapter; });
            _this.coursePick.selectedCourse.chapters[idx] = chapter;
            _this.coursePick.selectedChapter = chapter;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('coursePick'),
        __metadata("design:type", _services_translation_model_coursepick__WEBPACK_IMPORTED_MODULE_0__["CoursePick"])
    ], CoursepickerComponent.prototype, "coursePick", void 0);
    CoursepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coursepicker',
            template: __webpack_require__(/*! ./coursepicker.component.html */ "./src/app/components/translation/coursepicker/coursepicker.component.html"),
            styles: [__webpack_require__(/*! ./coursepicker.component.css */ "./src/app/components/translation/coursepicker/coursepicker.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_translation_translation_service__WEBPACK_IMPORTED_MODULE_3__["TranslationService"]])
    ], CoursepickerComponent);
    return CoursepickerComponent;
}());



/***/ }),

/***/ "./src/app/components/translation/home/home.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/translation/home/home.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/translation/home/home.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/translation/home/home.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <button class=\"btn btn-outline-dark\" routerLink=\"/config\">New Training...</button>\n  </div>\n</div>\n<div class=\"row mt-1\">\n  <div class=\"col\">\n    <table class=\"table\">\n      <thead class=\"thead-light\">\n      <tr>\n        <th>When?</th>\n        <th>What?</th>\n        <th>Chapters</th>\n        <th>Tags</th>\n        <th></th>\n      </tr>\n      </thead>\n       <tbody class=\"table-hover\">\n          <tr *ngFor=\"let training of trainings\">\n            <td>{{training.startedAt | date:'EEEE, MMMM d'}}</td>\n            <td>Training for {{'language.'+training.configuration.course.language | translate}}</td>\n            <td><button class=\"tag\" *ngFor=\"let chapter of training.configuration.chapters\">\n              {{chapter.name}}\n            </button></td>\n            <td> <button class=\"tag\" *ngFor=\"let tag of training.configuration.tags\">\n               {{getTagName(tag)}}\n            </button></td>\n            <td>\n              <div class=\"btn-group\">\n                <button class=\"btn btn-outline-dark material-icons\"\n                        [routerLink]=\"'/training/'+training.id\"\n                        *ngIf=\"!training.endedAt\">play_circle_outline</button>\n                <button class=\"btn btn-outline-dark material-icons\"\n                        [routerLink]=\"'/training/'+training.id\"\n                        *ngIf=\"training.endedAt\">{{getStatImage(training)}}</button>\n                <button class=\"btn btn-outline-dark material-icons\"\n                        (click)=\"closeTraining(training)\"\n                        *ngIf=\"!training.endedAt\">stop</button>\n                <button class=\"btn btn-outline-dark material-icons\"\n                        (click)=\"replayTraining(training)\"\n                        *ngIf=\"training.endedAt\">replay</button>\n              </div>\n            </td>\n          </tr>\n       </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/translation/home/home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/translation/home/home.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_training_training_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/training/training.service */ "./src/app/services/training/training.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, trainingService) {
        this.userService = userService;
        this.trainingService = trainingService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedInUser().subscribe(function (user) {
            _this.user = user;
            _this.trainingService.getTrainingSubscription().subscribe(function (t) { return _this.trainings = t; });
            _this.trainingService.updateTrainingList();
        });
    };
    HomeComponent.prototype.closeTraining = function (training) {
        this.trainingService.closeTraining(training);
    };
    HomeComponent.prototype.replayTraining = function (training) {
        this.trainingService.addTraining(training.configuration).subscribe();
    };
    HomeComponent.prototype.getTagName = function (tag) {
        if (tag.name === 'EMPTY_TAG') {
            return '-';
        }
        return tag.name;
    };
    HomeComponent.prototype.getStatImage = function (training) {
        if (training.configuration.direction === 'FROM') {
            return 'filter_' + training.result.minSkillFrom;
        }
        if (training.configuration.direction === 'TO') {
            return 'filter_' + training.result.minSkillTo;
        }
        return 'filter_' + Math.min(training.result.minSkillFrom, training.result.minSkillTo);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/translation/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/translation/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_training_training_service__WEBPACK_IMPORTED_MODULE_2__["TrainingService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/translation/translationentry/translationentry.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/translation/translationentry/translationentry.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td .tag {\n  margin-right:5px;\n  padding: 2px;\n  color: white;\n  background-color: lightblue;\n  border: 1px solid lightblue;\n  border-radius: 5px;\n  font-size:0.7em;\n}\n\ntd .tag:hover {\n  background-color: #50acca;\n}\n\ntd .tag i {\n  display:none;\n}\n\ntd .tag:hover i {\n  display:inline;\n}\n\ntd.translation {\n  width: 15%;\n}\n\ntd.translates {\n  width: 15%;\n}\n\ntd.hint {\n  width: 15%;\n}\n\ntd.phrase {\n  width: 20%;\n  max-width: 300px;\n}\n\ntd.phrase input:focus {\n\n}\n\ntd.tag {\n  width: 15%;\n}\n\ntd.actions {\n  width: 15%;\n}\n"

/***/ }),

/***/ "./src/app/components/translation/translationentry/translationentry.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/translation/translationentry/translationentry.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td *ngIf=\"translation.edit\" class=\"translation\">\n  <input type=\"text\" class=\"form-control form-control-sm\" name=\"translation\" [(ngModel)]=\"translation.translation\">\n</td>\n<td *ngIf=\"translation.edit\" class=\"translates\">\n  <div *ngFor=\"let translates of translation.translatesTo | filterLanguage:selectedLanguage\" class=\"row\">\n    <div class=\"col\">\n      <input type=\"text\" class=\"form-control form-control-sm\" name=\"translatesTo\" [(ngModel)]=\"translates.translation\">\n    </div>\n  </div>\n</td>\n<td *ngIf=\"translation.edit\" class=\"hint\">\n  <input type=\"text\" class=\"form-control form-control-sm\" name=\"hint\" [(ngModel)]=\"translation.hint\">\n</td>\n<td *ngIf=\"translation.edit\" class=\"phrase\">\n  <div class=\"row\">\n    <div class=\"col\">\n    <div class=\"input-group input-group-sm\">\n      <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"phraseInput\">\n      <div class=\"input-group-append\">\n        <button class=\"material-icons btn btn-outline-dark\" (click)=\"addToPhrases()\">add</button>\n      </div>\n    </div>\n    </div>\n  </div>\n  <div class=\"row mt-1\" *ngFor=\"let phrase of translation.phrases\">\n    <div class=\"col\">\n      <button class=\"tag\" (click)=\"deletePhrase(phrase)\">{{phrase.translation}}\n        <i class=\"material-icons\">highlight_off</i>\n      </button>\n    </div>\n  </div>\n</td>\n<td *ngIf=\"translation.edit\" class=\"tag\">\n  <div class=\"row\">\n  <div class=\"input-group input-group-sm\">\n    <input type=\"text\" class=\"form-control form-control-sm\" name=\"tag\"\n           [(ngModel)]=\"tagInput\"\n           [typeahead]=\"getAvailableTags()\"\n           [typeaheadMinLength]=\"0\"\n           (typeaheadOnSelect)=\"addToTags($event.value)\"\n           typeaheadOptionField=\"name\">\n    <div class=\"input-group-append\">\n      <button class=\"material-icons btn btn-outline-dark\" (click)=\"addToTags(tagInput)\">add</button>\n    </div>\n  </div>\n  </div>\n  <div class=\"row mt-1\">\n    <button *ngFor=\"let tag of translation.tags\" class=\"tag\" (click)=\"deleteTag(tag)\">{{tag.name}} <i\n      class=\"material-icons\">highlight_off</i></button>\n  </div>\n</td>\n<td *ngIf=\"translation.edit\" class=\"actions\">\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"material-icons btn btn-outline-info btn-sm\" (click)=\"saveTranslation()\">done</button>\n    <button class=\"material-icons btn btn-outline-info btn-sm\" (click)=\"cancelEdit()\">clear</button>\n  </div>\n</td>\n\n<td *ngIf=\"!translation.edit\">\n  {{translation.translation}}\n</td>\n<td *ngIf=\"!translation.edit\">\n  <span *ngFor=\"let translatesTo of translation.translatesTo | filterLanguage:selectedLanguage\">{{translatesTo.translation}}</span>\n</td>\n<td *ngIf=\"!translation.edit\">\n  {{translation.hint}}\n</td>\n<td *ngIf=\"!translation.edit\">\n  <button *ngFor=\"let phrase of translation.phrases\" class=\"tag\">{{phrase.translation}}</button>\n</td>\n<td *ngIf=\"!translation.edit\">\n  <button *ngFor=\"let tag of translation.tags\" class=\"tag\">{{tag.name}}</button>\n</td>\n<td *ngIf=\"!translation.edit\">\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"material-icons btn btn-outline-info btn-sm\" (click)=\"editTranslation(translation)\">create</button>\n    <button class=\"material-icons btn btn-outline-info btn-sm\" (click)=\"removeTranslation()\">clear</button>\n  </div>\n</td>\n"

/***/ }),

/***/ "./src/app/components/translation/translationentry/translationentry.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/translation/translationentry/translationentry.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TranslationentryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationentryComponent", function() { return TranslationentryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translation_model_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/translation/model/translation */ "./src/app/services/translation/model/translation.ts");
/* harmony import */ var _services_translation_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/translation/translation.service */ "./src/app/services/translation/translation.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TranslationentryComponent = /** @class */ (function () {
    function TranslationentryComponent(userService, translationService) {
        this.userService = userService;
        this.translationService = translationService;
        this.allTags = [];
        this.finishedEditEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeTranslationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TranslationentryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedInUser().subscribe(function (u) { return _this.user = u; });
    };
    TranslationentryComponent.prototype.getAvailableTags = function () {
        var _this = this;
        return this.allTags.filter(function (t) { return !_this.translation.tags.find(function (tag) { return tag.name === t.name; }); });
    };
    TranslationentryComponent.prototype.addToTags = function (tagName) {
        if (this.translation.tags.find(function (t) { return t.name === tagName; })) {
            return;
        }
        var addedTag = this.allTags.find(function (t) { return t.name === tagName; });
        if (!addedTag) {
            this.createAndAddTranslationTag(tagName);
        }
        else {
            this.translation.tags.push(addedTag);
            this.tagInput = '';
        }
    };
    TranslationentryComponent.prototype.createAndAddTranslationTag = function (tagName) {
        var _this = this;
        this.translationService.addTranslationTag({ name: tagName, createdBy: this.user }).subscribe(function (tag) {
            _this.allTags.push(tag);
            _this.translation.tags.push(tag);
            _this.tagInput = '';
        });
    };
    TranslationentryComponent.prototype.addToPhrases = function () {
        this.translation.phrases.push({
            translation: this.phraseInput,
            language: this.translation.language
        });
        this.phraseInput = '';
    };
    TranslationentryComponent.prototype.deletePhrase = function (phrase) {
        var idx = this.translation.phrases.indexOf(phrase);
        this.translation.phrases.splice(idx, 1);
    };
    TranslationentryComponent.prototype.deleteTag = function (tag) {
        var idx = this.translation.tags.indexOf(tag);
        this.translation.tags.splice(idx, 1);
    };
    TranslationentryComponent.prototype.saveTranslation = function () {
        this.finishedEditEvent.emit(true);
    };
    TranslationentryComponent.prototype.cancelEdit = function () {
        this.finishedEditEvent.emit(false);
    };
    TranslationentryComponent.prototype.removeTranslation = function () {
        this.removeTranslationEvent.emit(true);
    };
    TranslationentryComponent.prototype.editTranslation = function (translation) {
        var _this = this;
        this.refreshTags();
        translation.edit = true;
        // if there is no translatesTo with selected language then create one to allow edit
        if (!translation.translatesTo) {
            translation.translatesTo = [];
        }
        var idx = translation.translatesTo.findIndex(function (t) { return t.language === _this.selectedLanguage; });
        if (idx === -1) {
            translation.translatesTo.push({ language: this.selectedLanguage });
        }
    };
    TranslationentryComponent.prototype.refreshTags = function () {
        var _this = this;
        this.translationService.listTranslationTags().subscribe(function (tags) { return _this.allTags = tags; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('translation'),
        __metadata("design:type", _services_translation_model_translation__WEBPACK_IMPORTED_MODULE_1__["Translation"])
    ], TranslationentryComponent.prototype, "translation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('editMode'),
        __metadata("design:type", Boolean)
    ], TranslationentryComponent.prototype, "editMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('language'),
        __metadata("design:type", String)
    ], TranslationentryComponent.prototype, "selectedLanguage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TranslationentryComponent.prototype, "finishedEditEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TranslationentryComponent.prototype, "removeTranslationEvent", void 0);
    TranslationentryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-translationentry]',
            template: __webpack_require__(/*! ./translationentry.component.html */ "./src/app/components/translation/translationentry/translationentry.component.html"),
            styles: [__webpack_require__(/*! ./translationentry.component.css */ "./src/app/components/translation/translationentry/translationentry.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_translation_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"]])
    ], TranslationentryComponent);
    return TranslationentryComponent;
}());



/***/ }),

/***/ "./src/app/components/translation/translations/filter-language.pipe.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/translation/translations/filter-language.pipe.ts ***!
  \*****************************************************************************/
/*! exports provided: FilterLanguagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterLanguagePipe", function() { return FilterLanguagePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterLanguagePipe = /** @class */ (function () {
    function FilterLanguagePipe() {
    }
    FilterLanguagePipe.prototype.transform = function (translations, filter) {
        if (!translations || !filter) {
            return translations;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return translations.filter(function (t) { return t.language === filter; });
    };
    FilterLanguagePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterLanguage',
            pure: false
        })
    ], FilterLanguagePipe);
    return FilterLanguagePipe;
}());



/***/ }),

/***/ "./src/app/components/translation/translations/translations.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/translation/translations/translations.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".translation th {\n   font-size: 0.7em;\n}\n"

/***/ }),

/***/ "./src/app/components/translation/translations/translations.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/translation/translations/translations.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-coursepicker [coursePick]=\"coursePick\"></app-coursepicker>\n<div class=\"row mt-2\" *ngIf=\"coursePick.selectedChapter && coursePick.selectedLanguage\">\n  <div class=\"col\"><button (click)=\"add()\">Add</button></div>\n</div>\n<div class=\"row mt-2\" *ngIf=\"coursePick.selectedChapter && coursePick.selectedLanguage\">\n  <table class=\"table translation\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th scope=\"col\" width=\"15%\">{{'translations.table.translation' | translate}}</th>\n        <th scope=\"col\" width=\"15%\">{{'translations.table.translates' | translate}}</th>\n        <th scope=\"col\" width=\"15%\">{{'translations.table.hint' | translate}}</th>\n        <th scope=\"col\" width=\"20%\">{{'translations.table.phrase' | translate}}</th>\n        <th scope=\"col\" width=\"15%\">{{'translations.table.tags' | translate}}</th>\n        <th scope=\"col\" width=\"15%\"></th>\n      </tr>\n    </thead>\n    <tbody class=\"table-hover\">\n    <tr app-translationentry\n        *ngFor=\"let translation of coursePick.selectedChapter.translations\"\n        [translation]=\"translation\"\n        [language]=\"coursePick.selectedLanguage\"\n        (finishedEditEvent)=\"finishedEdit($event,translation)\"\n        (removeTranslationEvent)=\"removeTranslation(translation)\"></tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/translation/translations/translations.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/translation/translations/translations.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TranslationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationsComponent", function() { return TranslationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_translation_model_translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/translation/model/translation */ "./src/app/services/translation/model/translation.ts");
/* harmony import */ var _services_translation_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/translation/translation.service */ "./src/app/services/translation/translation.service.ts");
/* harmony import */ var _services_translation_model_coursepick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/translation/model/coursepick */ "./src/app/services/translation/model/coursepick.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TranslationsComponent = /** @class */ (function () {
    function TranslationsComponent(userService, translationService) {
        this.userService = userService;
        this.translationService = translationService;
        this.coursePick = new _services_translation_model_coursepick__WEBPACK_IMPORTED_MODULE_4__["CoursePick"]();
    }
    TranslationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedInUser().subscribe(function (u) {
            _this.user = u;
            _this.coursePick.selectedLanguage = _this.user.language || 'ENGLISH';
        });
    };
    TranslationsComponent.prototype.add = function () {
        var t = new _services_translation_model_translation__WEBPACK_IMPORTED_MODULE_2__["Translation"]();
        t.edit = true;
        t.language = this.coursePick.selectedCourse.language;
        t.createdBy = this.user;
        t.translatesTo = [];
        t.translatesTo.push({ language: this.coursePick.selectedLanguage, createdBy: this.user });
        t.phrases = [];
        t.tags = [];
        this.coursePick.selectedChapter.translations.push(t);
    };
    TranslationsComponent.prototype.save = function (translation) {
        var _this = this;
        if (translation.id) {
            this.translationService.updateTranslation(translation).subscribe(function () { return translation.edit = false; });
        }
        else {
            this.translationService.addTranslation(translation).subscribe(function (t) {
                translation.id = t.id;
                _this.translationService.updateChapter(_this.coursePick.selectedChapter).subscribe(function () { return translation.edit = false; });
            });
        }
    };
    TranslationsComponent.prototype.finishedEdit = function (save, translation) {
        var _this = this;
        if (save) {
            this.save(translation);
        }
        else {
            if (translation.id) {
                // do revert the values to old one
                this.translationService.getTranslation(translation.id).subscribe(function (oldTranslation) {
                    var idxTranslation = _this.coursePick.selectedChapter.translations.findIndex(function (t) { return t === translation; });
                    _this.coursePick.selectedChapter.translations[idxTranslation] = oldTranslation;
                });
            }
            else {
                this.removeTranslation(translation);
            }
        }
    };
    TranslationsComponent.prototype.removeTranslation = function (translation) {
        var idx = this.coursePick.selectedChapter.translations.findIndex(function (t) { return t === translation; });
        this.coursePick.selectedChapter.translations.splice(idx, 1);
        this.translationService.updateChapter(this.coursePick.selectedChapter).subscribe();
    };
    TranslationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-translations',
            template: __webpack_require__(/*! ./translations.component.html */ "./src/app/components/translation/translations/translations.component.html"),
            styles: [__webpack_require__(/*! ./translations.component.css */ "./src/app/components/translation/translations/translations.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_translation_translation_service__WEBPACK_IMPORTED_MODULE_3__["TranslationService"]])
    ], TranslationsComponent);
    return TranslationsComponent;
}());



/***/ }),

/***/ "./src/app/services/noty.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/noty.service.ts ***!
  \******************************************/
/*! exports provided: NotyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotyService", function() { return NotyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _noty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noty */ "./src/app/services/noty.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotyService = /** @class */ (function () {
    function NotyService() {
        this.notyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    NotyService.prototype.handleError = function (errorMessage, result) {
        var _this = this;
        // weird construction, the function needs to return a function, which is called when an error occurs
        // actual error object is passed to function below, but we ignore it ()
        return function () {
            _this.notyStream.next(new _noty__WEBPACK_IMPORTED_MODULE_1__["Noty"](errorMessage, _noty__WEBPACK_IMPORTED_MODULE_1__["NotyType"].ERROR));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    NotyService.prototype.addError = function (errorMessage) {
        this.notyStream.next(new _noty__WEBPACK_IMPORTED_MODULE_1__["Noty"](errorMessage, _noty__WEBPACK_IMPORTED_MODULE_1__["NotyType"].ERROR));
    };
    NotyService.prototype.addSuccess = function (successMessage) {
        this.notyStream.next(new _noty__WEBPACK_IMPORTED_MODULE_1__["Noty"](successMessage, _noty__WEBPACK_IMPORTED_MODULE_1__["NotyType"].INFO));
    };
    NotyService.prototype.getNotys = function () {
        return this.notyStream.asObservable();
    };
    NotyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NotyService);
    return NotyService;
}());



/***/ }),

/***/ "./src/app/services/noty.ts":
/*!**********************************!*\
  !*** ./src/app/services/noty.ts ***!
  \**********************************/
/*! exports provided: Noty, NotyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Noty", function() { return Noty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotyType", function() { return NotyType; });
var Noty = /** @class */ (function () {
    function Noty(message, type) {
        this.message = message;
        this.type = type;
        switch (type) {
            case NotyType.ERROR:
                this.cssClass = 'alert-danger';
                break;
            case NotyType.INFO:
                this.cssClass = 'alert-success';
                break;
            case NotyType.WARNING:
                this.cssClass = 'alert-warning';
                break;
        }
    }
    return Noty;
}());

var NotyType;
(function (NotyType) {
    NotyType[NotyType["ERROR"] = 0] = "ERROR";
    NotyType[NotyType["INFO"] = 1] = "INFO";
    NotyType[NotyType["WARNING"] = 2] = "WARNING";
})(NotyType || (NotyType = {}));


/***/ }),

/***/ "./src/app/services/training/model/trainingresult.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/training/model/trainingresult.ts ***!
  \***********************************************************/
/*! exports provided: TrainingResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingResult", function() { return TrainingResult; });
var TrainingResult = /** @class */ (function () {
    function TrainingResult() {
    }
    return TrainingResult;
}());



/***/ }),

/***/ "./src/app/services/training/training.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/training/training.service.ts ***!
  \*******************************************************/
/*! exports provided: TrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingService", function() { return TrainingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _noty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noty.service */ "./src/app/services/noty.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrainingService = /** @class */ (function () {
    function TrainingService(http, notyService) {
        this.http = http;
        this.notyService = notyService;
        this.trainingUrl = '/api/training';
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.trainings = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    TrainingService.prototype.getLoadingListener = function () {
        return this.loading.asObservable();
    };
    TrainingService.prototype.updateTrainingList = function () {
        var _this = this;
        this.http.get(this.trainingUrl + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.loading.next(true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not fetch Trainings', [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loading.next(false); })).subscribe(function (t) { return _this.trainings.next(t); });
    };
    TrainingService.prototype.getTrainingSubscription = function () {
        return this.trainings.asObservable();
    };
    TrainingService.prototype.addTraining = function (config) {
        var _this = this;
        // POST for adding entity to collection, it is NOT idempotent
        return this.http.post(this.trainingUrl + '/', config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.updateTrainingList(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not add Training', null)));
    };
    TrainingService.prototype.closeTraining = function (training) {
        var _this = this;
        return this.http.post(this.trainingUrl + '/' + training.id + '/close', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.updateTrainingList(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not close Training', null)));
    };
    TrainingService.listDirections = function () {
        return ['FROM', 'TO', 'BOTH'];
    };
    TrainingService.prototype.getTraining = function (trainingId) {
        return this.http.get(this.trainingUrl + '/' + trainingId);
    };
    TrainingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _noty_service__WEBPACK_IMPORTED_MODULE_2__["NotyService"]])
    ], TrainingService);
    return TrainingService;
}());



/***/ }),

/***/ "./src/app/services/training/translationstatistics.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/training/translationstatistics.service.ts ***!
  \********************************************************************/
/*! exports provided: TranslationStatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationStatisticsService", function() { return TranslationStatisticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _noty_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../noty.service */ "./src/app/services/noty.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TranslationStatisticsService = /** @class */ (function () {
    function TranslationStatisticsService(http, notyService) {
        this.http = http;
        this.notyService = notyService;
        this.statisticsUrl = '/api/statistics/translation';
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    TranslationStatisticsService.prototype.getLoadingListener = function () {
        return this.loading.asObservable();
    };
    TranslationStatisticsService.prototype.addTranslationRun = function (trainingId, translationId, run) {
        return this.http.post(this.statisticsUrl + '/' + trainingId + '/' + translationId, run).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not add Translation Run')));
    };
    TranslationStatisticsService.prototype.getTranslationStatistics = function (translationId) {
        return this.http.get(this.statisticsUrl + '/' + translationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not fetch Statistics')));
    };
    TranslationStatisticsService.prototype.fetchNextStatistics = function (trainingId) {
        return this.fetchNextStatisticsData(this.statisticsUrl + '/?trainingId=' + trainingId);
    };
    TranslationStatisticsService.prototype.listStatistics = function () {
        return this.fetchNextStatisticsData(this.statisticsUrl + '/');
    };
    TranslationStatisticsService.prototype.fetchNextStatisticsData = function (url) {
        var _this = this;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.loading.next(true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not fetch next Statistics', [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loading.next(false); }));
    };
    TranslationStatisticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _noty_service__WEBPACK_IMPORTED_MODULE_3__["NotyService"]])
    ], TranslationStatisticsService);
    return TranslationStatisticsService;
}());



/***/ }),

/***/ "./src/app/services/translation/model/chapter.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/translation/model/chapter.ts ***!
  \*******************************************************/
/*! exports provided: Chapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapter", function() { return Chapter; });
var Chapter = /** @class */ (function () {
    function Chapter() {
    }
    return Chapter;
}());



/***/ }),

/***/ "./src/app/services/translation/model/course.ts":
/*!******************************************************!*\
  !*** ./src/app/services/translation/model/course.ts ***!
  \******************************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/services/translation/model/coursepick.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/translation/model/coursepick.ts ***!
  \**********************************************************/
/*! exports provided: CoursePick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePick", function() { return CoursePick; });
var CoursePick = /** @class */ (function () {
    function CoursePick() {
    }
    return CoursePick;
}());



/***/ }),

/***/ "./src/app/services/translation/model/translation.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/translation/model/translation.ts ***!
  \***********************************************************/
/*! exports provided: Translation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Translation", function() { return Translation; });
var Translation = /** @class */ (function () {
    function Translation() {
    }
    return Translation;
}());



/***/ }),

/***/ "./src/app/services/translation/translation.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/translation/translation.service.ts ***!
  \*************************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _noty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noty.service */ "./src/app/services/noty.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TranslationService = /** @class */ (function () {
    function TranslationService(http, notyService) {
        this.http = http;
        this.notyService = notyService;
        this.courseUrl = '/api/course';
        this.chapterUrl = '/api/chapter';
        this.translationUrl = '/api/translation';
        this.translationTagUrl = '/api/tag';
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.courses = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tags = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    TranslationService.prototype.getLoadingListener = function () {
        return this.loading.asObservable();
    };
    TranslationService.prototype.updateCourseList = function () {
        var _this = this;
        this.http.get(this.courseUrl + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.loading.next(true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not fetch Courses', [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loading.next(false); })).subscribe(function (cs) { return _this.courses.next(cs); });
    };
    TranslationService.prototype.getCourseSubscription = function () {
        // we propagate the result to all who listen in
        return this.courses.asObservable();
    };
    TranslationService.prototype.addCourse = function (course) {
        // POST for adding entity to collection, it is NOT idempotent
        return this.http.post(this.courseUrl + '/', course).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not add Course')));
    };
    TranslationService.prototype.getCourse = function (id) {
        return this.http.get(this.courseUrl + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not find Course')));
    };
    TranslationService.prototype.deleteCourse = function (id) {
        return this.http.delete(this.courseUrl + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not delete Course')));
    };
    TranslationService.prototype.getTranslation = function (id) {
        return this.http.get(this.translationUrl + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not find Translation')));
    };
    TranslationService.prototype.updateCourse = function (course) {
        var _this = this;
        return this.http.put(this.courseUrl + '/' + course.id, course).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.loading.next(true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not update Course')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loading.next(false); }));
    };
    TranslationService.prototype.updateChapter = function (chapter) {
        return this.http.put(this.chapterUrl + '/' + chapter.id, chapter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not update Chapter')));
    };
    TranslationService.prototype.addTranslation = function (translation) {
        // POST for adding entity to collection, it is NOT idempotent
        return this.http.post(this.translationUrl + '/', translation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not add Translation')));
    };
    TranslationService.prototype.updateTranslation = function (translation) {
        return this.http.put(this.translationUrl + '/' + translation.id, translation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not update Translation')));
    };
    TranslationService.prototype.subscribeTranslationTags = function () {
        return this.tags.asObservable();
    };
    TranslationService.prototype.listTranslationTags = function () {
        var _this = this;
        return this.http.get(this.translationTagUrl + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (t) { return _this.tags.next(t); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not fetch Translationtags', [])));
    };
    TranslationService.prototype.addTranslationTag = function (tag) {
        return this.http.post(this.translationTagUrl + '/', tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not add Tag')));
    };
    TranslationService.prototype.listLanguages = function () {
        return ['JAPANESE_KANJI', 'JAPANESE_KANA', 'JAPANESE_ROMAJI', 'ENGLISH', 'SWEDISH', 'GERMAN', 'DUTCH'];
    };
    TranslationService.prototype.getChapter = function (id) {
        return this.http.get(this.chapterUrl + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.notyService.handleError('Could not find Chapter')));
    };
    TranslationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _noty_service__WEBPACK_IMPORTED_MODULE_2__["NotyService"]])
    ], TranslationService);
    return TranslationService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _noty_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noty.service */ "./src/app/services/noty.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, notyService) {
        var _this = this;
        this.http = http;
        this.notyService = notyService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.userUrl = 'api/user/';
        this.pendingUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        var url = "" + this.userUrl;
        this.http.get(url + 'current').subscribe(function (user) {
            _this.pendingUser.next(user);
        });
        this.pendingUser.asObservable().subscribe(function (user) { return _this.fetchedUser = user; });
    }
    UserService.prototype.getLoggedInUser = function () {
        if (this.fetchedUser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.fetchedUser);
        }
        return this.pendingUser.asObservable();
    };
    UserService.prototype.authenticate = function (username, password) {
        var _this = this;
        var url = "" + this.userUrl + username + "/authentication?password=" + password;
        this.http.get(url).subscribe(function (user) { return _this.pendingUser.next(user); }, function (error) {
            if (error.status === 401) {
                _this.notyService.addError('Could not login, incorrect username/password');
            }
            else if (error.status === 404) {
                _this.notyService.addError('Server is down, please try again later');
            }
            else {
                _this.notyService.addError('Authentication failed:' + error.statusText);
            }
        });
    };
    UserService.prototype.register = function (username, password) {
        var _this = this;
        var url = "" + this.userUrl;
        this.http.post(url, { username: username, password: password }, this.httpOptions).subscribe(function (user) { return _this.pendingUser.next(user); }, function (error) {
            if (error.status === 409) {
                _this.notyService.addError('User ' + username + ' is already registered, please use a different username');
            }
            else if (error.status === 404) {
                _this.notyService.addError('Server is down, please try again later');
            }
        });
    };
    UserService.prototype.update = function (user) {
        var _this = this;
        this.http.put(this.userUrl + user.id, user).subscribe(function () { return _this.notyService.addSuccess('Updated user profile'); }, function (error) { return _this.notyService.addError('Could not update user profile'); });
    };
    UserService.prototype.list = function () {
        return this.http.get(this.userUrl);
    };
    UserService.prototype.logout = function () {
        var _this = this;
        this.http.get(this.userUrl + 'logout').subscribe(function (user) { return _this.pendingUser.next(null); }, function (error) { return _this.pendingUser.next(null); });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _noty_service__WEBPACK_IMPORTED_MODULE_3__["NotyService"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! /Users/thorstenreis/IdeaProjects/irongrp/src/main/angular/mnemotica/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map