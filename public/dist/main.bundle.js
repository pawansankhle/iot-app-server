webpackJsonp([3],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts",
		1
	],
	"./shared/modules/device/device.module": [
		"../../../../../src/app/shared/modules/device/device.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'device', loadChildren: './shared/modules/device/device.module#DeviceModule' },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__shared_components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, {
                    enableTracing: false,
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet name=\"header\"></router-outlet>\n<mat-sidenav-container class=\"example-container\">\n        <app-loader></app-loader>\n\n        <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" >\n                <mat-toolbar>\n                        <span>iot-app</span>\n                        <div fxFelx></div>\n                        <!-- <app-network-indigator></app-network-indigator> -->\n                </mat-toolbar>\n                <router-outlet name=\"sidenav\"></router-outlet>\n        </mat-sidenav>\n\n        <mat-sidenav-content [ngClass]=\"{'mat-sidenav-content-login': !authSrv.isAuthenticated(), 'mat-sidenav-content-main': authSrv.isAuthenticated()}\">\n                <!-- <breadcrumbs></breadcrumbs> -->\n                <router-outlet></router-outlet>\n                <!--<footer><router-outlet name=\"footer\"></router-outlet></footer> -->\n        </mat-sidenav-content>\n</mat-sidenav-container>\n\n<!-- <mat-sidenav-container>\n        <mat-sidenav #sidenav mode=\"over\" [(opened)]=\"opened\">\n                <router-outlet name=\"sidenav\"></router-outlet>\n        </mat-sidenav>\n        \n        <div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" fxFlexFill>\n                        <header fxFlexFill>\n                                        <router-outlet name=\"header\"></router-outlet>\n                                </header>\n               <article fxFlex fxFlexFill>\n                <router-outlet></router-outlet>\n                </article>\n\n                <footer>\n                <router-outlet name=\"footer\"></router-outlet> \n                </footer>\n        </div>\n</mat-sidenav-container> -->\n              "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_sidenav_sidenav_service__ = __webpack_require__("../../../../../src/app/layout/sidenav/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_loader__ = __webpack_require__("../../../../../src/app/shared/modules/loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_webstorage__ = __webpack_require__("../../../../ng2-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_error_event_handler_service__ = __webpack_require__("../../../../../src/app/shared/services/error.event.handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_constants__ = __webpack_require__("../../../../../src/app/shared/constants/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = (function () {
    function AppComponent(navBarSrv, loaderSrv, translate, localStorage, errorHandlerSrv, route, authSrv) {
        this.loaderSrv = loaderSrv;
        this.translate = translate;
        this.localStorage = localStorage;
        this.errorHandlerSrv = errorHandlerSrv;
        this.route = route;
        this.authSrv = authSrv;
        this.navBarSrv = navBarSrv;
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(this.localStorage.retrieve('language') || 'en');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navBarSrv.setSidenav(this.sidenav);
        this.errorHandlerSrv.events.subscribe(function (event) {
            _this._errorHandler(event);
        });
        this.navigateUser();
        this.subscription = this.authSrv.authenticateState$.subscribe(function (res) {
            _this.navigateUser();
        });
    };
    AppComponent.prototype.navigateUser = function () {
        if (this.authSrv.isAuthenticated()) {
            this.route.navigate(['/device']);
        }
        else {
            this.route.navigate(['/auth/login']);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent.prototype._errorHandler = function (ev) {
        console.log(ev);
        switch (ev.type) {
            case __WEBPACK_IMPORTED_MODULE_7__shared_constants__["b" /* ErrorEventType */].PAGE_NOT_FOUND:
                this.route.navigate(['/page-not-found'], { queryParams: { url: ev.value.url }, skipLocationChange: true, });
                break;
            case __WEBPACK_IMPORTED_MODULE_7__shared_constants__["b" /* ErrorEventType */].SERVER_ERROR:
                this.route.navigate(['/internal-server-error'], { queryParams: { url: ev.value.url }, skipLocationChange: true });
                break;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSidenav */]) === "function" && _a || Object)
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__layout_sidenav_sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__layout_sidenav_sidenav_service__["a" /* SidenavService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_modules_loader__["LoaderService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_modules_loader__["LoaderService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_webstorage__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_webstorage__["a" /* LocalStorageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_error_event_handler_service__["a" /* ErrorEventHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_error_event_handler_service__["a" /* ErrorEventHandlerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__auth_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__auth_services_auth_service__["a" /* AuthService */]) === "function" && _h || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("../../../../../src/app/layout/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_services__ = __webpack_require__("../../../../../src/app/auth/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_location_service__ = __webpack_require__("../../../../../src/app/shared/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_modules_loader_loader_module__ = __webpack_require__("../../../../../src/app/shared/modules/loader/loader.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_message_service__ = __webpack_require__("../../../../../src/app/shared/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_modules_device_device_service__ = __webpack_require__("../../../../../src/app/shared/modules/device/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_error_message_service__ = __webpack_require__("../../../../../src/app/shared/services/error.message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { SharedModule } from './shared';











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__layout__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_modules_loader_loader_module__["a" /* LoaderModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_modules_material_module__["a" /* MaterialModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_9__shared_modules_material_module__["a" /* MaterialModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__auth_services__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6__auth_services__["b" /* AuthEventHandlerService */],
                __WEBPACK_IMPORTED_MODULE_7__shared_services_location_service__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_modules_device_device_service__["a" /* DeviceService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_services_error_message_service__["a" /* ErrorMessageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/constants/auth.events.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEventType; });
var AuthEventType;
(function (AuthEventType) {
    AuthEventType[AuthEventType["UNAUTHORIZED"] = 0] = "UNAUTHORIZED";
    AuthEventType[AuthEventType["LOGINSUCCESS"] = 1] = "LOGINSUCCESS";
})(AuthEventType || (AuthEventType = {}));
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/auth.events.constant.js.map

/***/ }),

/***/ "../../../../../src/app/auth/models/auth.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEvent; });
var AuthEvent = (function () {
    function AuthEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return AuthEvent;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/auth.class.js.map

/***/ }),

/***/ "../../../../../src/app/auth/models/user.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
// import { Address } from '../classes/address.class';
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/user.class.js.map

/***/ }),

/***/ "../../../../../src/app/auth/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants_url_constant__ = __webpack_require__("../../../../../src/app/shared/constants/url.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_models_user_class__ = __webpack_require__("../../../../../src/app/auth/models/user.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__auth_models_user_class__["a" /* User */]();
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["JwtHelper"]();
        this.authenticate = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.authenticateState$ = this.authenticate.asObservable();
    }
    AuthService.prototype.getUserinContext = function () {
        if (this.isAuthenticated()) {
            var token = localStorage.getItem('token');
            var tokenDecoded = this.jwtHelper.decodeToken(token);
            console.log(tokenDecoded);
            // this.user.email = tokenDecoded.email;
            // this.user.firstname = tokenDecoded.firstname;
            // this.user.lastname = tokenDecoded.lastname;
            return tokenDecoded;
        }
        else {
            this.authenticate.next(false);
        }
    };
    AuthService.prototype.isAuthenticated = function () {
        var isAuth;
        if (localStorage.getItem('token')) {
            isAuth = true;
        }
        else {
            isAuth = false;
        }
        return isAuth;
    };
    AuthService.prototype.removeToken = function () {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
        }
    };
    // delete the token in localStorage and change the navbar state
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_constants_url_constant__["a" /* UrlConstant */].USER_SIGNOUT_URL)
            .map(function (res) {
            localStorage.removeItem('token');
            _this.authenticate.next(false);
        });
    };
    // save the token in localStorage and change the navbar state
    AuthService.prototype.saveToken = function (token) {
        localStorage.setItem('token', token);
        this.authenticate.next(true);
    };
    AuthService.prototype.login = function (form) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_constants_url_constant__["a" /* UrlConstant */].USER_LOGIN_URL, form)
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_http_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_http_service__["a" /* HttpClientService */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/services/authEvent.handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_auth_events_constant__ = __webpack_require__("../../../../../src/app/auth/constants/auth.events.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_auth_class__ = __webpack_require__("../../../../../src/app/auth/models/auth.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEventHandlerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthEventHandlerService = (function () {
    function AuthEventHandlerService(route) {
        this.route = route;
        this.eventSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.events = this.eventSource.asObservable();
    }
    AuthEventHandlerService.prototype.emitEvent = function (event) {
        if (this.eventSource) {
            this.eventSource.next(event);
        }
    };
    AuthEventHandlerService.prototype.unAuthorizAccess = function () {
        var authEventName = 'unAuthorized';
        this.emitEvent(new __WEBPACK_IMPORTED_MODULE_2__models_auth_class__["a" /* AuthEvent */](__WEBPACK_IMPORTED_MODULE_1__constants_auth_events_constant__["a" /* AuthEventType */].UNAUTHORIZED, authEventName));
    };
    AuthEventHandlerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], AuthEventHandlerService);
    return AuthEventHandlerService;
    var _a;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/authEvent.handler.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authEvent_handler_service__ = __webpack_require__("../../../../../src/app/auth/services/authEvent.handler.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authEvent_handler_service__["a"]; });


//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_routing__ = __webpack_require__("../../../../../src/app/core/core.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_webstorage__ = __webpack_require__("../../../../ng2-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_scrollbar__ = __webpack_require__("../../../../ngx-scrollbar/esm5/ngx-scrollbar.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_webstorage__["b" /* Ng2Webstorage */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_scrollbar__["a" /* ScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__core_routing__["a" /* coreRoutes */]),
            ],
            providers: [
                {
                    provide: 'Window',
                    useValue: window,
                }
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_webstorage__["b" /* Ng2Webstorage */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_scrollbar__["a" /* ScrollbarModule */],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coreRoutes; });
var coreRoutes = [];
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/core.routing.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" *ngIf=\"authSrv.isAuthenticated()\">\n    <button  aria-label=\"menu\" mat-icon-button  (click)=\"opened = !opened;toggleSideNav(opened)\" >\n      <mat-icon class=\"zmdi zmdi-menu zmdi-hc-2x\"></mat-icon>\n    </button>\n    <div fxFlex></div>\n    <mat-menu #appMenu=\"matMenu\">\n        <button mat-menu-item>\n          <mat-icon class=\"zmdi zmdi-settings\"></mat-icon>\n          <span> {{ 'Setting' | translate }}</span>\n        </button>\n        <button mat-menu-item (click)=\"logout()\">\n          <mat-icon class=\"zmdi zmdi-sign-in\"></mat-icon>\n          <span> {{ 'Logout' | translate }} </span>\n        </button>\n      </mat-menu>\n      \n      <button *ngIf=\"authSrv.isAuthenticated() && user\" mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n        <span>{{user.username}}</span>\n        <mat-icon class=\"zmdi zmdi-more-vert zmdi-hc-2x\"></mat-icon>\n      </button>\n      <div fxFlex=1></div>\n    \n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_sidenav_service__ = __webpack_require__("../../../../../src/app/layout/sidenav/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_services__ = __webpack_require__("../../../../../src/app/auth/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(navSrv, authSrv, msgSrv) {
        this.authSrv = authSrv;
        this.msgSrv = msgSrv;
        this.opened = false;
        this.navSrv = navSrv;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
        // this.subscription = this.authSrv.authenticateState$.subscribe(res => {
        //   this.getUserProfile();
        // });
    };
    HeaderComponent.prototype.getUserProfile = function () {
        this.user = this.authSrv.getUserinContext();
    };
    HeaderComponent.prototype.toggleSideNav = function (toggle) {
        this.opened = toggle;
        this.navSrv.toggle(this.opened);
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authSrv.logout().subscribe(function (res) {
            _this.toggleSideNav(false);
            _this.msgSrv.simple(res);
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/layout/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/header/header.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_sidenav_service__["a" /* SidenavService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_services__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_services__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* MessageService */]) === "function" && _c || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/header.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("../../../../../src/app/layout/header/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__index__["b" /* HeaderComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__index__["b" /* HeaderComponent */],
            ],
            providers: []
        })
    ], HeaderModule);
    return HeaderModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/header.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__("../../../../../src/app/layout/header/header.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutHeaderRoutes; });

// import { LocaleResolver } from './resolves/locale.resolver';
// import { TranslationGuard } from '../../shared/translation/';
var LayoutHeaderRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__header_component__["a" /* HeaderComponent */],
        outlet: 'header',
        resolve: {},
        canActivate: [],
        data: {
            translation: {
                domain: 'layout',
                common: true,
            },
        },
    },
];
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/header.routing.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__("../../../../../src/app/layout/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_routing__ = __webpack_require__("../../../../../src/app/layout/header/header.routing.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__header_routing__["a"]; });


