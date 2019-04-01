(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-module-module-module"],{

/***/ "./src/app/pages/module/module.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/module/module.module.ts ***!
  \***********************************************/
/*! exports provided: ModulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePageModule", function() { return ModulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _module_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module.page */ "./src/app/pages/module/module.page.ts");







var routes = [
    {
        path: '',
        component: _module_page__WEBPACK_IMPORTED_MODULE_6__["ModulePage"]
    }
];
var ModulePageModule = /** @class */ (function () {
    function ModulePageModule() {
    }
    ModulePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_module_page__WEBPACK_IMPORTED_MODULE_6__["ModulePage"]]
        })
    ], ModulePageModule);
    return ModulePageModule;
}());



/***/ }),

/***/ "./src/app/pages/module/module.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/module/module.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n    <ion-toolbar color=\"primary\">\n        <ion-title no-padding>\n            <ion-item class=\"transparent\" no-padding lines=\"none\">\n                <ion-avatar slot=\"start\" ion-justify-content-start margin-vertical class=\"headerico\">\n                    <img src=\"../../assets/icon/Bitmap.png\">\n                </ion-avatar>\n                <ion-searchbar placeholder=\"Search\" color=\"medium-tint\" no-padding ion-justify-content-center class=\"searchbar\" mode=\"ios\"></ion-searchbar>\n                <ion-icon name=\"notifications\" ion-justify-content-end class=\"notifyico\"></ion-icon>\n            </ion-item>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modulemain\">\n\n    <ion-toolbar class=\"moduleToobar\">\n        <ion-buttons slot=\"start\" (click)=\"goToCourse()\">\n            <ion-icon slot=\"icon-only\" name=\"ios-arrow-dropleft\"></ion-icon>\n            <ion-label class=\"backBtnLabel textUppercase\">Back</ion-label>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-icon slot=\"icon-only\" name=\"md-share\" class=\"shareBtnIcon\" (click)=\"shareCourse()\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <div class=\"modulecontents\">\n        <ion-grid class=\"courseDescgrid\">\n            <ion-row>\n                <ion-col size=\"1\">\n                    <!-- <ion-icon slot=\"icon-only\" name=\"ios-arrow-dropleft\" class=\"courseIcon\"></ion-icon> -->\n                    <ion-img [src]=\"courseData.courseIcon\" class=\"courseIcon\"></ion-img>\n                </ion-col>\n                <ion-col size=\"11\">\n                    <ion-title class=\"courseTitle\">{{courseData.courseName}}</ion-title>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-text class=\"courseDesc\">\n                        {{courseData.courseDesc}}\n                    </ion-text>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"courseAddInfo\">\n                <ion-col size=\"7\">\n                    <ion-label class=\"courseCompDate\">Course Completion: {{courseData.courseCompDate}}</ion-label>\n                </ion-col>\n                <ion-col size=\"3\">\n                    <ion-label class=\"courseModCount\">{{courseData.courseModCount}} Modules</ion-label>\n                </ion-col>\n                <ion-col size=\"2\">\n                    <ion-label class=\"courseStageCount\">{{courseData.courseStageCount}} Stages</ion-label>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-grid class=\"modulesListGrid\">\n            <ion-row class=\"modulesListRow\">\n                <div class=\"moduleContainer\">\n                    <div class=\"moduleContainerScroll\" scrollX=\"true\">\n                        <ion-col class=\"modulesListCol\" *ngFor=\"let module of modulesList;let i = index\" size=\"2\">\n                            <ion-button class=\"moduleListButton\" size=\"large\" shape=\"round \" [ngClass]=\"{ 'skipButton': module.status, 'defaultModule': !module.status}\" (click)=\"listActivities(i,module)\">{{module.name}}</ion-button>\n                        </ion-col>\n                    </div>\n                </div>\n            </ion-row>\n        </ion-grid>\n\n        <ion-card *ngFor=\"let activty of modulesList[currentModIndex].activities;let i=index\" class=\"activityCards\">\n            <img class=\"actvityCardImg\" [src]=\"activty.imageUrl\" (click)=\"goToActivity(activty)\" />\n            <ion-card-header class=\"activityCardHeader\">\n                <ion-row no-padding>\n                    <ion-col size=\"11\">\n                        <ion-card-title class=\"activityCardTitle\">\n                            <ion-label class=\"activityCardIndex\">0{{i+1}}</ion-label>\n                            {{activty.title}}\n                        </ion-card-title>\n                    </ion-col>\n                    <ion-col size=\"1\">\n                        <ion-icon name=\"bookmark\" class=\"actvityCardIcon\" (click)=\"saveActivity(activty)\" [ngClass]=\"{'savedAct': activty.saved}\"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </ion-card-header>\n\n            <ion-card-content>{{activty.description}}</ion-card-content>\n\n            <div>\n                <ion-button class=\"activityStartButton\" expand=\"full\" shape=\"round \" fill=\"solid\" color=\"primary\" (click)=\"goToActivity()\">Begin</ion-button>\n            </div>\n\n        </ion-card>\n\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/module/module.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/module/module.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-module .modulemain {\n  padding: 0 !important;\n  margin: 0 !important;\n  --background: #f4f4f4; }\n\napp-module .moduleToobar {\n  --background: transparent;\n  font-size: 4vw; }\n\napp-module .backBtnLabel {\n  padding-left: 5px;\n  font-weight: bold; }\n\napp-module .shareBtnIcon {\n  color: #818181; }\n\napp-module .courseDescgrid {\n  font-size: 3.4vw; }\n\napp-module .courseTitle {\n  font-size: 5vw; }\n\napp-module .courseDesc {\n  line-height: 1.5;\n  color: #a0a0a0; }\n\napp-module .courseAddInfo {\n  color: #585757; }\n\napp-module .actvityCardImg {\n  max-height: 165px; }\n\napp-module .activityCardHeader {\n  padding: 10px; }\n\napp-module .activityCardTitle {\n  font-size: 5vw;\n  font-weight: 500; }\n\napp-module .activityCardIndex {\n  color: #3880ff; }\n\napp-module .actvityCardIcon {\n  float: right;\n  font-size: 5.5vw;\n  color: #abaaaa; }\n\napp-module .activityCards {\n  background-color: #fff;\n  border-radius: 10px; }\n\napp-module .activityStartButton {\n  text-transform: uppercase;\n  margin: 0px 12px 12px 12px;\n  font-weight: 600;\n  font-size: 3.4vw; }\n\napp-module .savedAct {\n  color: #3880ff; }\n\napp-module .moduleContainer {\n  overflow: hidden;\n  white-space: nowrap; }\n\napp-module .moduleContainer ::-webkit-scrollbar {\n    display: none; }\n\napp-module .moduleContainer .moduleContainerScroll {\n    overflow: auto; }\n\napp-module .moduleListButton {\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 3.5vw; }\n\napp-module .defaultModule {\n  --color: #3880ff;\n  --background: #fff;\n  --box-shadow: none;\n  --color-activated: #3880ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kdWxlL0U6XFxNeSBEYXRhXFxFZGdlXFxpb25pY0FwcHNcXGVkZ2VJb25pY0FwcC9zcmNcXGFwcFxccGFnZXNcXG1vZHVsZVxcbW9kdWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQWEsRUFBQTs7QUFMckI7RUFRUSx5QkFBYTtFQUNiLGNBQWMsRUFBQTs7QUFUdEI7RUFZUSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBYnpCO0VBZ0JRLGNBQWMsRUFBQTs7QUFoQnRCO0VBbUJRLGdCQUFnQixFQUFBOztBQW5CeEI7RUF1QlEsY0FBYyxFQUFBOztBQXZCdEI7RUEwQlEsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUEzQnRCO0VBOEJRLGNBQWMsRUFBQTs7QUE5QnRCO0VBb0NRLGlCQUFpQixFQUFBOztBQXBDekI7RUF1Q1EsYUFBYSxFQUFBOztBQXZDckI7RUEwQ1EsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQTNDeEI7RUE4Q1EsY0FBYyxFQUFBOztBQTlDdEI7RUFpRFEsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBbkR0QjtFQXNEUSxzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBdkQzQjtFQTBEUSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUE3RHhCO0VBZ0VRLGNBQWMsRUFBQTs7QUFoRXRCO0VBbUVRLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFwRTNCO0lBc0VZLGFBQWEsRUFBQTs7QUF0RXpCO0lBeUVZLGNBQWMsRUFBQTs7QUF6RTFCO0VBNkVRLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBL0V4QjtFQWtGUSxnQkFBUTtFQUNSLGtCQUFhO0VBQ2Isa0JBQWE7RUFDYiwwQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZHVsZS9tb2R1bGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLW1vZHVsZSB7XHJcbiAgICAubW9kdWxlY29udGVudHMge31cclxuICAgIC5tb2R1bGVtYWluIHtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgfVxyXG4gICAgLm1vZHVsZVRvb2JhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgIH1cclxuICAgIC5iYWNrQnRuTGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLnNoYXJlQnRuSWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICB9XHJcbiAgICAuY291cnNlRGVzY2dyaWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy40dnc7XHJcbiAgICB9XHJcbiAgICAuY291cnNlSWNvbiB7fVxyXG4gICAgLmNvdXJzZVRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgIH1cclxuICAgIC5jb3Vyc2VEZXNjIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiAjYTBhMGEwO1xyXG4gICAgfVxyXG4gICAgLmNvdXJzZUFkZEluZm8ge1xyXG4gICAgICAgIGNvbG9yOiAjNTg1NzU3O1xyXG4gICAgfVxyXG4gICAgLmNvdXJzZUNvbXBEYXRlIHt9XHJcbiAgICAuY291cnNlTW9kQ291bnQge31cclxuICAgIC5jb3Vyc2VTdGFnZUNvdW50IHt9XHJcbiAgICAuYWN0dml0eUNhcmRJbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE2NXB4O1xyXG4gICAgfVxyXG4gICAgLmFjdGl2aXR5Q2FyZEhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIC5hY3Rpdml0eUNhcmRUaXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC5hY3Rpdml0eUNhcmRJbmRleCB7XHJcbiAgICAgICAgY29sb3I6ICMzODgwZmY7XHJcbiAgICB9XHJcbiAgICAuYWN0dml0eUNhcmRJY29uIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA1LjV2dztcclxuICAgICAgICBjb2xvcjogI2FiYWFhYTtcclxuICAgIH1cclxuICAgIC5hY3Rpdml0eUNhcmRzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZpdHlTdGFydEJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW46IDBweCAxMnB4IDEycHggMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy40dnc7XHJcbiAgICB9XHJcbiAgICAuc2F2ZWRBY3Qge1xyXG4gICAgICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgfVxyXG4gICAgLm1vZHVsZUNvbnRhaW5lciB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZHVsZUNvbnRhaW5lclNjcm9sbCB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tb2R1bGVMaXN0QnV0dG9uIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy41dnc7XHJcbiAgICB9XHJcbiAgICAuZGVmYXVsdE1vZHVsZSB7XHJcbiAgICAgICAgLS1jb2xvcjogIzM4ODBmZjtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMzg4MGZmO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/module/module.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/module/module.page.ts ***!
  \*********************************************/
