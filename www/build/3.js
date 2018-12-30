webpackJsonp([3],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpagePageModule", function() { return MainpagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainpage__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainpagePageModule = /** @class */ (function () {
    function MainpagePageModule() {
    }
    MainpagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mainpage__["a" /* MainpagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mainpage__["a" /* MainpagePage */]),
            ],
        })
    ], MainpagePageModule);
    return MainpagePageModule;
}());

//# sourceMappingURL=mainpage.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpagePage; });
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
 * Generated class for the MainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainpagePage = /** @class */ (function () {
    function MainpagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MainpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainpagePage');
    };
    MainpagePage.prototype.openprofile = function () {
        this.navCtrl.push("Profile");
    };
    MainpagePage.prototype.openSubService = function () {
        this.navCtrl.push("SubservicePage");
    };
    MainpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mainpage',template:/*ion-inline-start:"D:\Yousef2\trunk\src\pages\mainpage\mainpage.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="text-center">الصفحة الرئيسية</ion-title>\n\n\n    <button class="menuButton" end ion-button clear menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- [ngClass]="language === \'en\' ?\'iconEn\':\'iconAr\'" -->\n\n  <div (click)="openSubService()" class="service-item animated fadeInDown">\n\n    <img class="img-service" src="./assets/icon/avatar.jpg" alt="service-item">\n\n    <h4>Service 1 test</h4>\n\n  </div>\n\n  <div (click)="openSubService()" class="service-item animated fadeInDown">\n\n    <img class="img-service" src="./assets/icon/avatar.jpg" alt="service-item">\n\n    <h4>Service 1 test</h4>\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Yousef2\trunk\src\pages\mainpage\mainpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MainpagePage);
    return MainpagePage;
}());

//# sourceMappingURL=mainpage.js.map

/***/ })

});
//# sourceMappingURL=3.js.map