//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header___ = __webpack_require__("../../../../../src/app/layout/header/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header___["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav___ = __webpack_require__("../../../../../src/app/layout/sidenav/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__sidenav___["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__layout_module__["a"]; });
// export * from './footer/';



//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_module__ = __webpack_require__("../../../../../src/app/layout/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_module__ = __webpack_require__("../../../../../src/app/layout/sidenav/sidenav.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_routing_module__ = __webpack_require__("../../../../../src/app/layout/layout.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { FooterModule } from './footer/footer.module';




var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                // FooterModule,
                __WEBPACK_IMPORTED_MODULE_1__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_module__["a" /* SideNavModule */],
                __WEBPACK_IMPORTED_MODULE_3__layout_routing_module__["a" /* LayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_module__["a" /* SideNavModule */],
            ],
            declarations: []
        })
    ], LayoutModule);
    return LayoutModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/app/layout/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__index__["b" /* LayoutHeaderRoutes */].concat(__WEBPACK_IMPORTED_MODULE_2__index__["c" /* LayoutSideNavRoutes */])),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */],
            ],
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/layout.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidenav/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidenav_component__ = __webpack_require__("../../../../../src/app/layout/sidenav/sidenav.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_routing__ = __webpack_require__("../../../../../src/app/layout/sidenav/sidenav.routing.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__sidenav_routing__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_service__ = __webpack_require__("../../../../../src/app/layout/sidenav/sidenav.service.ts");
/* unused harmony namespace reexport */



//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n}\n\nli a {\n    display: block;\n    color: rgb(89, 92, 89);\n    padding: 8px 16px;\n    text-decoration: none;\n}\n\nli a.active {\n    background-color: #4CAF50;\n    color: white;\n}\n\nli div:hover:not(.active), li a:hover:not(.active){\n    background-color:#f1f1f1;\n    color: #673ab7;\n    cursor: pointer;\n}\n\n\n\nli div{\n    outline: none;\n}\n\n.active-link, .active-link a{\n    background-color:#f1f1f1;\n    color: #673ab7;\n}\n\n\n.menu-icon{\n    line-height: 2.3;\n    padding-left: 0.7em;\n    font-size: 16px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\">\n\n<mat-nav-list>\n  \n   <!-- Menus for logged in users -->\n   <div *ngIf=\"authSrv.isAuthenticated()\">\n      <ul>\n        <li *ngFor=\"let menu of menus; let last = last;\">\n          <div routerLink=\"{{menu.link}}\"  routerLinkActive #rla=\"routerLinkActive\" [ngClass]=\"{'active-link' : rla.isActive}\" [routerLinkActiveOptions]=\"{exact:\n            true}\">\n            <mat-icon class=\"zmdi menu-icon\" [ngClass]=\"[menu.icon]\"></mat-icon>\n            <a mat-line  (click)=\"menu.isChildOpen = !menu.isChildOpen;\">{{ menu.title | translate}}</a>\n            <span fxFlex></span>\n            <button mat-icon-button *ngIf=\"menu.children && menu.children.length !== 0\">\n              <mat-icon class=\"zmdi menu-icon\" [ngClass]=\"{ 'zmdi-chevron-down' : menu.isChildOpen,  'zmdi-chevron-right' : !menu.isChildOpen}\"></mat-icon>\n            </button>\n          </div>\n          <ul *ngIf=\"menu.isChildOpen\">\n            <li *ngFor=\"let menu of menu.children; let last = last;\">\n                <div routerLink=\"{{menu.link}}\" routerLinkActive #rla=\"routerLinkActive\" [ngClass]=\"{'active-link' : rla.isActive}\" [routerLinkActiveOptions]=\"{exact:\n                  true}\">\n                    <mat-icon class=\"zmdi menu-icon\" [ngClass]=\"[menu.icon]\"></mat-icon>\n                    <a mat-line  (click)=\"menu.isChildOpen = !menu.isChildOpen;\">{{ menu.title | translate}}</a>\n                    <span fxFlex></span>\n                    <button mat-icon-button *ngIf=\"menu.children && menu.children.length !== 0\">\n                      <mat-icon class=\"zmdi menu-icon\" [ngClass]=\"{ 'zmdi-chevron-down' : menu.isChildOpen,  'zmdi-chevron-right' : !menu.isChildOpen}\"></mat-icon>\n                    </button>\n                  </div>\n              <mat-divider *ngIf=\"!last\"></mat-divider>\n            </li>\n            \n          </ul>\n          <mat-divider *ngIf=\"!last\"></mat-divider>\n        </li>\n      </ul>\n   </div>\n  \n  <!-- Menus for not logged in users -->\n  <div *ngIf=\"!authSrv.isAuthenticated()\">\n    <mat-list-item>\n      <a mat-line routerLink=\"/auth/login\" routerLinkActive=\"active\">{{ 'Login' | translate }} </a>\n    </mat-list-item>\n  </div>\n</mat-nav-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_menu_constatns__ = __webpack_require__("../../../../../src/app/shared/constants/menu.constatns.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = (function () {
    function SidenavComponent(authSrv) {
        this.authSrv = authSrv;
        this.menus = __WEBPACK_IMPORTED_MODULE_2__shared_constants_menu_constatns__["a" /* MENU */];
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/layout/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], SidenavComponent);
    return SidenavComponent;
    var _a;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/sidenav.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidenav/sidenav.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_service__ = __webpack_require__("../../../../../src/app/layout/sidenav/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidenav_component__ = __webpack_require__("../../../../../src/app/layout/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SideNavModule = (function () {
    function SideNavModule() {
    }
    SideNavModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sidenav_component__["a" /* SidenavComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__sidenav_service__["a" /* SidenavService */],
            ],
        })
    ], SideNavModule);
    return SideNavModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/sidenav.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidenav/sidenav.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidenav_component__ = __webpack_require__("../../../../../src/app/layout/sidenav/sidenav.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutSideNavRoutes; });

var LayoutSideNavRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__sidenav_component__["a" /* SidenavComponent */],
        outlet: 'sidenav',
    }
];
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/sidenav.routing.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidenav/sidenav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidenavService = (function () {
    function SidenavService() {
    }
    SidenavService.prototype.setSidenav = function (sidenav) {
        this.sidenav = sidenav;
    };
    SidenavService.prototype.isOpen = function () {
        return this.sidenav.opened;
    };
    SidenavService.prototype.toggle = function (isOpen) {
        return this.sidenav.toggle(isOpen);
    };
    SidenavService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SidenavService);
    return SidenavService;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/sidenav.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_server_error___ = __webpack_require__("../../../../../src/app/shared/components/internal-server-error/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_server_error___["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_indigator___ = __webpack_require__("../../../../../src/app/shared/components/network-indigator/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__network_indigator___["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found___ = __webpack_require__("../../../../../src/app/shared/components/page-not-found/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__page_not_found___["a"]; });



//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/internal-server-error/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_server_error_component__ = __webpack_require__("../../../../../src/app/shared/components/internal-server-error/internal-server-error.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_server_error_component__["a"]; });

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/internal-server-error/internal-server-error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/internal-server-error/internal-server-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFill id=\"login-form\">\n  <h1>\n    Error 500 !!\n  </h1>\n  <h3> url : {{errorUrl}}</h3>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/internal-server-error/internal-server-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalServerErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InternalServerErrorComponent = (function () {
    function InternalServerErrorComponent(router) {
        this.router = router;
    }
    InternalServerErrorComponent.prototype.ngOnInit = function () {
        var param = this.router.parseUrl(this.router.url);
        console.log(param);
        this.errorUrl = param.queryParams.url;
    };
    InternalServerErrorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-internal-server-error',
            template: __webpack_require__("../../../../../src/app/shared/components/internal-server-error/internal-server-error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/internal-server-error/internal-server-error.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], InternalServerErrorComponent);
    return InternalServerErrorComponent;
    var _a;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/internal-server-error.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/network-indigator/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__network_indigator_component__ = __webpack_require__("../../../../../src/app/shared/components/network-indigator/network-indigator.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__network_indigator_component__["a"]; });

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/network-indigator/network-indigator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/network-indigator/network-indigator.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button>\n   <mat-icon mat-icon-button class=\"connected\" matTooltip=\"No Connection\" *ngIf=\"!(isConnected | async)\">signal_wifi_off</mat-icon>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/network-indigator/network-indigator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkIndigatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NetworkIndigatorComponent = (function () {
    function NetworkIndigatorComponent(msgSrv) {
        this.msgSrv = msgSrv;
        this.isConnected = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].merge(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(navigator.onLine), __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'online').map(function () { return true; }), __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'offline').map(function () { return false; }));
    }
    NetworkIndigatorComponent.prototype.ngOnInit = function () {
    };
    NetworkIndigatorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-network-indigator',
            template: __webpack_require__("../../../../../src/app/shared/components/network-indigator/network-indigator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/network-indigator/network-indigator.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services__["d" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["d" /* MessageService */]) === "function" && _a || Object])
    ], NetworkIndigatorComponent);
    return NetworkIndigatorComponent;
    var _a;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/network-indigator.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/page-not-found/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_not_found_component__ = __webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__page_not_found_component__["a"]; });

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\" fxFlexFill fxFlex>\n    <h1>page Not Found !!</h1>\n  </div>\n  \n\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/constants/baseurl.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL; });

