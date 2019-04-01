(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-activity-module"],{

/***/ "./src/app/pages/activity/activity.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/activity/activity.module.ts ***!
  \***************************************************/
/*! exports provided: ActivityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity.page */ "./src/app/pages/activity/activity.page.ts");







var routes = [
    {
        path: '',
        component: _activity_page__WEBPACK_IMPORTED_MODULE_6__["ActivityPage"]
    }
];
var ActivityPageModule = /** @class */ (function () {
    function ActivityPageModule() {
    }
    ActivityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_activity_page__WEBPACK_IMPORTED_MODULE_6__["ActivityPage"]]
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());



/***/ }),

/***/ "./src/app/pages/activity/activity.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/activity/activity.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n    <ion-toolbar color=\"primary\">\n        <ion-title no-padding>\n            <ion-item class=\"transparent\" no-padding lines=\"none\">\n                <ion-avatar slot=\"start\" ion-justify-content-start margin-vertical class=\"headerico\">\n                    <img src=\"../../assets/icon/Bitmap.png\">\n                </ion-avatar>\n                <ion-searchbar placeholder=\"Search\" color=\"medium-tint\" no-padding ion-justify-content-center class=\"searchbar\" mode=\"ios\"></ion-searchbar>\n                <ion-icon name=\"notifications\" ion-justify-content-end class=\"notifyico\"></ion-icon>\n            </ion-item>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<div class=\"activityHeader\">\n    <ion-img [src]=\"activityData.headerImg\" class=\"activityHeaderImg\"></ion-img>\n    <div class=\"toprightBtn\">\n        <ion-buttons slot=\"end\" (click)=\"goToModules()\">\n            <ion-icon class=\"closeBtnIcon\" slot=\"icon-only\" name=\"ios-close-circle-outline\"></ion-icon>\n            <ion-label class=\"closeBtnLabel textUppercase\">Close</ion-label>\n        </ion-buttons>\n    </div>\n</div>\n\n<ion-content class=\"activityMain\" padding>\n\n    <ion-grid class=\"activityHeaderGrid\" no-padding>\n        <ion-row no-padding>\n            <ion-col class=\"activityHeader1\" no-padding>\n                {{activityData.id}}\n            </ion-col>\n        </ion-row>\n        <ion-row no-padding>\n            <ion-col class=\"activityHeader2\" no-padding>\n                {{activityData.courseName}}\n            </ion-col>\n        </ion-row>\n        <ion-row no-padding>\n            <ion-col class=\"activityHeader3\" no-padding>\n                {{activityData.activityTitle}}\n            </ion-col>\n        </ion-row>\n        <ion-row no-padding>\n            <ion-col class=\"activityHeader2\" no-padding>\n                {{activityData.activitySubTitle}}\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-item color=\"transparent\" lines=\"none\" no-padding>\n        <ion-avatar slot=\"start\" ion-justify-content-start margin-vertical>\n            <img src=\"{{activityData.authorAvtar}}\">\n        </ion-avatar>\n        <ion-label>\n            <ion-row class=\"toolbarHeader\">{{activityData.authorName}}</ion-row>\n            <ion-row class=\"toolbarSubHeader\">{{activityData.date}}</ion-row>\n        </ion-label>\n        <ion-buttons class=\"toolbarHeaderBtns\" slot=\"end\">\n            <ion-icon slot=\"icon-only\" name=\"md-share\" class=\"activityShareBtnIcon\" (click)=\"shareActivity()\"></ion-icon>\n            <ion-icon slot=\"icon-only\" name=\"bookmark\" class=\"activitySaveBtnIcon\" (click)=\"saveActivity()\"></ion-icon>\n        </ion-buttons>\n    </ion-item>\n\n    <ion-grid class=\"activityContentGrid\" no-padding>\n        <ion-row class=\"activityContentRow1\">\n            {{activityData.desc1}}\n        </ion-row>\n        <ion-row class=\"activityContentRow2\">\n            <div *ngIf=\"activityData.type == 'image'\">\n                <ion-img [src]=\"activityData.desc2\" (click)=\"viewImage(activityData.desc2, activityData.activityTitle, activityData.courseName)\"></ion-img>\n            </div>\n            <div *ngIf=\"activityData.type == 'video'\">\n                <ion-button class=\"actSubmitButton compBtn\" shape=\"round \" fill=\"solid \" color=\"compButton \" expand=\"full \" (click)=\"playVideo(activityData.desc2)\">Play video</ion-button>\n            </div>\n        </ion-row>\n        <ion-row class=\"activityContentRow3\">\n            {{activityData.desc3}}\n        </ion-row>\n    </ion-grid>\n\n    <div class=\"activityFooter \">\n        <ion-toolbar vertical=\"bottom \" horizontal=\"start \" color=\"transparent \">\n            <ion-button class=\"actSubmitButton compBtn\" shape=\"round \" fill=\"solid \" color=\"compButton \" expand=\"full \">Mark Completed</ion-button>\n            <ion-button class=\"actSubmitButton assesBtn\" shape=\"round \" fill=\"outline \" color=\"assessButton \" expand=\"full \">\n                Take Assesment\n                <ion-icon slot=\"end\" name=\"ios-arrow-dropright\"></ion-icon>\n            </ion-button>\n        </ion-toolbar>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/activity/activity.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/activity/activity.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-activity .activityMain {\n  padding: 0 !important;\n  margin: 0 !important;\n  --background: #f4f4f4; }\n\napp-activity .activityHeader {\n  position: relative; }\n\napp-activity .toprightBtn {\n  position: absolute;\n  top: 8px;\n  right: 16px;\n  font-size: 4vw;\n  font-weight: 700; }\n\napp-activity .activityHeaderImg {\n  width: 100%;\n  height: auto; }\n\napp-activity .closeBtnLabel {\n  padding-left: 5px; }\n\napp-activity .closeBtnIcon {\n  font-size: 6vw; }\n\napp-activity .activityHeader1 {\n  font-size: 9.5vw;\n  font-weight: 600;\n  color: #507bfc; }\n\napp-activity .activityHeader2 {\n  font-size: 3.9vw;\n  color: #807e7e; }\n\napp-activity .activityHeader3 {\n  font-size: 6.7vw;\n  font-weight: 600; }\n\napp-activity .toolbarHeader {\n  font-size: 4vw; }\n\napp-activity .toolbarSubHeader {\n  font-size: 3vw;\n  color: #807e7e; }\n\napp-activity .toolbarHeaderBtns {\n  color: #a5a2a2; }\n\napp-activity .activityShareBtnIcon {\n  font-size: 3vw; }\n\napp-activity .activitySaveBtnIcon {\n  padding-left: 15px !important;\n  font-size: 6vw; }\n\napp-activity .activityContentRow2 {\n  margin: 15px 0 15px 0; }\n\napp-activity .actSubmitButton {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  margin: 15px 0px;\n  font-weight: 600;\n  font-size: 14px; }\n\napp-activity .assesBtn {\n  --color: #4F7AFC;\n  --border-color: #4F7AFC;\n  --box-shadow: none; }\n\napp-activity .compBtn {\n  --color: #4F7AFC;\n  --box-shadow: none;\n  --border-color: #4F7AFC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZpdHkvRTpcXE15IERhdGFcXEVkZ2VcXGlvbmljQXBwc1xcZWRnZUlvbmljQXBwL3NyY1xcYXBwXFxwYWdlc1xcYWN0aXZpdHlcXGFjdGl2aXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQWEsRUFBQTs7QUFKckI7RUFPUSxrQkFBa0IsRUFBQTs7QUFQMUI7RUFVUSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFFWCxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBZnhCO0VBa0JRLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBbkJwQjtFQXVCUSxpQkFBaUIsRUFBQTs7QUF2QnpCO0VBMEJRLGNBQWMsRUFBQTs7QUExQnRCO0VBNkJRLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQS9CdEI7RUFrQ1EsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFuQ3RCO0VBc0NRLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUF2Q3hCO0VBMENRLGNBQWMsRUFBQTs7QUExQ3RCO0VBNkNRLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBOUN0QjtFQWlEUSxjQUFjLEVBQUE7O0FBakR0QjtFQW9EUSxjQUFjLEVBQUE7O0FBcER0QjtFQXVEUSw2QkFBNkI7RUFDN0IsY0FBYyxFQUFBOztBQXhEdEI7RUEyRFEscUJBQXFCLEVBQUE7O0FBM0Q3QjtFQW1FUSxtQkFBYztFQUNkLHNCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUF2RXZCO0VBMEVRLGdCQUFRO0VBQ1IsdUJBQWU7RUFDZixrQkFBYSxFQUFBOztBQTVFckI7RUErRVEsZ0JBQVE7RUFDUixrQkFBYTtFQUNiLHVCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY3Rpdml0eS9hY3Rpdml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtYWN0aXZpdHkge1xyXG4gICAgLmFjdGl2aXR5TWFpbiB7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIH1cclxuICAgIC5hY3Rpdml0eUhlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnRvcHJpZ2h0QnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZpdHlIZWFkZXJJbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAvLyBvcGFjaXR5OiAwLjM7XHJcbiAgICB9XHJcbiAgICAuY2xvc2VCdG5MYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuY2xvc2VCdG5JY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDZ2dztcclxuICAgIH1cclxuICAgIC5hY3Rpdml0eUhlYWRlcjEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOS41dnc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzUwN2JmYztcclxuICAgIH1cclxuICAgIC5hY3Rpdml0eUhlYWRlcjIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy45dnc7XHJcbiAgICAgICAgY29sb3I6ICM4MDdlN2U7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZpdHlIZWFkZXIzIHtcclxuICAgICAgICBmb250LXNpemU6IDYuN3Z3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAudG9vbGJhckhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICB9XHJcbiAgICAudG9vbGJhclN1YkhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgICAgY29sb3I6ICM4MDdlN2U7XHJcbiAgICB9XHJcbiAgICAudG9vbGJhckhlYWRlckJ0bnMge1xyXG4gICAgICAgIGNvbG9yOiAjYTVhMmEyO1xyXG4gICAgfVxyXG4gICAgLmFjdGl2aXR5U2hhcmVCdG5JY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuICAgIC5hY3Rpdml0eVNhdmVCdG5JY29uIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDZ2dztcclxuICAgIH1cclxuICAgIC5hY3Rpdml0eUNvbnRlbnRSb3cyIHtcclxuICAgICAgICBtYXJnaW46IDE1cHggMCAxNXB4IDA7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZpdHlGb290ZXIge1xyXG4gICAgICAgIC8vIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmFjdFN1Ym1pdEJ1dHRvbiB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuYXNzZXNCdG4ge1xyXG4gICAgICAgIC0tY29sb3I6ICM0RjdBRkM7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICM0RjdBRkM7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbXBCdG4ge1xyXG4gICAgICAgIC0tY29sb3I6ICM0RjdBRkM7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjNEY3QUZDO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/activity/activity.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/activity/activity.page.ts ***!
  \*************************************************/
