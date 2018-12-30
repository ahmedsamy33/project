webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubservicePageModule", function() { return SubservicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subservice__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubservicePageModule = /** @class */ (function () {
    function SubservicePageModule() {
    }
    SubservicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__subservice__["a" /* SubservicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subservice__["a" /* SubservicePage */]),
            ],
        })
    ], SubservicePageModule);
    return SubservicePageModule;
}());

//# sourceMappingURL=subservice.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubservicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SubservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubservicePage = /** @class */ (function () {
    function SubservicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubservicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubservicePage');
    };
    SubservicePage.prototype.openOrder = function () {
        this.navCtrl.push("OrderPage");
    };
    SubservicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subservice',template:/*ion-inline-start:"E:\ClinicProject.git\trunk\src\pages\subservice\subservice.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="text-center"> sub service</ion-title>\n\n\n\n\n\n    <button class="menuButton" end ion-button clear menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <button [ngClass]="language === \'en\' ?\'left\':\'right\'" (click)="back()" class="backButton" ion-button clear>\n      <ion-icon  *ngIf="language == \'ar\'"  ios="ios-arrow-back" md="md-arrow-back">\n\n      </ion-icon>\n\n\n      <ion-icon   *ngIf="language == \'en\'" ios="ios-arrow-back" md="md-arrow-back">\n\n        </ion-icon>\n\n    </button> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- [ngClass]="language === \'en\' ?\'iconEn\':\'iconAr\'" -->\n\n  <div (click)="openOrder()" class="service-item animated fadeInDown">\n\n    <img class="img-service" src="assets/icon/avatar.jpg" alt="sub service-item">\n\n    <h4>Sub Service 1 test</h4>\n\n  </div>\n\n\n  <div (click)="openOrder()" class="service-item animated fadeInDown">\n\n    <img class="img-service" src="assets/icon/avatar.jpg" alt="sub service-item">\n\n    <h4>Sub Service 1 test</h4>\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\ClinicProject.git\trunk\src\pages\subservice\subservice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SubservicePage);
    return SubservicePage;
}());

//# sourceMappingURL=subservice.js.map

/***/ })

});
//# sourceMappingURL=0.js.map