var URL = {
    baseAuthUrl: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/auth',
    baseApiUrl: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/api'
};
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/baseurl.constants.js.map

/***/ }),

/***/ "../../../../../src/app/shared/constants/error.code.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorCode; });
var ErrorCode = {
    404: 'ERROR_404',
    500: 'ERROR_500'
};
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/error.code.constants.js.map

/***/ }),

/***/ "../../../../../src/app/shared/constants/error.events.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorEventType; });
var ErrorEventType;
(function (ErrorEventType) {
    ErrorEventType[ErrorEventType["SERVER_ERROR"] = 0] = "SERVER_ERROR";
    ErrorEventType[ErrorEventType["PAGE_NOT_FOUND"] = 1] = "PAGE_NOT_FOUND";
    ErrorEventType[ErrorEventType["UNAUTHORIZED_ACCESS"] = 2] = "UNAUTHORIZED_ACCESS";
})(ErrorEventType || (ErrorEventType = {}));
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/error.events.constants.js.map

/***/ }),

/***/ "../../../../../src/app/shared/constants/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__url_constant__ = __webpack_require__("../../../../../src/app/shared/constants/url.constant.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_constatns__ = __webpack_require__("../../../../../src/app/shared/constants/menu.constatns.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_events_constants__ = __webpack_require__("../../../../../src/app/shared/constants/error.events.constants.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__error_events_constants__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseurl_constants__ = __webpack_require__("../../../../../src/app/shared/constants/baseurl.constants.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_code_constants__ = __webpack_require__("../../../../../src/app/shared/constants/error.code.constants.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__error_code_constants__["a"]; });





