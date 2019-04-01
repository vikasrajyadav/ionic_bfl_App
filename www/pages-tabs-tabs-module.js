(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./src/app/pages/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/pages/chat/chat.page.ts");







var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"] }])
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chat/chat.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n    <ion-toolbar color=\"primary\">\n        <ion-title no-padding>\n            <ion-item class=\"transparent\" no-padding lines=\"none\">\n                <ion-avatar slot=\"start\" ion-justify-content-start margin-vertical class=\"headerico\">\n                    <img src=\"../../assets/icon/Bitmap.png\">\n                </ion-avatar>\n                <ion-searchbar placeholder=\"Search\" color=\"medium-tint\" no-padding ion-justify-content-center class=\"searchbar\" mode=\"ios\"></ion-searchbar>\n                <ion-icon name=\"notifications\" ion-justify-content-end class=\"notifyico\"></ion-icon>\n            </ion-item>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/chat/chat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ChatPage = /** @class */ (function () {
    function ChatPage(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    ChatPage.prototype.ngOnInit = function () {
    };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.page.html */ "./src/app/pages/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/pages/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"] }])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n    <ion-toolbar color=\"primary\">\n        <ion-title no-padding>\n            <ion-item class=\"transparent\" no-padding lines=\"none\">\n                <ion-avatar slot=\"start\" ion-justify-content-start margin-vertical class=\"headerico\">\n                    <img src=\"../../assets/icon/Bitmap.png\">\n                </ion-avatar>\n                <ion-searchbar placeholder=\"Search\" color=\"medium-tint\" no-padding ion-justify-content-center class=\"searchbar\" mode=\"ios\"></ion-searchbar>\n                <ion-icon name=\"notifications\" ion-justify-content-end class=\"notifyico\"></ion-icon>\n            </ion-item>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    You are logged in now...\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomePage = /** @class */ (function () {
    function HomePage(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/pages/learn/learn.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/learn/learn.module.ts ***!
  \*********************************************/
/*! exports provided: LearnPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnPageModule", function() { return LearnPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _learn_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./learn.page */ "./src/app/pages/learn/learn.page.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");







// Import ng-circle-progress

var LearnPageModule = /** @class */ (function () {
    function LearnPageModule() {
    }
    LearnPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _learn_page__WEBPACK_IMPORTED_MODULE_6__["LearnPage"] }]),
                // Specify ng-circle-progress as an import
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot()
            ],
            declarations: [_learn_page__WEBPACK_IMPORTED_MODULE_6__["LearnPage"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], LearnPageModule);
    return LearnPageModule;
}());



/***/ }),

