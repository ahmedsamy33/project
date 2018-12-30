webpackJsonp([4],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.openPage = function (namePage) {
        this.navCtrl.setRoot(namePage);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\ClinicProject.git\trunk\src\pages\login\login.html"*/'<ion-content padding class="login-form" style=" background: url(\'./../assets/imgs/mainbg.jpg\') no-repeat center center fixed;\n-webkit-background-size: cover;\n-moz-background-size: cover;\n-o-background-size: cover;\nbackground-size: cover;\n"\n  overflow-scroll="false">\n\n  <!-- <div class="overlay"></div> -->\n  <div class="logo animated fadeInDown">\n    <img src="./../assets/imgs/logo.1.png">\n  </div>\n  <form>\n    <ion-list>\n      <!-- mobNo. field -->\n      <ion-item style="    margin-bottom: 11px;\n            " class="item1 animated fadeInDown">\n        <ion-label floating>\n          <ion-icon name="ios-call"></ion-icon>\n          رقم التلفون\n        </ion-label>\n        <ion-input name="phone" type="text" required></ion-input>\n      </ion-item>\n      <!-- <p class="validationHint">هذا الحقل يجب ألا يقل عن 11 رقم</p> -->\n      <!-- password field -->\n      <ion-item class="item2 animated fadeInDown">\n        <ion-label floating>\n          <ion-icon name="ios-lock-outline"></ion-icon>\n          كلمة المرور\n        </ion-label>\n        <ion-input name="password" type="password" required></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <!-- form Btns -->\n\n    <button ion-button block type="button" class="animated fadeInDown app-btn" (click)="openPage(\'MainpagePage\')">\n      تسجيل\n      الدخول</button>\n\n    <ion-item class="checkbox fadeInDown border-bottom">\n      <ion-row style="width: 100%">\n        <ion-col>\n          <input class="checkbox-custom myinput" type="checkbox">\n          <p class="remeber">تذكر لى </p>\n\n        </ion-col>\n        <ion-col>\n          <p class="remeber">\n            نسيت كلمة المرور ؟\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item class="fadeInDown">\n      <ion-row style="width: 100%">\n        <ion-col>\n          <p class="remeber"> ليس لديك حساب؟\n          </p>\n\n        </ion-col>\n        <ion-col>\n          <p class="remeber" (click)="openPage(\'SignupPage\')">\n            انشىء حساب جديد ؟\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\ClinicProject.git\trunk\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=4.js.map