//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/constants/menu.constatns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU; });
var MENU = [
    {
        'title': 'Device',
        'link': '/device',
        'roles': ['ADMIN', 'ANONYMOUS'],
        'icon': 'zmdi zmdi-devices'
    },
    {
        'title': 'Administration',
        'component': 'AdminPage',
        'link': '.',
        'icon': 'zmdi-accounts-alt',
        'roles': ['ADMIN', 'SUPERADMIN'],
        'isChildOpen': false,
        'children': [
            {
                'title': 'Users',
                'icon': 'zmdi-account',
                'link': '/users'
            },
            {
                'title': 'Route',
                'icon': 'zmdi-account',
                'link': '/route'
            }
        ]
    }
];
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/menu.constatns.js.map

/***/ }),

/***/ "../../../../../src/app/shared/constants/url.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseurl_constants__ = __webpack_require__("../../../../../src/app/shared/constants/baseurl.constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlConstant; });

var UrlConstant = {
    MENU_URL: 'assets/data/menu.json',
    USER_LOGIN_URL: __WEBPACK_IMPORTED_MODULE_0__baseurl_constants__["a" /* URL */].baseAuthUrl + '/login',
    GET_ALL_USERS: __WEBPACK_IMPORTED_MODULE_0__baseurl_constants__["a" /* URL */].baseApiUrl + '/user',
    ADD_USER_URL: __WEBPACK_IMPORTED_MODULE_0__baseurl_constants__["a" /* URL */].baseApiUrl + '/user',
    USER_SIGNOUT_URL: __WEBPACK_IMPORTED_MODULE_0__baseurl_constants__["a" /* URL */].baseAuthUrl + '/signout',
    USER_ENABLE: __WEBPACK_IMPORTED_MODULE_0__baseurl_constants__["a" /* URL */].baseApiUrl + '/user/enable',
    USER_DELETE_URL: __WEBPACK_IMPORTED_MODULE_0__baseurl_constants__["a" /* URL */].baseApiUrl + '/user/delete',
    EDIT_USER_URL: __WEBPACK_IMPORTED_MODULE_0__baseurl_constants__["a" /* URL */].baseApiUrl + '/user/edit',
    DEVICE_URL: __WEBPACK_IMPORTED_MODULE_0__baseurl_constants__["a" /* URL */].baseApiUrl + '/device',
    CREATE_DEVICE_URL: __WEBPACK_IMPORTED_MODULE_0__baseurl_constants__["a" /* URL */].baseApiUrl + '/device'
};
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/url.constant.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/error.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorEvent; });
var ErrorEvent = (function () {
    function ErrorEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return ErrorEvent;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/error.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/error.msg.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessage; });