/***/ "./src/app/pages/learn/learn.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/learn/learn.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n    <ion-toolbar color=\"primary\">\n        <ion-title no-padding>\n            <ion-item class=\"transparent\" no-padding lines=\"none\">\n                <ion-avatar slot=\"start\" ion-justify-content-start margin-vertical class=\"headerico\">\n                    <img src=\"../../assets/icon/Bitmap.png\">\n                </ion-avatar>\n                <ion-searchbar placeholder=\"Search\" color=\"medium-tint\" no-padding ion-justify-content-center class=\"searchbar\" mode=\"ios\"></ion-searchbar>\n                <ion-icon name=\"notifications\" ion-justify-content-end class=\"notifyico\"></ion-icon>\n            </ion-item>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-toolbar>\n    <ion-segment [(ngModel)]=\"mainTabType\" scrollable>\n        <ion-segment-button [value]=\"tab.name\" *ngFor=\"let tab of tabsWithType\">\n            <ion-label class=\"tabLabel\">{{ tab.name }}</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n</ion-toolbar>\n\n<ion-content padding class=\"learnmain\">\n    <div class=\"topHeader\">\n        <h5 class=\"topHead\">{{ coursesList.length }} Courses</h5>\n        <p class=\"subhead\">2 CLASSROOM . 10 Online</p>\n    </div>\n\n    <ion-segment mode=\"ios\" [(ngModel)]=\"selectedTab\" padding class=\"ionBtn\">\n        <ion-segment-button [value]=\"btn.name\" *ngFor=\"let btn of buttonGroup\" class=\"segbtn\" mode=\"ios\">\n            <ion-label class=\"subtabLabel\">{{ btn.name }}</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <ion-grid>\n        <ion-card class=\"coursecard\" *ngFor=\"let cards of filterCourseList;let i = index\" (click)=\"goToModules(cards,i)\">\n            <ion-row class=\"headrrow\">\n                <ion-col size=\"2\" class=\"colMarg\">\n                    <ion-img [src]=\"cards.icon\" class=\"ico\"></ion-img>\n                </ion-col>\n                <ion-col size=\"10\">\n                    <p class=\"cardtitl\">{{ cards.title }}</p>\n                    <p class=\"subtitl\">STAGE 4: {{ cards.stage }}</p>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"footrrow\">\n                <ion-col size=\"3\">\n                    <!-- <circle-progress \n                    [percent]=\"85\" \n                    [radius]=\"30\" \n                    [outerStrokeWidth]=\"2\" \n                    [innerStrokeWidth]=\"1\" \n                    [outerStrokeColor]=\"'#78C000'\" \n                    [innerStrokeColor]=\"'#C7E596'\" \n                    [animation]=\"true\" \n                    [animationDuration]=\"300\">\n                    </circle-progress> -->\n                    <circle-progress\n                        [percent]=\"cards.progressValue\" \n                        [radius]= \"30\"\n                        [space]= \"-5\"\n                        [outerStrokeGradient]= \"true\"\n                        [outerStrokeWidth]= \"5\"\n                        [outerStrokeColor]= \"'#4882c2'\"\n                        [outerStrokeGradientStopColor]= \"'#53a9ff'\"\n                        [innerStrokeColor]= \"'#e7e8ea'\"\n                        [innerStrokeWidth]= \"5\"\n                        [title]= \"\"\n                        [animateTitle]= \"false\"\n                        [animationDuration]= \"1000\"\n                        [showUnits]= \"true\"\n                        [unitsFontSize]= \"20\"\n                        [showSubtitle]= \"false\"\n                        [subtitleFontSize]= \"22\"\n                        [showBackground]= \"false\"\n                        [startFromZero]= \"false\"\n                    >\n                    </circle-progress>\n                </ion-col>\n                <ion-col size=\"6\" no-padding>\n                    <ion-button shape=\"round\" [ngClass]=\"{ 'mandatory': cards.typename === 'Mandatory', 'aspirational': cards.typename === 'Aspirational', 'recommended': cards.typename === 'Recommended' }\">\n                        {{ cards.typename }}\n                    </ion-button>\n                    <p class=\"classrmtxt\">\n                        <ion-icon name=\"easel\" class=\"classIcon\"></ion-icon>\n                        <!-- <ion-icon src=\"/assets/icon/classroom.svg\" class=\"classIcon\"></ion-icon> -->\n                        Classroom\n                    </p>\n                    <p class=\"targetTtile\">{{ cards.courseNo }}/5 | TARGET: {{ cards.targetDate | date: 'dd-MM-yyyy' }}</p>\n                    <!-- <p class=\"targetTtile\">{{ cards.courseNo }}/5</p> \n                    <p class=\"targetTtile\">TARGET: {{ cards.targetDate | date: 'dd-MM-yyyy' }}</p> -->\n                </ion-col>\n                <ion-col size=\"3\" no-padding ion-align-items-baseline>\n                    <ion-row class=\"pullBottom\">\n                        <div class=\"roundico\">\n                            <ion-icon name=\"eye\" shape=\"round\"></ion-icon>\n                        </div>\n                        <div class=\"roundico\">\n                            <ion-icon name=\"refresh\" shape=\"round\"></ion-icon>\n                        </div>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/learn/learn.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/learn/learn.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-learn .learnmain {\n  --background: #f5f7fa; }\n\napp-learn .coursecard {\n  --background: #fff; }\n\napp-learn .tabLabel {\n  font-size: 3.5vw;\n  font-weight: bold;\n  text-transform: initial; }\n\napp-learn .subtabLabel {\n  font-size: 3vw; }\n\napp-learn .footrrow {\n  margin-bottom: 10px; }\n\napp-learn .item-inner {\n  -webkit-padding-end: 0 !important;\n  padding-inline-end: 0 !important; }\n\napp-learn .ico {\n  width: 32px;\n  height: auto;\n  margin: auto; }\n\napp-learn .colMarg {\n  margin: auto;\n  padding: 0; }\n\napp-learn .cardtitl {\n  margin: 0;\n  font-size: larger;\n  line-height: 23px;\n  color: #161616; }\n\napp-learn .classrmtxt {\n  margin: 10px 0;\n  line-height: 10px;\n  font-size: 14px; }\n\napp-learn .classIcon {\n  --margin: auto;\n  font-size: 12px;\n  margin-right: 8px; }\n\napp-learn .targetTtile {\n  margin: auto;\n  line-height: 27px;\n  font-size: 12px; }\n\napp-learn .mandatory {\n  height: 25px;\n  --background: #ffa045 !important;\n  font-size: 12px;\n  --border-radius: 25px;\n  margin: 8px 0;\n  --box-shadow: none;\n  --ripple-color: #ffa045; }\n\napp-learn .aspirational {\n  --background: rgb(215, 134, 255);\n  height: 25px;\n  font-size: 12px;\n  --border-radius: 25px;\n  margin: 8px 0;\n  --box-shadow: none;\n  --ripple-color: rgb(215, 134, 255); }\n\napp-learn .recommended {\n  --background: rgb(70, 193, 222);\n  height: 25px;\n  font-size: 12px;\n  margin: 8px 0;\n  --border-radius: 25px;\n  --box-shadow: none;\n  --ripple-color: rgb(70, 193, 222); }\n\napp-learn .roundico {\n  padding: 0;\n  height: 32px;\n  width: 32px;\n  margin-right: auto;\n  font-size: 20px;\n  background: #3880ff;\n  border-radius: 50%;\n  text-align: center;\n  color: #fff;\n  line-height: 38px; }\n\napp-learn .pullBottom {\n  position: absolute;\n  bottom: 10px;\n  width: 100%; }\n\napp-learn .btngrp:fir .tabbuttn {\n  width: auto;\n  --background: #3880ff; }\n\napp-learn .subtitl {\n  margin: 0;\n  font-size: small;\n  line-height: 18px; }\n\napp-learn .toolbar-container {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  -webkit-padding-start: 0 !important;\n  padding-inline-start: 0 !important;\n  -webkit-padding-end: 0 !important;\n  padding-inline-end: 0 !important; }\n\napp-learn .ion-padding,\napp-learn [padding] {\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom: 0 !important; }\n\napp-learn .ionBtn {\n  --border-radius: 25px; }\n\napp-learn .segbtn:first-child {\n  border-bottom-left-radius: 25px;\n  border-top-left-radius: 25px; }\n\napp-learn .segbtn:last-child {\n  border-bottom-right-radius: 25px;\n  border-top-right-radius: 25px; }\n\napp-learn ion-segment-button {\n  min-height: 35px;\n  line-height: 0rem !important;\n  padding-left: 0px;\n  padding-right: 0px; }\n\napp-learn .topHeader {\n  width: 100%;\n  padding: 20px;\n  text-align: justify; }\n\napp-learn .topHead {\n  font-size: large;\n  line-height: 30px;\n  margin: 0; }\n\napp-learn .subhead {\n  margin: 0;\n  font-size: x-small;\n  line-height: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm4vRTpcXE15IERhdGFcXEVkZ2VcXGlvbmljQXBwc1xcZWRnZUlvbmljQXBwL3NyY1xcYXBwXFxwYWdlc1xcbGVhcm5cXGxlYXJuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLHFCQUFhLEVBQUE7O0FBSHJCO0VBT1Esa0JBQWEsRUFBQTs7QUFQckI7RUFXUSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBOztBQWIvQjtFQWlCUSxjQUFjLEVBQUE7O0FBakJ0QjtFQXFCUSxtQkFBbUIsRUFBQTs7QUFyQjNCO0VBd0JRLGlDQUFpQztFQUNqQyxnQ0FBZ0MsRUFBQTs7QUF6QnhDO0VBNEJRLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQTlCcEI7RUFpQ1EsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFsQ2xCO0VBcUNRLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUF4Q3RCO0VBMkNRLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQTdDdkI7RUFnRFEsY0FBUztFQUNULGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFsRHpCO0VBcURRLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQXZEdkI7RUEwRFEsWUFBWTtFQUNaLGdDQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWE7RUFDYix1QkFBZSxFQUFBOztBQWhFdkI7RUFtRVEsZ0NBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWE7RUFDYixrQ0FBZSxFQUFBOztBQXpFdkI7RUE0RVEsK0JBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYixpQ0FBZSxFQUFBOztBQWxGdkI7RUFxRlEsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBOUZ6QjtFQWlHUSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFuR25CO0VBc0dRLFdBQVc7RUFDWCxxQkFBYSxFQUFBOztBQXZHckI7RUEwR1EsU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUE1R3pCO0VBK0dRLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsZ0NBQWdDLEVBQUE7O0FBcEh4Qzs7RUF3SFEsNkJBQWdCO0VBQ2hCLDJCQUFjO0VBQ2QsMkJBQWM7RUFDZCw4QkFBaUIsRUFBQTs7QUEzSHpCO0VBOEhRLHFCQUFnQixFQUFBOztBQTlIeEI7RUFpSVEsK0JBQStCO0VBQy9CLDRCQUE0QixFQUFBOztBQWxJcEM7RUFxSVEsZ0NBQWdDO0VBQ2hDLDZCQUE2QixFQUFBOztBQXRJckM7RUF5SVEsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBNUkxQjtFQStJUSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQWpKM0I7RUFvSlEsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixTQUFTLEVBQUE7O0FBdEpqQjtFQXlKUSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhcm4vbGVhcm4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWxlYXJuIHtcbiAgICAubGVhcm5tYWlue1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgICB9XG5cbiAgICAuY291cnNlY2FyZHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cblxuICAgIC50YWJMYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAzLjV2dztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgIH1cblxuICAgIC5zdWJ0YWJMYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgfVxuXG4gICAgLmZvb3Rycm93IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLml0ZW0taW5uZXIge1xuICAgICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaWNvIHtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAuY29sTWFyZyB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLmNhcmR0aXRsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIGNvbG9yOiAjMTYxNjE2O1xuICAgIH1cbiAgICAuY2xhc3NybXR4dCB7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuY2xhc3NJY29uIHtcbiAgICAgICAgLS1tYXJnaW46IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICAgIC50YXJnZXRUdGlsZSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLm1hbmRhdG9yeSB7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZhMDQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIC0tcmlwcGxlLWNvbG9yOiAjZmZhMDQ1O1xuICAgIH1cbiAgICAuYXNwaXJhdGlvbmFsIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjE1LCAxMzQsIDI1NSk7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLS1yaXBwbGUtY29sb3I6IHJnYigyMTUsIDEzNCwgMjU1KTtcbiAgICB9XG4gICAgLnJlY29tbWVuZGVkIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoNzAsIDE5MywgMjIyKTtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAtLXJpcHBsZS1jb2xvcjogcmdiKDcwLCAxOTMsIDIyMik7XG4gICAgfVxuICAgIC5yb3VuZGljbyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIH1cbiAgICAucHVsbEJvdHRvbSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmJ0bmdycDpmaXIgLnRhYmJ1dHRuIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgICB9XG4gICAgLnN1YnRpdGwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIH1cbiAgICAudG9vbGJhci1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmlvbi1wYWRkaW5nLFxuICAgIFtwYWRkaW5nXSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaW9uQnRuIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIH1cbiAgICAuc2VnYnRuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgICB9XG4gICAgLnNlZ2J0bjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgIH1cbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICBtaW4taGVpZ2h0OiAzNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIH1cbiAgICAudG9wSGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuICAgIC50b3BIZWFkIHtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLnN1YmhlYWQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/learn/learn.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/learn/learn.page.ts ***!
  \*******************************************/