/*! exports provided: ActivityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPage", function() { return ActivityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/image-viewer/image-viewer.component */ "./src/app/components/image-viewer/image-viewer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/video-player/ngx */ "./node_modules/@ionic-native/video-player/ngx/index.js");






var ActivityPage = /** @class */ (function () {
    function ActivityPage(videoPlayer, modalController, router) {
        this.videoPlayer = videoPlayer;
        this.modalController = modalController;
        this.router = router;
        this.activityData = {
            id: '01',
            headerImg: './assets/img/card/2.jpg',
            courseName: 'User Experience Beginner Course',
            activityTitle: 'Six Years With a Stress-Free App ',
            activitySubTitle: '(and how to try your own low-stress experiment)',
            authorAvtar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
            authorName: 'Amberlee Pozar',
            date: 'Nov 27',
            // tslint:disable-next-line:max-line-length
            desc1: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit,eubibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam veliaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.',
            desc2: './assets/img/card/2.jpg',
            // desc2: './assets/video/background-480.mp4',
            // tslint:disable-next-line:max-line-length
            desc3: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit,eubibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam veliaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.',
            type: 'image',
        };
    }
    ActivityPage.prototype.ngOnInit = function () {
    };
    ActivityPage.prototype.viewImage = function (src, title, description) {
        if (title === void 0) { title = ''; }
        if (description === void 0) { description = ''; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_3__["ImageViewerComponent"],
                            componentProps: {
                                imgSource: src,
                                imgTitle: title,
                                imgDescription: description
                            },
                            cssClass: 'modal-fullscreen',
                            keyboardClose: true,
                            showBackdrop: true
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ActivityPage.prototype.playVideo = function (src) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // Playing a video.
                this.videoPlayer.play(src).then(function () {
                    console.log('video completed');
                }).catch(function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    ActivityPage.prototype.goToModules = function () {
        this.router.navigateByUrl('/module');
    };
    ActivityPage.prototype.shareActivity = function () {
    };
    ActivityPage.prototype.saveActivity = function () {
    };
    ActivityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.page.html */ "./src/app/pages/activity/activity.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./activity.page.scss */ "./src/app/pages/activity/activity.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_5__["VideoPlayer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ActivityPage);
    return ActivityPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-activity-activity-module.js.map