var ErrorMessage = (function () {
    function ErrorMessage() {
    }
    return ErrorMessage;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/error.msg.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_item_model__ = __webpack_require__("../../../../../src/app/shared/models/menu.item.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_msg_model__ = __webpack_require__("../../../../../src/app/shared/models/error.msg.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__error_msg_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_model__ = __webpack_require__("../../../../../src/app/shared/models/error.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__error_model__["a"]; });



//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/menu.item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MenuItem */
var MenuItem = (function () {
    function MenuItem() {
    }
    return MenuItem;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/menu.item.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/device/device.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_url_constant__ = __webpack_require__("../../../../../src/app/shared/constants/url.constant.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceService = (function () {
    function DeviceService(http) {
        this.http = http;
    }
    ;
    DeviceService.prototype.create = function (device) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_url_constant__["a" /* UrlConstant */].CREATE_DEVICE_URL;
        this.http.post(url, device)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    DeviceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpClientService */]) === "function" && _a || Object])
    ], DeviceService);
    return DeviceService;
    var _a;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/device.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/loader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_component__ = __webpack_require__("../../../../../src/app/shared/modules/loader/loader.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces___ = __webpack_require__("../../../../../src/app/shared/modules/loader/interfaces/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__interfaces___, "LoaderService")) __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return __WEBPACK_IMPORTED_MODULE_1__interfaces___["LoaderService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_module__ = __webpack_require__("../../../../../src/app/shared/modules/loader/loader.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader_service__ = __webpack_require__("../../../../../src/app/shared/modules/loader/loader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return __WEBPACK_IMPORTED_MODULE_3__loader_service__["a"]; });




//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/loader/interfaces/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_interface__ = __webpack_require__("../../../../../src/app/shared/modules/loader/interfaces/loader.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loader_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__loader_interface__, "LoaderService")) __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return __WEBPACK_IMPORTED_MODULE_0__loader_interface__["LoaderService"]; });

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/loader/interfaces/loader.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/loader.interface.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../../src/app/shared/modules/loader/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(service) {
        this.service = service;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.events.subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_1__loader_service__["b" /* SlimLoadingBarEventType */].VISIBLE) {
                _this.show = event.value;
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoaderComponent.prototype, "show", void 0);
    LoaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: "<div class=\"load-9\">\n                <div class=\"spinner\" *ngIf=\"show\">\n                <div class=\"bubble-1\"></div>\n                <div class=\"bubble-2\"></div>\n               </div></div>"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */]) === "function" && _a || Object])
    ], LoaderComponent);
    return LoaderComponent;
    var _a;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/loader/loader.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_component__ = __webpack_require__("../../../../../src/app/shared/modules/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_service__ = __webpack_require__("../../../../../src/app/shared/modules/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoaderModule = (function () {
    function LoaderModule() {
    }
    LoaderModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__loader_component__["a" /* LoaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__loader_component__["a" /* LoaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__loader_service__["a" /* LoaderService */]]
        })
    ], LoaderModule);
    return LoaderModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/loader.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/loader/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SlimLoadingBarEventType; });