/*! exports provided: LearnPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnPage", function() { return LearnPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LearnPage = /** @class */ (function () {
    function LearnPage(storage, router) {
        this.storage = storage;
        this.router = router;
        this.tabsWithType = [
            { id: 1, name: 'All' },
            { id: 2, name: 'Mandatory' },
            { id: 3, name: 'Recommended' },
            { id: 4, name: 'Aspirational' },
        ];
        this.buttonGroup = [
            { id: 1, name: 'Current Courses' },
            { id: 2, name: 'Upcoming Courses' },
            { id: 3, name: 'Completed Courses' },
        ];
        this.selectedTab = 'Current Courses';
        this.mainTabType = 'All';
        this.coursesList = [
            { icon: 'assets/icon/purpleIcon.png',
                title: 'Sales and Marketing',
                stage: 'Market Analysis',
                type: ['Mandatory', 'All'],
                typename: 'Mandatory',
                courseNo: 3,
                targetDate: Date.now(),
                progressValue: 50,
                isOnline: true
            },
            { icon: 'assets/icon/OrangeIcon.png',
                title: 'Sales and Marketing',
                stage: 'Market Analysis',
                type: ['Aspirational', 'All'],
                typename: 'Aspirational',
                courseNo: 3,
                targetDate: Date.now(),
                progressValue: 46,
                isOnline: false
            },
            { icon: 'assets/icon/purpleIcon.png',
                title: 'Sales and Marketing',
                stage: 'Market Analysis',
                type: ['Recommended', 'All', 'Mandatory'],
                typename: 'Recommended',
                courseNo: 3,
                targetDate: Date.now(),
                progressValue: 22
            },
            { icon: 'assets/icon/OrangeIcon.png',
                title: 'Sales and Marketing',
                stage: 'Market Analysis',
                type: ['Mandatory', 'All'],
                typename: 'Mandatory',
                courseNo: 3,
                targetDate: Date.now(),
                progressValue: 35
            },
            { icon: 'assets/icon/purpleIcon.png',
                title: 'Sales and Marketing',
                stage: 'Market Analysis',
                type: ['Aspirational', 'All'],
                typename: 'Aspirational',
                courseNo: 3,
                targetDate: Date.now(),
                progressValue: 90,
                isOnline: true
            },
            { icon: 'assets/icon/OrangeIcon.png',
                title: 'Sales and Marketing',
                stage: 'Market Analysis',
                type: ['Recommended', 'All'],
                typename: 'Recommended',
                courseNo: 3,
                targetDate: Date.now(),
                progressValue: 67,
                isOnline: false
            },
            { icon: 'assets/icon/purpleIcon.png',
                title: 'Sales and Marketing',
                stage: 'Market Analysis',
                type: ['Mandatory', 'All'],
                typename: 'Mandatory',
                courseNo: 3,
                targetDate: Date.now(),
                progressValue: 56,
                isOnline: false
            },
            { icon: 'assets/icon/OrangeIcon.png',
                title: 'Sales and Marketing',
                stage: 'Market Analysis',
                type: ['Aspirational', 'All'],
                typename: 'Aspirational',
                courseNo: 3,
                targetDate: Date.now(),
                progressValue: 43,
                isOnline: true
            }
        ];
        this.filterCourseList = [];
        this.filterCourseList = this.getCourseListByType('All');
        console.log(this.filterCourseList);
    }
    LearnPage.prototype.ngOnInit = function () {
    };
    LearnPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev);
    };
    LearnPage.prototype.getCourselist = function (typename) {
        this.filterCourseList = this.getCourseListByType(typename);
    };
    LearnPage.prototype.getCourseListByType = function (type) {
        return this.coursesList.filter(function (m) {
            return m.type.indexOf(type) !== -1;
        });
    };
    LearnPage.prototype.goToModules = function (currentCourse, currentIndex) {
        console.log(currentIndex, currentCourse);
        this.router.navigateByUrl('/module');
    };
    LearnPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-learn',
            template: __webpack_require__(/*! ./learn.page.html */ "./src/app/pages/learn/learn.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./learn.page.scss */ "./src/app/pages/learn/learn.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LearnPage);
    return LearnPage;
}());