/*! exports provided: ModulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePage", function() { return ModulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ModulePage = /** @class */ (function () {
    function ModulePage(router, navCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.courseData = {
            courseIcon: 'assets/icon/courselogo.svg',
            courseName: 'User Experience Beginner Course',
            // tslint:disable-next-line:max-line-length
            courseDesc: 'As someone who transitioned into UX from a non-design career with actionable things beginners can do to land their first job in this amazing industry.',
            courseCompDate: '26 Jan 2018',
            courseModCount: '3',
            courseStageCount: '4',
        };
        this.currentActivities = [];
        this.modulesList = [
            {
                id: 1,
                name: 'module 1',
                status: true,
                activities: [
                    {
                        id: 1,
                        imageUrl: 'assets/img/card/1.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 2,
                        imageUrl: 'assets/img/card/2.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 3,
                        imageUrl: 'assets/img/card/3.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 4,
                        imageUrl: 'assets/img/card/4.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 5,
                        imageUrl: 'assets/img/card/5.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    }
                ]
            },
            {
                id: 2,
                name: 'module 2',
                status: false,
                activities: [
                    {
                        id: 1,
                        imageUrl: 'assets/img/card/nin-live.png',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 2,
                        imageUrl: 'assets/img/card/badu-live.png',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 3,
                        imageUrl: 'assets/img/card/queen-live.png',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 4,
                        imageUrl: 'assets/img/card/bjork-live.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 5,
                        imageUrl: 'assets/img/card/rundmc-live.png',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    }
                ]
            },
            {
                id: 3,
                name: 'module 3',
                status: false,
                activities: [
                    {
                        id: 1,
                        imageUrl: 'assets/img/card/1.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 2,
                        imageUrl: 'assets/img/card/badu-live.png',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 3,
                        imageUrl: 'assets/img/card/2.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 4,
                        imageUrl: 'assets/img/card/bjork-live.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 5,
                        imageUrl: 'assets/img/card/3.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    }
                ]
            },
            {
                id: 4,
                name: 'module 4',
                status: false,
                activities: [
                    {
                        id: 1,
                        imageUrl: 'assets/img/card/nin-live.png',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 2,
                        imageUrl: 'assets/img/card/4.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 3,
                        imageUrl: 'assets/img/card/queen-live.png',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 4,
                        imageUrl: 'assets/img/card/5.jpg',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    },
                    {
                        id: 5,
                        imageUrl: 'assets/img/card/rundmc-live.png',
                        title: 'Design Reporting Analysis',
                        // tslint:disable-next-line:max-line-length
                        description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.',
                        saved: false
                    }
                ]
            }
        ];
        this.savedAct = [];
        this.listActivities(0, null);
    }
    ModulePage.prototype.ngOnInit = function () {
    };
    ModulePage.prototype.goToCourse = function () {
        this.router.navigateByUrl('/tabs/learn');
    };
    ModulePage.prototype.goToActivity = function (activty) {
        this.router.navigateByUrl('/activity');
    };
    ModulePage.prototype.shareCourse = function () {
    };
    ModulePage.prototype.saveActivity = function (currentActvity) {
        if (currentActvity.saved) {
            currentActvity.saved = false;
        }
        else {
            currentActvity.saved = true;
        }
    };
    ModulePage.prototype.listActivities = function (currentModIndex, currentModule) {
        this.currentModIndex = currentModIndex;
        for (var i = 0; i < this.modulesList.length; i++) {
            if (currentModIndex === i) {
                this.modulesList[i].status = true;
            }
            else {
                this.modulesList[i].status = false;
            }
        }
    };
    ModulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-module',
            template: __webpack_require__(/*! ./module.page.html */ "./src/app/pages/module/module.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./module.page.scss */ "./src/app/pages/module/module.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ModulePage);
    return ModulePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-module-module-module.js.map