/* unused harmony export SlimLoadingBarEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {isPresent} from '../../util/util.common';

var SlimLoadingBarEventType;
(function (SlimLoadingBarEventType) {
    SlimLoadingBarEventType[SlimLoadingBarEventType["VISIBLE"] = 0] = "VISIBLE";
})(SlimLoadingBarEventType || (SlimLoadingBarEventType = {}));
var SlimLoadingBarEvent = (function () {
    function SlimLoadingBarEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return SlimLoadingBarEvent;
}());

var LoaderService = (function () {
    function LoaderService() {
        // private _color:string = 'firebrick';
        this._visible = true;
        this.eventSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.events = this.eventSource.asObservable();
    }
    Object.defineProperty(LoaderService.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._visible = value;
                this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.VISIBLE, this._visible));
            }
        },
        enumerable: true,
        configurable: true
    });
    LoaderService.prototype.emitEvent = function (event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    };
    LoaderService.prototype.show = function () {
        this.hide();
        this.visible = true;
    };
    LoaderService.prototype.hide = function () {
        this.visible = false;
    };
    LoaderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/loader.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatSelectModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatSelectModule */]
            ],
            declarations: [],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MAT_LABEL_GLOBAL_OPTIONS */], useValue: { float: 'hover' } }]
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/material.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfigService = (function () {
    /**
     * Construct of the class
     *
     * @param {Window} window
     */
    function ConfigService(window) {
        this.window = window;
    }
    /**
     * Getter method for used env variables.
     *
     * @param {string}  section
     * @returns {any}
     */
    ConfigService.prototype.get = function (section) {
        // return this.window.__env[section];
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */][section];
    };
    /**
     * Short hand method to get current API URL.
     *
     * @returns {string}
     */
    ConfigService.prototype.getApiUrl = function () {
        // return this.get('API_URL');
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL;
    };
    ConfigService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('Window')),
        __metadata("design:paramtypes", [Object])
    ], ConfigService);
    return ConfigService;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/config.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/error.event.handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("../../../../../src/app/shared/constants/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorEventHandlerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorEventHandlerService = (function () {
    function ErrorEventHandlerService() {
        this.eventSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.events = this.eventSource.asObservable();
    }
    ErrorEventHandlerService.prototype.emitEvent = function (event) {
        if (this.eventSource) {
            this.eventSource.next(event);
        }
    };
    ErrorEventHandlerService.prototype._getErrorMsg = function (error) {
        var errmsg = new __WEBPACK_IMPORTED_MODULE_3__models__["a" /* ErrorMessage */]();
        errmsg.status = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* ErrorCode */][error.status];
        errmsg.url = error.url;
        errmsg.messgae = error.statusText;
        return errmsg;
    };
    ErrorEventHandlerService.prototype.Error500 = function (err) {
        this.emitEvent(new __WEBPACK_IMPORTED_MODULE_3__models__["b" /* ErrorEvent */](__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* ErrorEventType */].SERVER_ERROR, this._getErrorMsg(err)));
    };
    ErrorEventHandlerService.prototype.Error404 = function (err) {
        this.emitEvent(new __WEBPACK_IMPORTED_MODULE_3__models__["b" /* ErrorEvent */](__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* ErrorEventType */].PAGE_NOT_FOUND, this._getErrorMsg(err)));
    };
    ErrorEventHandlerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ErrorEventHandlerService);
    return ErrorEventHandlerService;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/error.event.handler.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/error.message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorMessageService = (function () {
    function ErrorMessageService() {
    }
    ErrorMessageService.prototype.getFormErrorMessage = function (field) {
        return field.hasError('required') ? 'this Field is Required.' :
            field.hasError('email') ? 'Not a valid email.' :
                field.hasError('minlength') ? 'minimum lenght required' : field.hasError('minlength') ? 'max lenght required' : '';
    };
    ErrorMessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ErrorMessageService);
    return ErrorMessageService;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/error.message.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_services_authEvent_handler_service__ = __webpack_require__("../../../../../src/app/auth/services/authEvent.handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_error_event_handler_service__ = __webpack_require__("../../../../../src/app/shared/services/error.event.handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modules_loader___ = __webpack_require__("../../../../../src/app/shared/modules/loader/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpClientService = (function (_super) {
    __extends(HttpClientService, _super);
    function HttpClientService(http, auth, errorSrv, loaderSrv) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.auth = auth;
        _this.errorSrv = errorSrv;
        _this.loaderSrv = loaderSrv;
        _this.accessToken = 'abcd';
        if (localStorage.getItem('token')) {
            _this.accessToken = localStorage.getItem('token');
        }
        _this.headers.append('Content-Type', 'application/json');
        return _this;
        // this.headers.append('access-token',this.accessToken+'');
    }
    HttpClientService.prototype._serverError = function (err) {
        console.log(err);
        if (typeof (err) === 'object') {
            this.loaderSrv.hide();
            if (err.status === 401) {
                this.auth.unAuthorizAccess();
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Unauthorized');
            }
            if (err.status === 500) {
                this.errorSrv.Error500(err);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('error=>500');
            }
            if (err.status === 404) {
                this.errorSrv.Error404(err);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('error=>404');
            }
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err || 'backend server error');
    };
    HttpClientService.prototype.get = function (url) {
        var _this = this;
        return this.http.get(url, {
            headers: this.headers,
        })
            .catch(function (e) {
            return _this._serverError(e);
        });
    };
    HttpClientService.prototype.getWithPagination = function (url, sort, order, page) {
        var _this = this;
        var pagination = "?sort=" + sort + "&order=" + order + "&page=" + page;
        return this.http.get(url + pagination, {
            headers: this.headers,
        })
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return _this._serverError(e);
        });
    };
    HttpClientService.prototype.post = function (url, data) {
        var _this = this;
        return this.http.post(url, data, {
            headers: this.headers,
            withCredentials: true
        })
            .catch(function (e) {
            return _this._serverError(e);
        });
    };
    HttpClientService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_services_authEvent_handler_service__["a" /* AuthEventHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_services_authEvent_handler_service__["a" /* AuthEventHandlerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_error_event_handler_service__["a" /* ErrorEventHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_error_event_handler_service__["a" /* ErrorEventHandlerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_modules_loader___["LoaderService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_modules_loader___["LoaderService"]) === "function" && _d || Object])
    ], HttpClientService);
    return HttpClientService;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["BaseRequestOptions"]));

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/http.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_service__ = __webpack_require__("../../../../../src/app/shared/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("../../../../../src/app/shared/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_event_handler_service__ = __webpack_require__("../../../../../src/app/shared/services/error.event.handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_service__ = __webpack_require__("../../../../../src/app/shared/services/menu.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__config_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__message_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__http_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__error_event_handler_service__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony export Services */










var Services = [
    __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */],
    __WEBPACK_IMPORTED_MODULE_0__message_service__["a" /* MessageService */],
    __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpClientService */],
    __WEBPACK_IMPORTED_MODULE_3__error_event_handler_service__["a" /* ErrorEventHandlerService */],
    __WEBPACK_IMPORTED_MODULE_4__menu_service__["a" /* MenuService */]
];
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationService = (function () {
    function LocationService() {
        this.userLocation = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ;
    LocationService.prototype.getCurrentLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.userLocation.next(position);
                _this.userLocation.complete();
            });
        }
        return this.userLocation;
    };
    LocationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/location.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuService = (function () {
    function MenuService() {
    }
    MenuService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = (function () {
    /**
     * Constructor of the class
     *
     * @param {MdSnackBar}  snackBar
     */
    function MessageService(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * Method to show simple snack-bar / toast on page.
     *
     * @param {string}  message
     * @param {boolean} showCloseButton
     * @param {number}  duration
     *
     * @returns {MdSnackBarRef<SimpleSnackBar>}
     */
    MessageService.prototype.simple = function (message, showCloseButton, duration) {
        if (showCloseButton === void 0) { showCloseButton = false; }
        if (duration === void 0) { duration = 6000; }
        var ref = this.snackBar.open(message, showCloseButton ? 'close' : null, { duration: duration });
        ref.onAction().subscribe(function () { });
        return ref;
    };
    MessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatSnackBar */]) === "function" && _a || Object])
    ], MessageService);
    return MessageService;
    var _a;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/message.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_translation__ = __webpack_require__("../../../../../src/app/shared/translation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_routing_module__ = __webpack_require__("../../../../../src/app/shared/shared.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__("../../../../../src/app/shared/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["b" /* InternalServerErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["c" /* NetworkIndigatorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_translation__["a" /* TranslationModule */],
                __WEBPACK_IMPORTED_MODULE_8__modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_routing_module__["a" /* SharedRoutingModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__shared_translation__["a" /* TranslationModule */],
                __WEBPACK_IMPORTED_MODULE_7__components__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["b" /* InternalServerErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["c" /* NetworkIndigatorComponent */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_8__modules_material_module__["a" /* MaterialModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services__["a" /* HttpClientService */],
                __WEBPACK_IMPORTED_MODULE_5__services__["b" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_5__services__["c" /* ErrorEventHandlerService */],
                __WEBPACK_IMPORTED_MODULE_5__services__["d" /* MessageService */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedRoutingModule = (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    {
                        path: '',
                        children: [],
                    },
                ]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */],
            ],
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/shared.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translation_guard__ = __webpack_require__("../../../../../src/app/shared/translation/guards/translation.guard.ts");
/* unused harmony namespace reexport */

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/guards/translation.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_translation_service__ = __webpack_require__("../../../../../src/app/shared/translation/services/translation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TranslationGuard = (function () {
    /**
     * Constructor of the class
     *
     * @param {TranslationService}  translationService
     */
    function TranslationGuard(translationService) {
        this.translationService = translationService;
    }
    /**
     * Purpose of this guard is to loadTranslations current route possible translations so that we can use those easily. Usage
     * examples:
     *
     *  RouterModule.forChild([
     *    {
     *      path: 'foo',
     *      component: FooComponent,
     *      canActivate: [
     *        TranslationGuard,
     *      ],
     *    },
     *  ]);
     *
     * Above will try to loadTranslations locales from path 'foo/en.json'
     *
     *  RouterModule.forChild([
     *    {
     *      path: '',
     *      component: FooBarComponent,
     *      canActivate: [
     *        TranslationGuard,
     *      ],
     *      data: {
     *        translation: {
     *          domain: 'layout',
     *          common: true|false, // Optional
     *        },
     *      },
     *    },
     *  ]);
     *
     * Above will try to loadTranslations translations from path 'layout/en.json'
     *
     * TODO don't store data.translation.domain data to translate normal cache
     * TODO resolve possible cache problems common versus not common
     *
     * @param {ActivatedRouteSnapshot}  next
     * @param {RouterStateSnapshot}     state
     * @returns {Observable<boolean>}
     */
    TranslationGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var domain;
        var common = false;
        // Route data contains translation meta data
        if (next.data.hasOwnProperty('translation')) {
            domain = next.data['translation'].hasOwnProperty('domain') ? next.data['translation']['domain'] : false;
            common = next.data['translation'].hasOwnProperty('common') ? next.data['translation']['common'] : false;
        }
        else {
            domain = next.pathFromRoot
                .filter(function (routeSnapshot) {
                return routeSnapshot.routeConfig !== null;
            })
                .map(function (routeSnapshot) {
                return routeSnapshot.routeConfig.path;
            })
                .join('/');
        }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.translationService
                .load(domain, common)
                .subscribe(function () {
                observer.next(true);
                observer.complete();
            });
        });
    };
    TranslationGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_translation_service__["a" /* TranslationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_translation_service__["a" /* TranslationService */]) === "function" && _a || Object])
    ], TranslationGuard);
    return TranslationGuard;
    var _a;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/translation.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/http-loader-factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translation_loader__ = __webpack_require__("../../../../../src/app/shared/translation/translation-loader.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = HttpLoaderFactory;

/**
 * AoT requires an exported function for factories
 *
 * @param {Http}                    http
 * @param {ConfigService}           configService
 * @param {TranslationCacheService} translationCacheService
 *
 * @returns {TranslationLoader}
 * @constructor
 */
function HttpLoaderFactory(http, configService, translationCacheService) {
    return new __WEBPACK_IMPORTED_MODULE_0__translation_loader__["a" /* TranslationLoader */](http, configService, translationCacheService);
}
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/http-loader-factory.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards___ = __webpack_require__("../../../../../src/app/shared/translation/guards/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models___ = __webpack_require__("../../../../../src/app/shared/translation/models/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services___ = __webpack_require__("../../../../../src/app/shared/translation/services/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translation_module__ = __webpack_require__("../../../../../src/app/shared/translation/translation.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__translation_module__["a"]; });




//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/models/domain-cache.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DomainCacheModel */
var DomainCacheModel = (function () {
    function DomainCacheModel() {
    }
    return DomainCacheModel;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/domain-cache.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_cache_model__ = __webpack_require__("../../../../../src/app/shared/translation/models/domain-cache.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale_model__ = __webpack_require__("../../../../../src/app/shared/translation/models/locale.model.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/models/locale.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LocaleModel */
var LocaleModel = (function () {
    function LocaleModel() {
    }
    return LocaleModel;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/locale.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translation_service__ = __webpack_require__("../../../../../src/app/shared/translation/services/translation.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translation_cache_service__ = __webpack_require__("../../../../../src/app/shared/translation/services/translation-cache.service.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/services/translation-cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationCacheService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TranslationCacheService = (function () {
    function TranslationCacheService() {
        this.cacheDomain = {};
        this.cacheCommon = {};
        this.cacheBase = {};
    }
    /**
     * Method to store "base" domain translations to cache.
     *
     * @param {string}  language
     * @param {Object}  translations
     */
    TranslationCacheService.prototype.base = function (language, translations) {
        if (!this.cacheBase.hasOwnProperty(language)) {
            this.cacheBase[language] = {};
        }
        this.cacheBase[language] = translations;
    };
    /**
     * Method to check if current language + domain exists on cache or not.
     *
     * @param {string}  language
     * @param {string}  domain
     * @param {boolean} common
     * @returns {boolean}
     */
    TranslationCacheService.prototype.cached = function (language, domain, common) {
        var storage = common ? this.cacheCommon : this.cacheDomain;
        return storage.hasOwnProperty(language) && storage[language].hasOwnProperty(domain);
    };
    /**
     * Method to store language + domain translations to cache.
     *
     * @param {string}  language
     * @param {string}  domain
     * @param {Object}  translations
     * @param {boolean} common
     */
    TranslationCacheService.prototype.store = function (language, domain, translations, common) {
        if (!this.cacheCommon.hasOwnProperty(language)) {
            this.cacheCommon[language] = {};
        }
        if (!this.cacheCommon[language].hasOwnProperty('domain')) {
            this.cacheCommon[language][domain] = {};
        }
        if (!this.cacheDomain.hasOwnProperty(language)) {
            this.cacheDomain[language] = {};
        }
        if (!this.cacheDomain[language].hasOwnProperty('domain')) {
            this.cacheDomain[language][domain] = {};
        }
        common ? this.cacheCommon[language][domain] = translations : this.cacheDomain[language][domain] = translations;
    };
    /**
     * Method to get translations for specified language + domain.
     *
     * @param {string}  language
     * @param {string}  domain
     * @returns {Object}
     */
    TranslationCacheService.prototype.get = function (language, domain) {
        return Object.assign({}, this.cacheBase[language], this.cacheCommon[language][domain], this.cacheDomain[language][domain]);
    };
    TranslationCacheService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TranslationCacheService);
    return TranslationCacheService;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/translation-cache.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/services/translation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_webstorage__ = __webpack_require__("../../../../ng2-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_config_service__ = __webpack_require__("../../../../../src/app/shared/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__translation_cache_service__ = __webpack_require__("../../../../../src/app/shared/translation/services/translation-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_forkJoin__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TranslationService = (function () {
    /**
     * Constructor of the class.
     *
     * @param {Http}                    http
     * @param {Router}                  router
     * @param {LocalStorageService}     localStorage
     * @param {TranslateService}        translateService
     * @param {TranslationCacheService} translationCacheService
     * @param {ConfigService}           configService
     */
    function TranslationService(http, router, localStorage, translateService, translationCacheService, configService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.localStorage = localStorage;
        this.translateService = translateService;
        this.translationCacheService = translationCacheService;
        this.configService = configService;
        this.loadedDomains = [];
        this.loadedDomainsCommon = [];
        this.loadedDomainsCache = {};
        this.loadedDomainsCacheCommon = {};
        // Store current language
        this.language = this.translateService.currentLang;
        // Determine what url to use to fetch these translations; 1) local 2) remote
        this.translationUrl = this.configService.get('USE_LOCAL_TRANSLATIONS')
            ? "./assets/i18n/" : this.configService.getApiUrl() + "translation/";
        // On language changes we need to make sure that domain related texts are loaded
        this.translateService
            .onLangChange
            .subscribe(function (event) {
            if (event.lang !== _this.language) {
                _this.reloadTranslations(event);
            }
        });
        // Subscribe to router events, so we can store/reset some needed data
        this.router
            .events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]) {
                // Store loaded domains to cache
                _this.loadedDomainsCache[event.url] = _this.loadedDomains;
                _this.loadedDomainsCacheCommon[event.url] = _this.loadedDomainsCommon;
                // Reset cache
                _this.loadedDomains = [];
                _this.loadedDomainsCommon = [];
                // Store current url
                _this.url = event.url;
            }
        });
    }
    /**
     * Method to fetch supported locales.
     *
     * @returns {Observable<Array<LocaleModel>>}
     */
    TranslationService.prototype.getLocales = function () {
        return this.http
            .get(this.translationUrl + "locales.json")
            .map(function (res) { return res.json(); });
    };
    /**
     * Method to load translations for given domain. Note that this will split given domain to parts and try to fetch
     * translations to each of them. Eg. if domain is /Foo/Bar/FooBar then this will try to load following translations:
     *  - /Foo/en.json
     *  - /Foo/Bar/en.json
     *  - /Foo/Bar/FooBar/en.json
     *
     * And those texts are merged to final result in that order - So that you can easily override some texts within your
     * domain and still have some "default" translation for that same.
     *
     * @param {string}  domain
     * @param {boolean} common
     * @returns {Observable<Array<string>>}
     */
    TranslationService.prototype.load = function (domain, common) {
        var _this = this;
        var parts = [];
        var observables = domain.split('/').map(function (part) {
            parts.push(part);
            return _this.loadTranslations(parts.slice().join('/'), common);
        });
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]
                .forkJoin(observables)
                .subscribe(function (results) {
                observer.next(results
                    .filter(function (domainPart) { return domainPart; })
                    .map(function (domainPart) {
                    _this.loadTranslation(_this.language, domainPart);
                    return domainPart;
                }));
                observer.complete();
            });
        });
    };
    /**
     * Method to fetch domain translations from cache or specified translation url.
     *
     * @param {string}  domain
     * @param {boolean} common
     * @returns {Observable<string|boolean>}
     */
    TranslationService.prototype.loadTranslations = function (domain, common) {
        if (this.translationCacheService.cached(this.language, domain, common)) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(domain);
        }
        // Store current domain to cache
        common ? this.loadedDomainsCommon.push(domain) : this.loadedDomains.push(domain);
        // Remove possible duplicates from loaded domains
        this.loadedDomains = this.loadedDomains.filter(function (x, i, a) { return a.indexOf(x) === i; });
        this.loadedDomainsCommon = this.loadedDomainsCommon.filter(function (x, i, a) { return a.indexOf(x) === i; });
        return this.fetchTranslations(domain, this.language, common);
    };
    /**
     * Method to fetch domain + language specified translations from specified location:
     *  1) Local
     *  2) Remote
     *
     * And if/when an error happens when fetching those translations, just silently ignore those - there aren't errors
     * in all of the cases - and really these don't prevent to use application.
     *
     * Note that in each case we store language + domain data to cache - so that we won't trigger fetching multiple times
     * when user navigates in application.
     *
     * @param {string}  language
     * @param {string}  domain
     * @param {boolean} common
     * @returns {Observable<string|boolean>}
     */
    TranslationService.prototype.fetchTranslations = function (domain, language, common) {
        var _this = this;
        return this.http
            .get("" + this.translationUrl + domain + "/" + language + ".json")
            .map(function (res) {
            var translations = res.json();
            // Store translations to cache
            _this.translationCacheService.store(language, domain, translations, common);
            return domain;
        })
            .catch(function (error) {
            console.warn("Translation not found for domain '" + domain + "'...", error);
            // Store translations to cache - yes we really want to do this...
            _this.translationCacheService.store(language, domain, {}, common);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(false);
        });
    };
    /**
     * Method to load translations from cache and set those to translate service.
     *
     * @param {string}  language
     * @param {string}  domain
     */
    TranslationService.prototype.loadTranslation = function (language, domain) {
        this.translateService.setTranslation(language, this.translationCacheService.get(language, domain), true);
    };
    /**
     * Method to reload translations - this is run whenever user changes language in the application. Within this method
     * we want to do following things:
     *  1) Store new language to local storage - so that user can refresh page
     *  2) Determine which common and not-common domains to load
     *    2.1) Note that in this case we already know exact domains - so no need to split those apart again
     *    2.2) Also note that we need to load those domains in that specified order
     *
     * @param {LangChangeEvent} event
     */
    TranslationService.prototype.reloadTranslations = function (event) {
        var _this = this;
        var domains = [];
        this.language = event.lang;
        this.localStorage.store('language', this.language);
        // Domain in the common cache so load it
        if (this.loadedDomainsCacheCommon.hasOwnProperty(this.url)) {
            this.loadedDomainsCacheCommon[this.url]
                .map(function (domain) {
                domains.push({ domain: domain, common: true });
            });
        }
        // Domain in the cache so load it
        if (this.loadedDomainsCache.hasOwnProperty(this.url)) {
            this.loadedDomainsCache[this.url]
                .map(function (domain) {
                domains.push({ domain: domain, common: false });
            });
        }
        // Fork join domain observables and load translations in correct order
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]
            .forkJoin(domains.map(function (data) { return _this.loadTranslations(data.domain, data.common); }))
            .subscribe(function (results) {
            results
                .filter(function (domain) { return domain; })
                .map(function (domain) {
                _this.loadTranslation(_this.language, domain);
            });
        });
    };
    TranslationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_webstorage__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_webstorage__["a" /* LocalStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__translation_cache_service__["a" /* TranslationCacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__translation_cache_service__["a" /* TranslationCacheService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_config_service__["a" /* ConfigService */]) === "function" && _f || Object])
    ], TranslationService);
    return TranslationService;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/translation.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/translation-loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationLoader; });
