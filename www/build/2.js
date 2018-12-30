webpackJsonp([2],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPageModule = /** @class */ (function () {
    function OrderPageModule() {
    }
    OrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
            ],
        })
    ], OrderPageModule);
    return OrderPageModule;
}());

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
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
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hours = 1;
        this.no_patients = 0;
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    OrderPage.prototype.plus = function () {
        console.log(this.no_patients, 'sssssssss');
        this.no_patients++;
    };
    OrderPage.prototype.minus = function () {
        if (this.no_patients == 0) {
            this.no_patients = 0;
        }
        else {
            this.no_patients--;
        }
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"D:\Yousef2\trunk\src\pages\order\order.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="text-center">Order </ion-title>\n\n\n    <button class="menuButton" end ion-button clear menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- [ngClass]="language === \'en\' ?\'iconEn\':\'iconAr\'" -->\n\n  <div class="item1 animated fadeInDown">\n    <div class="main-Info">\n\n\n      <img class="img-service" src="assets/icon/avatar.jpg" alt="order-item">\n\n      <h3 class="order-head">Basic Care</h3>\n      <h6 class="description">\n\n\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s\n        standard dummy text ever since the 1500s,\n      </h6>\n\n\n\n    </div>\n  </div>\n\n  <div class="gender animated fadeInDown">\n\n    <h6 class="gender-head">Nurse Gender</h6>\n    <div ion-row radio-group>\n      <div col-4>\n        <ion-radio value="Any" checked>\n\n        </ion-radio>\n        <span class="span">Any</span>\n      </div>\n      <div col-4>\n        <ion-radio value="male"></ion-radio>\n        <span class="span">Male</span>\n      </div>\n      <div col-4>\n        <ion-radio value="female"></ion-radio>\n        <span class="span">Female</span>\n      </div>\n    </div>\n\n\n  </div>\n\n\n\n\n\n\n  <div class="gender animated fadeInDown">\n\n    <div ion-row>\n      <div col-6>\n        <h6 class="gender-head">Number of Patients</h6>\n\n      </div>\n\n      <div col-6>\n        <button class="plus-btn" col-2 ion-button color="dark" (click)="plus()">\n\n          <ion-icon name="ios-add-outline"></ion-icon>\n        </button>\n        <span class=\'span\' style="margin-right: 5px">{{no_patients}}</span>\n        <button class="plus-btn" col-2 ion-button color="dark" (click)="minus()">\n\n          <ion-icon name="ios-remove-outline"></ion-icon>\n\n        </button>\n\n\n      </div>\n\n    </div>\n\n\n  </div>\n\n  <div class="gender animated fadeInDown">\n\n    <h6 class="gender-head">Servicre Duration </h6>\n\n    <div ion-row>\n\n\n      <ion-range col-9 style="padding: 0; margin: 0 15px; margin-right:0" [(ngModel)]="hours" color="primary" pin="true"\n        max="10" step="1"></ion-range>\n\n      <span col-2 style="margin: 0">\n        {{hours}} Hrs\n      </span>\n    </div>\n  </div>\n  <div class="gender animated fadeInDown">\n    <button ion-button block round type="button" class="animated fadeInDown app-btn">\n      Continuous\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Yousef2\trunk\src\pages\order\order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=2.js.map