/***/ }),

/***/ "./src/app/pages/pulse/pulse.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/pulse/pulse.module.ts ***!
  \*********************************************/
/*! exports provided: PulsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulsePageModule", function() { return PulsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pulse_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pulse.page */ "./src/app/pages/pulse/pulse.page.ts");







var PulsePageModule = /** @class */ (function () {
    function PulsePageModule() {
    }
    PulsePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _pulse_page__WEBPACK_IMPORTED_MODULE_6__["PulsePage"] }])
            ],
            declarations: [_pulse_page__WEBPACK_IMPORTED_MODULE_6__["PulsePage"]]
        })
    ], PulsePageModule);
    return PulsePageModule;
}());



/***/ }),

/***/ "./src/app/pages/pulse/pulse.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/pulse/pulse.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n    <ion-toolbar color=\"primary\">\n        <ion-title no-padding>\n            <ion-item class=\"transparent\" no-padding lines=\"none\">\n                <ion-avatar slot=\"start\" ion-justify-content-start margin-vertical class=\"headerico\">\n                    <img src=\"../../assets/icon/Bitmap.png\">\n                </ion-avatar>\n                <ion-searchbar placeholder=\"Search\" color=\"medium-tint\" no-padding ion-justify-content-center class=\"searchbar\" mode=\"ios\"></ion-searchbar>\n                <ion-icon name=\"notifications\" ion-justify-content-end class=\"notifyico\"></ion-icon>\n            </ion-item>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/pulse/pulse.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/pulse/pulse.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1bHNlL3B1bHNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/pulse/pulse.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/pulse/pulse.page.ts ***!
  \*******************************************/