var TranslationLoader = (function () {
    /**
     * Constructor of the class.
     *
     * @param {Http}                    http
     * @param {ConfigService}           configService
     * @param {TranslationCacheService} translationCacheService
     */
    function TranslationLoader(http, configService, translationCacheService) {
        this.http = http;
        this.configService = configService;
        this.translationCacheService = translationCacheService;
        this.url = this.configService.get('USE_LOCAL_TRANSLATIONS')
            ? "./assets/i18n/" : this.configService.getApiUrl() + "translation/";
    }
    /**
     * Gets the translations from the server
     *
     * @param {string}  language
     * @returns {Observable<any>}
     */
    TranslationLoader.prototype.getTranslation = function (language) {
        var _this = this;
        return this.http
            .get("" + this.url + language + ".json")
            .map(function (res) {
            var translations = res.json();
            _this.translationCacheService.base(language, translations);
            return translations;
        });
    };
    return TranslationLoader;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/translation-loader.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translation/translation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_loader_factory__ = __webpack_require__("../../../../../src/app/shared/translation/http-loader-factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_config_service__ = __webpack_require__("../../../../../src/app/shared/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_translation_guard__ = __webpack_require__("../../../../../src/app/shared/translation/guards/translation.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_translation_service__ = __webpack_require__("../../../../../src/app/shared/translation/services/translation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_translation_cache_service__ = __webpack_require__("../../../../../src/app/shared/translation/services/translation-cache.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TranslationModule = (function () {
    function TranslationModule() {
    }
    TranslationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: __WEBPACK_IMPORTED_MODULE_3__http_loader_factory__["a" /* HttpLoaderFactory */],
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_7__services_translation_cache_service__["a" /* TranslationCacheService */]],
                    },
                }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__guards_translation_guard__["a" /* TranslationGuard */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
                __WEBPACK_IMPORTED_MODULE_6__services_translation_service__["a" /* TranslationService */],
                __WEBPACK_IMPORTED_MODULE_7__services_translation_cache_service__["a" /* TranslationCacheService */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            ]
        })
    ], TranslationModule);
    return TranslationModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/translation.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    USE_LOCAL_TRANSLATIONS: true,
    API_URL: 'http://localhost:8080'
    // API_URL: 'http://server-ag-server.a3c1.starter-us-west-1.openshiftapps.com'
};
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map