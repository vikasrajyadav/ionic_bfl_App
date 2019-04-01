(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-interests-interests-module"],{

/***/ "./src/app/pages/interests/interests.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/interests/interests.module.ts ***!
  \*****************************************************/
/*! exports provided: InterestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsPageModule", function() { return InterestsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _interests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interests.page */ "./src/app/pages/interests/interests.page.ts");







var routes = [
    {
        path: '',
        component: _interests_page__WEBPACK_IMPORTED_MODULE_6__["InterestsPage"]
    }
];
var InterestsPageModule = /** @class */ (function () {
    function InterestsPageModule() {
    }
    InterestsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_interests_page__WEBPACK_IMPORTED_MODULE_6__["InterestsPage"]]
        })
    ], InterestsPageModule);
    return InterestsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/interests/interests.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/interests/interests.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header mode=\"ios\"> -->\n<!-- <ion-toolbar color=\"primary\"> -->\n<!-- <ion-searchbar placeholder=\"What skills are you looking for ?\"></ion-searchbar> -->\n<!-- </ion-toolbar> -->\n<!-- </ion-header> -->\n\n<ion-content class=\"interestmain\">\n\n    <div class=\"interestcontents\">\n\n        <ion-searchbar class=\"customSearch\" placeholder=\"What skills are you looking for ?\"></ion-searchbar>\n\n        <ion-grid class=\"skillsGrid\">\n            <!--  [ngStyle]=\"{height:contentHeight+'px'}\" -->\n            <ion-row class=\" ion-align-items-center \">\n                <ion-col *ngFor=\"let skill of skills \" size=\"6 \">\n                    <ion-item class=\"skillList-item\" [ngClass]=\"{ 'chip': skill.isChecked, 'chips-default': !skill.isChecked} \" color=\"transparent\" lines=\"none\">\n                        <ion-label>{{skill.name}}</ion-label>\n                        <ion-checkbox mode=\"ios\" slot=\"start\" [(ngModel)]=\"skill.isChecked\" [color]=\"{ 'skipButton': skill.isChecked, 'doneButton': !skill.isChecked}\"></ion-checkbox>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <div class=\"interestFooter \">\n            <ion-toolbar vertical=\"bottom \" horizontal=\"start \" color=\"transparent \">\n                <ion-button class=\"skillsButton skipBtn \" shape=\"round \" fill=\"outline \" color=\"skipButton \" expand=\"full \" (click)=\"goToDashboard()\">SKIP</ion-button>\n                <ion-button class=\"skillsButton doneBtn \" shape=\"round \" fill=\"solid \" color=\"doneButton \" expand=\"full \" (click)=\"goToDashboard()\">DONE</ion-button>\n            </ion-toolbar>\n        </div>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/interests/interests.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/interests/interests.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-interests .interestcontents {\n  background-image: Url(\"../../assets/images/interestBack.png\");\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 0 !important; }\n\napp-interests .interestmain {\n  padding: 0 !important;\n  margin: 0 !important; }\n\napp-interests .customSearch {\n  padding: 30px 20px 30px 20px; }\n\napp-interests .customSearch .searchbar-input-container .searchbar-input {\n    background: transparent !important;\n    color: #fff !important;\n    border-bottom: 1px solid #fff !important;\n    box-shadow: none !important;\n    font-size: 14px !important; }\n\napp-interests .customSearch .searchbar-input-container .searchbar-search-icon {\n    color: #fff !important; }\n\napp-interests .chip {\n  border-radius: 50px;\n  border: 1px solid #fff;\n  background: #fff;\n  color: #4F7AFC; }\n\napp-interests .chips-default {\n  background: transparent;\n  color: #fff;\n  border: 1px solid #ffff;\n  border-radius: 50px; }\n\napp-interests .selectedSkill {\n  font-size: 24px; }\n\napp-interests .skillsGrid {\n  max-height: 64%;\n  overflow: auto; }\n\napp-interests .skipButton {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  margin: 15px 0px;\n  font-weight: 600;\n  font-size: 14px; }\n\napp-interests .skillsButton {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  margin: 15px 0px;\n  font-weight: 600;\n  font-size: 14px; }\n\napp-interests .skipBtn {\n  --color: #FFFFFF; }\n\napp-interests .doneBtn {\n  --color: #4F7AFC;\n  --box-shadow: none;\n  --border-color: #fff; }\n\napp-interests ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;\n  border-radius: 50px !important;\n  background-color: #ffffff29 !important; }\n\napp-interests ::-webkit-scrollbar {\n  width: 7px !important;\n  border-radius: 50px !important;\n  background-color: #ffffff29 !important; }\n\napp-interests ::-webkit-scrollbar-thumb {\n  border-radius: 50px !important;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;\n  background-color: #FFFFFF !important; }\n\napp-interests .interestFooter {\n  height: 125px;\n  position: absolute;\n  width: 100%; }\n\napp-interests .skillList-item ion-checkbox {\n  --background: transparent;\n  --border-color: transparent;\n  --checkmark-color: #4F7AFC;\n  --background-checked: #fff;\n  margin-right: 8%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50ZXJlc3RzL0U6XFxNeSBEYXRhXFxFZGdlXFxpb25pY0FwcHNcXGVkZ2VJb25pY0FwcC9zcmNcXGFwcFxccGFnZXNcXGludGVyZXN0c1xcaW50ZXJlc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUVRLDZEQUE2RDtFQUM3RCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCLEVBQUE7O0FBUG5DO0VBVVEscUJBQXFCO0VBQ3JCLG9CQUFvQixFQUFBOztBQVg1QjtFQWNRLDRCQUE0QixFQUFBOztBQWRwQztJQWlCZ0Isa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsMkJBQTJCO0lBQzNCLDBCQUEwQixFQUFBOztBQXJCMUM7SUF3QmdCLHNCQUFzQixFQUFBOztBQXhCdEM7RUE2QlEsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQWxDdEI7RUFxQ1EsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFFWCx1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBekMzQjtFQTRDUSxlQUFlLEVBQUE7O0FBNUN2QjtFQWdEUSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQWpEdEI7RUFvRFEsbUJBQWM7RUFDZCxzQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBeER2QjtFQTJEUSxtQkFBYztFQUNkLHNCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUEvRHZCO0VBa0VRLGdCQUFRLEVBQUE7O0FBbEVoQjtFQXFFUSxnQkFBUTtFQUNSLGtCQUFhO0VBQ2Isb0JBQWUsRUFBQTs7QUF2RXZCO0VBMEVRLCtEQUErRDtFQUMvRCw4QkFBNkI7RUFDN0Isc0NBQXFDLEVBQUE7O0FBNUU3QztFQStFUSxxQkFBb0I7RUFDcEIsOEJBQTZCO0VBQzdCLHNDQUFxQyxFQUFBOztBQWpGN0M7RUFvRlEsOEJBQTZCO0VBQzdCLCtEQUE2RDtFQUM3RCxvQ0FBbUMsRUFBQTs7QUF0RjNDO0VBeUZRLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQTNGbkI7RUFnR1kseUJBQWE7RUFDYiwyQkFBZTtFQUNmLDBCQUFrQjtFQUNsQiwwQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnRlcmVzdHMvaW50ZXJlc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBhcHAtaW50ZXJlc3RzIHtcclxuICAgICAgICAuaW50ZXJlc3Rjb250ZW50cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaW50ZXJlc3RCYWNrLnBuZ1wiKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW50ZXJlc3RtYWluIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN1c3RvbVNlYXJjaCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMjBweCAzMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIC5zZWFyY2hiYXItaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoaXAge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNEY3QUZDO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hpcHMtZGVmYXVsdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWxlY3RlZFNraWxsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2tpbGxzR3JpZCB7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogNjQlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA2NCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2tpcEJ1dHRvbiB7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraWxsc0J1dHRvbiB7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraXBCdG4ge1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZG9uZUJ0biB7XHJcbiAgICAgICAgICAgIC0tY29sb3I6ICM0RjdBRkM7XHJcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjI5IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICB3aWR0aDogN3B4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyOSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIC4zKSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW50ZXJlc3RGb290ZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2tpbGxMaXN0LWl0ZW0ge1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogIzRGN0FGQztcclxuICAgICAgICAgICAgaW9uLWNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAtLWNoZWNrbWFyay1jb2xvcjogIzRGN0FGQztcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/interests/interests.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/interests/interests.page.ts ***!
  \***************************************************/
