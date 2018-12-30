webpackJsonp([1],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.openPage = function (namePage) {
        this.navCtrl.setRoot(namePage);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\Yousef2\trunk\src\pages\signup\signup.html"*/'<ion-content padding class="signup-form" overflow-scroll="false">\n\n  <ion-navbar></ion-navbar>\n\n  <div class="logo animated fadeInDown">\n    <img src="./../assets/imgs/logo.1.png" alt="shuryan-logo">\n  </div>\n  <form>\n\n    <ion-list>\n\n\n\n      <!-- Email field -->\n      <ion-item class="item1 animated fadeInDown">\n        <ion-label floating>\n          <ion-icon name="ios-mail"></ion-icon>\n          email\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n      <!-- <p class="validationHint" *ngIf="hasError(\'email\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'email\', \'email\')">{{ \'minLenght8\' | translate }}</p> -->\n\n\n\n      <!-- fullName field -->\n      <ion-item class="item1 animated fadeInDown">\n        <ion-label floating>\n          <ion-icon name="ios-contact"></ion-icon>\n          userName\n        </ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <!-- <p class="validationHint" *ngIf="hasError(\'username\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'username\', \'minlength\')">{{ \'minLenght8\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'username\', \'maxlength\')">{{ \'maxLenght\' | translate }}</p> -->\n      <!-- mobNo. field -->\n      <ion-item class="item2 animated fadeInDown">\n        <ion-label floating>\n          <ion-icon name="ios-phone-portrait-outline"></ion-icon>\n          phoneOrEmail\n        </ion-label>\n        <ion-input type="tel"></ion-input>\n      </ion-item>\n      <!-- <p class="validationHint" *ngIf="hasError(\'phonenumber\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'phonenumber\', \'pattern\')">أدخل رقم موبايل صحيح</p>\n          <p class="validationHint" *ngIf="hasError(\'phonenumber\', \'minlength\')">{{ \'minLenght11\' | translate }}</p> -->\n\n\n      <!-- address. field -->\n      <ion-item class="item2 animated fadeInDown">\n        <ion-label floating>\n          <ion-icon name="ios-navigate"></ion-icon>\n          address\n        </ion-label>\n        <ion-input type="tel"></ion-input>\n      </ion-item>\n      <!-- <p class="validationHint" *ngIf="hasError(\'address\', \'required\')">{{ \'require\' | translate }}</p>\n\n                  <p class="validationHint" *ngIf="hasError(\'address\', \'maxLenght\')">{{ \'maxLenght\' | translate }}</p> -->\n\n\n      <!-- Key. field -->\n      <ion-item class="item2 animated fadeInDown">\n        <ion-label floating>\n          <ion-icon name="ios-key"></ion-icon>\n          Key\n        </ion-label>\n        <ion-input type="tel"></ion-input>\n      </ion-item>\n      <!-- <p class="validationHint" *ngIf="hasError(\'Key\', \'required\')">{{ \'require\' | translate }}</p> -->\n\n\n\n      <!-- password field -->\n      <ion-item class="item3 animated fadeInDown">\n        <ion-label floating>\n          <ion-icon name="ios-lock-outline"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n      <!-- <p class="validationHint" *ngIf="hasError(\'password\', \'required\')">{{ \'require\' | translate }}</p>\n          <span class="validationHint">\n          <p *ngIf="hasError(\'password\', \'minlength\')">{{ \'minLenght8\' | translate }}</p>\n          <p *ngIf="hasError(\'password\', \'maxlength\')">{{ \'maxLenghtNumChar\' | translate }}</p>\n\n    </span> -->\n\n      <!-- confirm password field -->\n      <ion-item class="item4 animated fadeInDown">\n        <ion-label floating>\n          <ion-icon name="ios-lock-outline"></ion-icon>\n          confirmPassword\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n      <!-- <div *ngIf="userconPassword !=null">\n              <p class="validationHint" *ngIf="!matchingPasswords(userPassword,userconPassword)">{{ \'notMatch\' | translate }}</p>\n          </div> -->\n    </ion-list>\n    <!-- <p class="noMatchUserOrPass animated fadeInDown" *ngIf="isCorrect">{{ \'userExist\' | translate }}</p> -->\n\n    <!-- form Btns -->\n    <button ion-button block type="submit" class="animated fadeInDown app-btn">singUp</button>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Yousef2\trunk\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=1.js.map