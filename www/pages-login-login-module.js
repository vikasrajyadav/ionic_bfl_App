(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n    <ion-toolbar color=\"primary\">\n        <ion-title>\n            <div text-start class=\"toolbartitl\">\n                Sign In\n            </div>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"main\">\n    <div class=\"contents \">\n        <ion-grid class=\"gridsss \">\n\n            <ion-row class=\"\">\n                <ion-col>\n                    <h3 class=\"headingtxt\">Please fill the details</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"\">\n                <ion-col>\n                    <ion-item class=\" transparent\" transparent>\n                        <ion-label position=\"floating\" no-padding>Email</ion-label>\n                        <ion-input type=\"email\" autocomplete=\"off\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"\">\n                <ion-col>\n                    <ion-item class=\"transparent\">\n                        <ion-label position=\"floating\" no-padding>Password</ion-label>\n                        <ion-input type=\"{{type}}\" name=\"password\" ngModel #password=\"ngModel\" required pattern=\".{4,10}\"></ion-input>\n\n                        <ion-icon *ngIf=\"!showPass\" name=\"eye\" color=\"primary\" slot=\"end\" class=\"passwordIcon\" (click)=\"showPassword()\"></ion-icon>\n                        <ion-icon *ngIf=\"showPass\" name=\"eye\" color=\"primary\" slot=\"end\" class=\"passwordIcon\" (click)=\"showPassword()\"></ion-icon>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row no-padding class=\"martop \">\n                <ion-col justify-content-start col-6 no-padding>\n                    <!-- <ion-checkbox color=\"primary\"></ion-checkbox>\n          <ion-label>Remember Me</ion-label> -->\n                    <ion-item lines=\"none\" no-padding class=\"transparent\">\n                        <ion-label class=\"labeltxt\">Remember Me</ion-label>\n                        <ion-checkbox slot=\"start\" class=\"checkmar\"></ion-checkbox>\n                    </ion-item>\n                </ion-col>\n                <ion-col justify-content-end col-6 no-padding>\n                    <!-- <ion-label text-end>\n            <a>Forgot Password?</a>\n          </ion-label> -->\n                    <ion-item lines=\"none\" class=\"transparent\" no-padding text-end>\n                        <ion-label class=\"labeltxt\">\n                            <a>Forgot Password?</a>\n                        </ion-label>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class=\"martop\">\n                <ion-button class=\"fullwidth\" color=\"primary\" shape=\"round\" (click)=\"login()\">Sign In</ion-button>\n            </ion-row>\n\n        </ion-grid>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".semi-roundbtn {\n  background: blue;\n  width: 200px;\n  height: 80px;\n  line-height: 80px;\n  font-size: 20px;\n  color: #fff; }\n\n.headingtxt {\n  font-size: 20px;\n  margin: 0; }\n\n.checkmar {\n  margin: 0;\n  margin-right: 9px;\n  width: 15px;\n  height: 15px; }\n\n.martop {\n  margin-top: 10px; }\n\n.fullwidth {\n  width: 100%; }\n\n.labeltxt {\n  font-size: 14px; }\n\n.contents {\n  background-image: Url(\"../../assets/images/background.png\");\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 0 !important; }\n\n.transparent {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n\n.transparent .item-native {\n    --background: transparent;\n    --ion-color-base: transparent !important; }\n\n.main {\n  padding: 0 !important;\n  margin: 0 !important; }\n\n.passwordIcon {\n  margin: 0;\n  margin-top: 28px;\n  cursor: pointer; }\n\n.toolbartitl {\n  color: #fff;\n  font-size: 20px;\n  padding: 0 20px; }\n\n.ion-padding,\n[padding] {\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom: 0 !important; }\n\n.gridsss {\n  height: 100%;\n  justify-content: center;\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXE15IERhdGFcXEVkZ2VcXGlvbmljQXBwc1xcZWRnZUlvbmljQXBwL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFHYjtFQUNJLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksMkRBQTJEO0VBQzNELFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFLSSx5QkFBYTtFQUNiLHdDQUFpQixFQUFBOztBQU5yQjtJQUVRLHlCQUFhO0lBQ2Isd0NBQWlCLEVBQUE7O0FBTXpCO0VBQ0kscUJBQXFCO0VBQ3JCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjs7RUFFSSw2QkFBZ0I7RUFDaEIsMkJBQWM7RUFDZCwyQkFBYztFQUNkLDhCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbWktcm91bmRidG4ge1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5oZWFkaW5ndHh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNoZWNrbWFyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tYXJ0b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmZ1bGx3aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxhYmVsdHh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnRlbnRzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IFVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQge1xyXG4gICAgLml0ZW0tbmF0aXZlIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYXNzd29yZEljb24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRvb2xiYXJ0aXRsIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uaW9uLXBhZGRpbmcsXHJcbltwYWRkaW5nXSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyaWRzc3Mge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var LoginPage = /** @class */ (function () {
    function LoginPage(storage, router) {
        this.storage = storage;
        this.router = router;
        this.type = 'password';
        this.showPass = false;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    LoginPage.prototype.login = function () {
        this.storage.set('currentUser', 'test');
        this.router.navigateByUrl('/interests');
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map