/*! exports provided: InterestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsPage", function() { return InterestsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var InterestsPage = /** @class */ (function () {
    function InterestsPage(plt, router) {
        this.plt = plt;
        this.router = router;
        this.skills = [
            { id: 1, name: 'Skillname 1', isChecked: true },
            { id: 2, name: 'Skillname 2', isChecked: false },
            { id: 3, name: 'Skillname 3', isChecked: false },
            { id: 4, name: 'Skillname 4', isChecked: true },
            { id: 5, name: 'Skillname 5', isChecked: false },
            { id: 6, name: 'Skillname 6', isChecked: false },
            { id: 7, name: 'Skillname 7', isChecked: true },
            { id: 8, name: 'Skillname 8', isChecked: false },
            { id: 9, name: 'Skillname 9', isChecked: false },
            { id: 10, name: 'Skillname 10', isChecked: false },
            { id: 11, name: 'Skillname 11', isChecked: true },
            { id: 12, name: 'Skillname 12', isChecked: false },
            { id: 13, name: 'Skillname 13', isChecked: false },
            { id: 14, name: 'Skillname 14', isChecked: true },
            { id: 15, name: 'Skillname 15', isChecked: false },
            { id: 16, name: 'Skillname 16', isChecked: false },
            { id: 17, name: 'Skillname 17', isChecked: true },
            { id: 18, name: 'Skillname 18', isChecked: false },
            { id: 19, name: 'Skillname 19', isChecked: false },
            { id: 20, name: 'Skillname 20', isChecked: false }
        ];
        this.footer = 130;
        if (this.plt.is('android')) {
            this.additionalheight = 103;
        }
        else if (this.plt.is('ios')) {
            this.additionalheight = 60;
        }
        this.contentHeight = window.innerHeight - (this.footer + this.additionalheight);
    }
    InterestsPage.prototype.ngOnInit = function () {
    };
    InterestsPage.prototype.goToDashboard = function () {
        this.router.navigateByUrl('/tabs');
    };
    InterestsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-interests',
            template: __webpack_require__(/*! ./interests.page.html */ "./src/app/pages/interests/interests.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./interests.page.scss */ "./src/app/pages/interests/interests.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InterestsPage);
    return InterestsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-interests-interests-module.js.map