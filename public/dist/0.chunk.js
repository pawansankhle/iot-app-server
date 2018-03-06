webpackJsonp([0],{

/***/ "../../../../../src/app/shared/models/state.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export State */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateArray; });
var State;
(function (State) {
    State[State["ON"] = 0] = "ON";
    State[State["OFF"] = 1] = "OFF";
})(State || (State = {}));
var StateArray = ['ON', 'OFF'];
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/state.enum.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/status.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Status */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusArray; });
var Status;
(function (Status) {
    Status[Status["ONLINE"] = 0] = "ONLINE";
    Status[Status["OFFLINE"] = 1] = "OFFLINE";
})(Status || (Status = {}));
var StatusArray = ['ONLINE', 'OFFLINE'];
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/status.enum.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/type.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Type */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return typeArray; });
var Type;
(function (Type) {
    Type[Type["SENSOR"] = 0] = "SENSOR";
    Type[Type["BUTTON"] = 1] = "BUTTON";
})(Type || (Type = {}));
var typeArray = ['SENSOR', 'BUTTON'];
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/type.enum.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/device/add-device/add-device.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card.add-card mat-card-content{\n margin-top: 16px;\n}\nmat-card.add-card mat-form-field{\n    width: 95%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/device/add-device/add-device.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"deviceForm\">\n  <div class=\"main-content\">\n      <mat-card class=\"add-card\">\n          <mat-card-header>\n              <mat-card-title>\n                <button mat-icon-button>\n                    <mat-icon routerLink=\"/device\" aria-label=\"back to device\" class=\"zmdi zmdi-arrow-left back-icon\"></mat-icon>\n                </button>\n                <span class=\"title\">Add Device</span>\n              </mat-card-title>\n          </mat-card-header>\n          <mat-divider></mat-divider>\n          <mat-card-content>\n            \n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n              <div fxFlex=\"50\">\n                  <mat-form-field>\n                      <input matInput placeholder=\"Device Id\" [formControl]=\"device_id\">\n                      <mat-error *ngIf=\"device_id.invalid\">{{errMsgSrv.getFormErrorMessage(device_id)}}</mat-error>\n                    </mat-form-field>\n              </div>\n\n              <div fxFlex=\"50\">\n                  <mat-form-field>\n                      <mat-select placeholder=\"Device Type\" [formControl]=\"type\">\n                          <mat-option  value=\"\">--please select--</mat-option>\n                          <mat-option *ngFor=\"let dtype of deviceTypes\" value=\"{{dtype}}\">\n                            {{ dtype }}\n                          </mat-option>\n                      </mat-select>\n                      <mat-error *ngIf=\"type.invalid\">{{errMsgSrv.getFormErrorMessage(type)}}</mat-error>\n                    </mat-form-field>\n              </div>\n            </div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n                <div fxFlex=\"50\">\n                    <mat-form-field>\n                        <mat-select placeholder=\"Device State\" [formControl]=\"state\">\n                            <mat-option  value=\"\">--please select--</mat-option>\n                            <mat-option *ngFor=\"let stateItem of deviceStates\" value=\"{{stateItem}}\">\n                              {{ stateItem }}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"state.invalid\">{{errMsgSrv.getFormErrorMessage(state)}}</mat-error>\n                      </mat-form-field>\n                </div>\n  \n                <div fxFlex=\"50\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"lat,lng\" [formControl]=\"location\">\n                        <mat-error *ngIf=\"location.invalid\">{{errMsgSrv.getFormErrorMessage(location)}}</mat-error>\n                      </mat-form-field>\n                </div>\n              </div>\n\n          </mat-card-content>\n          <mat-card-actions>\n              <span fxFlex></span>\n              <button mat-button >Cancel</button>\n              <button mat-raised-button color=\"primary\" [disabled]=\"!deviceForm.valid || disabled\" (click)=\"onDeviceAdd(deviceForm.value)\">Add</button>\n              <span fxFlex=\"3\"></span>\n            </mat-card-actions>\n    </mat-card>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/shared/modules/device/add-device/add-device.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_type_enum__ = __webpack_require__("../../../../../src/app/shared/models/type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_state_enum__ = __webpack_require__("../../../../../src/app/shared/models/state.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_status_enum__ = __webpack_require__("../../../../../src/app/shared/models/status.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_location_service__ = __webpack_require__("../../../../../src/app/shared/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__device_service__ = __webpack_require__("../../../../../src/app/shared/modules/device/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_error_message_service__ = __webpack_require__("../../../../../src/app/shared/services/error.message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDeviceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddDeviceComponent = (function () {
    function AddDeviceComponent(fb, LocationSrv, errMsgSrv, service) {
        this.fb = fb;
        this.LocationSrv = LocationSrv;
        this.errMsgSrv = errMsgSrv;
        this.service = service;
        this.deviceTypes = __WEBPACK_IMPORTED_MODULE_2__models_type_enum__["a" /* typeArray */];
        this.deviceStates = __WEBPACK_IMPORTED_MODULE_3__models_state_enum__["a" /* StateArray */];
        this.deviceStatus = __WEBPACK_IMPORTED_MODULE_4__models_status_enum__["a" /* StatusArray */];
        this.disabled = false;
        this.buildForm();
        this.setDeviceLocation();
    }
    Object.defineProperty(AddDeviceComponent.prototype, "device_id", {
        get: function () { return this.deviceForm.get('device_id'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddDeviceComponent.prototype, "type", {
        get: function () { return this.deviceForm.get('type'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddDeviceComponent.prototype, "location", {
        get: function () { return this.deviceForm.get('location'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddDeviceComponent.prototype, "state", {
        get: function () { return this.deviceForm.get('state'); },
        enumerable: true,
        configurable: true
    });
    AddDeviceComponent.prototype.setDeviceLocation = function () {
        var _this = this;
        this.Userlocation = this.LocationSrv.getCurrentLocation().subscribe(function (location) {
            var cordinates = [];
            cordinates.push(location.coords.latitude);
            cordinates.push(location.coords.longitude);
            console.log(cordinates);
            _this.deviceForm.patchValue({
                'location': cordinates,
            });
        });
    };
    AddDeviceComponent.prototype.buildForm = function () {
        this.deviceForm = this.fb.group({
            'enabled': [true, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([])],
            'deleted': [false, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([])],
            'device_id': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].maxLength(30)])],
            'type': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required])],
            'state': [this.deviceStates[1], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required])],
            'status': [this.deviceStatus[1], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required])],
            'location': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required])],
        });
    };
    AddDeviceComponent.prototype.onDeviceAdd = function (device) {
        console.log(device);
        this.service.create(device);
    };
    AddDeviceComponent.prototype.ngOnInit = function () {
    };
    AddDeviceComponent.prototype.ngOnDestroy = function () {
        this.Userlocation.unsubscribe();
    };
    AddDeviceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-device',
            template: __webpack_require__("../../../../../src/app/shared/modules/device/add-device/add-device.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/device/add-device/add-device.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_location_service__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_error_message_service__["a" /* ErrorMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_error_message_service__["a" /* ErrorMessageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__device_service__["a" /* DeviceService */]) === "function" && _d || Object])
    ], AddDeviceComponent);
    return AddDeviceComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/add-device.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/device/add-device/add-device.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__device_add_device_add_device_component__ = __webpack_require__("../../../../../src/app/shared/modules/device/add-device/add-device.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDeviceRoutes; });

var AddDeviceRoutes = [
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_0__device_add_device_add_device_component__["a" /* AddDeviceComponent */],
        canActivate: [],
        data: {
            breadcrumb: 'add Device'
        }
    },
];
//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/add-device.route.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/device/device.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    max-height: 500px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/device/device.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<mat-toolbar color=\"accent\">\n  <span fxFlex></span>\n  <span>\n  <button mat-icon-button routerLink=\"/device/add\">\n    <mat-icon class=\"zmdi zmdi-plus-square primary-icon\"></mat-icon>\n  </button>\n  </span>\n</mat-toolbar>\n\n<div class=\"main-content\">\n  \n      <mat-table #table  [dataSource]=\"dataSource\" matSort matSortActive=\"DeviceId\" matSortDisableClear matSortDirection=\"asc\" >\n\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"DeviceId\">\n          <mat-header-cell *matHeaderCellDef  mat-sort-header>DeviceId</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.device_id}} </mat-cell>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"Type\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Type </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.type }} </mat-cell>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"State\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> State </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.state}} </mat-cell>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"Status\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.status}} </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n\n      <!-- no data show  start-->\n      <div *ngIf=\"dataSource.data.length == 0\">\n        <h3 style=\"text-align:center;\">\n            <p>\n              <img src=\"assets/icon/no-data-found.png\">\n            </p>\n            no data found...\n        </h3>\n     </div>\n     <!-- no data show  end-->\n\n    <mat-paginator [hidden]=\"dataSource.data.length !== 0\" #paginator\n                  [pageSize]=\"10\"\n                  [pageSizeOptions]=\"[5, 10, 20]\"\n                  >\n    </mat-paginator>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/modules/device/device.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_url_constant__ = __webpack_require__("../../../../../src/app/shared/constants/url.constant.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeviceComponent = (function () {
    function DeviceComponent(http) {
        this.http = http;
        this.displayedColumns = ['DeviceId', 'Type', 'State', 'Status'];
        // 'Enabled', 'Active',  'Location'
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatTableDataSource */]();
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    DeviceComponent.prototype.ngOnInit = function () {
        // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        var _this = this;
        this.http.getWithPagination(__WEBPACK_IMPORTED_MODULE_3__constants_url_constant__["a" /* UrlConstant */].DEVICE_URL, 'deviceId', 'desc', this.paginator.pageIndex)
            .subscribe(function (data) {
            console.log(data);
            _this.dataSource.data = data;
        });
    };
    DeviceComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatPaginator */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatPaginator */]) === "function" && _a || Object)
    ], DeviceComponent.prototype, "paginator", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSort */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSort */]) === "function" && _b || Object)
    ], DeviceComponent.prototype, "sort", void 0);
    DeviceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-light',
            template: __webpack_require__("../../../../../src/app/shared/modules/device/device.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/device/device.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpClientService */]) === "function" && _c || Object])
    ], DeviceComponent);
    return DeviceComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/device.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/device/device.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_device_device_component__ = __webpack_require__("../../../../../src/app/shared/modules/device/device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_routing_module__ = __webpack_require__("../../../../../src/app/shared/modules/device/device.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modules_device_add_device_add_device_component__ = __webpack_require__("../../../../../src/app/shared/modules/device/add-device/add-device.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceModule", function() { return DeviceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DeviceModule = (function () {
    function DeviceModule() {
    }
    DeviceModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__device_routing_module__["a" /* DeviceRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_module__["a" /* SharedModule */]
            ],
            exports: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__shared_modules_device_device_component__["a" /* DeviceComponent */], __WEBPACK_IMPORTED_MODULE_5__shared_modules_device_add_device_add_device_component__["a" /* AddDeviceComponent */]]
        })
    ], DeviceModule);
    return DeviceModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/device.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modules/device/device.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_component__ = __webpack_require__("../../../../../src/app/shared/modules/device/device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_add_device_add_device_route__ = __webpack_require__("../../../../../src/app/shared/modules/device/add-device/add-device.route.ts");
/* unused harmony export DeviceRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DeviceRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__device_component__["a" /* DeviceComponent */],
        canActivate: [],
        data: {
            breadcrumbs: 'Device'
        }
    }
].concat(__WEBPACK_IMPORTED_MODULE_3__device_add_device_add_device_route__["a" /* AddDeviceRoutes */]);
var DeviceRoutingModule = (function () {
    function DeviceRoutingModule() {
    }
    DeviceRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(DeviceRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], DeviceRoutingModule);
    return DeviceRoutingModule;
}());

//# sourceMappingURL=/home/ist/private-workspace/angular/angular-iot/frontend/src/device.routing.module.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map