/*! exports provided: PulsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulsePage", function() { return PulsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PulsePage = /** @class */ (function () {
    function PulsePage() {
    }
    PulsePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pulse',
            template: __webpack_require__(/*! ./pulse.page.html */ "./src/app/pages/pulse/pulse.page.html"),
            styles: [__webpack_require__(/*! ./pulse.page.scss */ "./src/app/pages/pulse/pulse.page.scss")]
        })
    ], PulsePage);
    return PulsePage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/pages/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var _pulse_pulse_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pulse/pulse.module */ "./src/app/pages/pulse/pulse.module.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chat/chat.module */ "./src/app/pages/chat/chat.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/home.module */ "./src/app/pages/home/home.module.ts");
/* harmony import */ var _learn_learn_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../learn/learn.module */ "./src/app/pages/learn/learn.module.ts");











var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_8__["ChatPageModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomePageModule"],
                _pulse_pulse_module__WEBPACK_IMPORTED_MODULE_7__["PulsePageModule"],
                _learn_learn_module__WEBPACK_IMPORTED_MODULE_10__["LearnPageModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"home\">\n            <ion-icon name=\"home\"></ion-icon>\n            <ion-label>Home</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"pulse\">\n            <ion-icon name=\"pulse\"></ion-icon>\n            <ion-label>Pulse</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"learn\">\n            <ion-icon name=\"bookmarks\"></ion-icon>\n            <ion-label>Learn</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"chat\">\n            <ion-icon name=\"chatboxes\"></ion-icon>\n            <ion-label>Chat</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button (click)=\"doLogout()\">\n            <ion-icon name=\"power\"></ion-icon>\n            <ion-label>Logout</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TabsPage = /** @class */ (function () {
    function TabsPage(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    TabsPage.prototype.doLogout = function () {
        this.storage.remove('currentUser');
        this.router.navigateByUrl('/login');
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/pages/tabs/tabs.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.router.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/tabs.router.module.ts ***!
  \**************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _chat_chat_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat/chat.page */ "./src/app/pages/chat/chat.page.ts");
/* harmony import */ var _pulse_pulse_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pulse/pulse.page */ "./src/app/pages/pulse/pulse.page.ts");
/* harmony import */ var _learn_learn_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../learn/learn.page */ "./src/app/pages/learn/learn.page.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../guard/auth.guard */ "./src/app/guard/auth.guard.ts");









// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/tabs/(home:home)',
//     pathMatch: 'full',
//     canActivate: [AuthGuard],
//   },
//   {
//     path: 'tabs',
//     component: TabsPage,
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: '',
//         redirectTo: '/tabs/(home:home)',
//         pathMatch: 'full',
//       },
//       {
//         path: 'home',
//         outlet: 'home',
//         component: HomePage
//       },
//       {
//         path: 'about',
//         outlet: 'about',
//         component: AboutPage
//       },
//       {
//         path: 'contact',
//         outlet: 'contact',
//         component: ContactPage
//       }
//     ]
//   }
// ];
var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        // loadChildren: '../tab1/tab1.module#Tab1PageModule'
                        component: _home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
                    }
                ]
            },
            {
                path: 'pulse',
                children: [
                    {
                        path: '',
                        // loadChildren: '../tab2/tab2.module#Tab2PageModule'
                        component: _pulse_pulse_page__WEBPACK_IMPORTED_MODULE_6__["PulsePage"],
                    }
                ]
            },
            {
                path: 'learn',
                children: [
                    {
                        path: '',
                        // loadChildren: '../tab3/tab3.module#Tab3PageModule'
                        component: _learn_learn_page__WEBPACK_IMPORTED_MODULE_7__["LearnPage"],
                    }
                ]
            },
            {
                path: 'chat',
                children: [
                    {
                        path: '',
                        // loadChildren: '../tab3/tab3.module#Tab3PageModule'
                        component: _chat_chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"],
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module.js.map