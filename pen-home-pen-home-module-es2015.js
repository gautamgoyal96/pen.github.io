(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pen-home-pen-home-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pen-home/components/featured-content/featured-content.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/pen-home/components/featured-content/featured-content.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>pen-featured-content works!</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pen-home/components/home-page/home-page.component.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/pen-home/components/home-page/home-page.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"mt-5\" ></div>\n<div class=\"container container_box\">\n    <div class=\"row\">\n        <div class=\"col-sm-8 col-md-8\">\n            <CoreLib-home-slider magazineId=\"{{magazineId}}\"  homeBoxId = {{homeBoxId}}></CoreLib-home-slider>\n        </div>\n        <hr>\n        <div class=\"col-sm-4 col-md-4\">\n            <CoreLib-content-box-tabs magazineId={{magazineId}}   TabOne=\"2487,5\" TabTwo=\"2486,5\" showAds='yes' ></CoreLib-content-box-tabs>    \n        </div>\n    </div>    \n</div>\n<CoreLib-featured-content magazineId=\"{{magazineId}}\" [getAllAd]=\"getAllAd\" [location]=\"'content_right_1'\" featured_content_section='2492,7'></CoreLib-featured-content>\n<CoreLib-featured-content magazineId=\"{{magazineId}}\" [getAllAd]=\"getAllAd\" [location]=\"'content_right_2'\" featured_content_section='2486,7'></CoreLib-featured-content>\n<CoreLib-featured-content magazineId=\"{{magazineId}}\" [getAllAd]=\"getAllAd\" [location]=\"'content_right_3'\" featured_content_section='2487,7'></CoreLib-featured-content>\n");

/***/ }),

/***/ "./src/app/pen-home/components/featured-content/featured-content.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pen-home/components/featured-content/featured-content.component.ts ***!
  \************************************************************************************/
/*! exports provided: FeaturedContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedContentComponent", function() { return FeaturedContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let FeaturedContentComponent = class FeaturedContentComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
FeaturedContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pen-featured-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./featured-content.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pen-home/components/featured-content/featured-content.component.html")).default
    })
], FeaturedContentComponent);



/***/ }),

/***/ "./src/app/pen-home/components/home-page/home-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pen-home/components/home-page/home-page.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container_box{\n    width: 100% !important;\n    max-width: 90% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL1BFTi9zcmMvYXBwL3Blbi1ob21lL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJwcm9qZWN0cy9QRU4vc3JjL2FwcC9wZW4taG9tZS9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfYm94e1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA5MCUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pen-home/components/home-page/home-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pen-home/components/home-page/home-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../rodman-core/src/lib/rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");




let HomePageComponent = class HomePageComponent {
    constructor(RodmanCoreService) {
        this.RodmanCoreService = RodmanCoreService;
        this.getAllAd = [];
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].magazineId;
        this.homeBoxId = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].homeBoxId;
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        }));
    }
    ngOnInit() {
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_3__["RodmanCoreService"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pen-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pen-home/components/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/pen-home/components/home-page/home-page.component.css")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/pen-home/pen-home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pen-home/pen-home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PENHomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PENHomeRoutingModule", function() { return PENHomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/pen-home/components/home-page/home-page.component.ts");




const routes = [
    { path: "", component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
];
let PENHomeRoutingModule = class PENHomeRoutingModule {
};
PENHomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PENHomeRoutingModule);



/***/ }),

/***/ "./src/app/pen-home/pen-home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pen-home/pen-home.module.ts ***!
  \*********************************************/
/*! exports provided: PENHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PENHomeModule", function() { return PENHomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rodman_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rodman-core */ "../../dist/rodman-core/fesm2015/rodman-core.js");
/* harmony import */ var ngx_dfp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-dfp */ "../../node_modules/ngx-dfp/fesm2015/ngx-dfp.js");
/* harmony import */ var _pen_home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pen-home-routing.module */ "./src/app/pen-home/pen-home-routing.module.ts");
/* harmony import */ var _components_featured_content_featured_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/featured-content/featured-content.component */ "./src/app/pen-home/components/featured-content/featured-content.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/pen-home/components/home-page/home-page.component.ts");











let PENHomeModule = class PENHomeModule {
};
PENHomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_featured_content_featured_content_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedContentComponent"], _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pen_home_routing_module__WEBPACK_IMPORTED_MODULE_6__["PENHomeRoutingModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_4__["SitesModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_4__["ContentsModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_4__["AdsModule"],
            ngx_dfp__WEBPACK_IMPORTED_MODULE_5__["DfpModule"].forRoot({
                idleLoad: true,
                enableVideoAds: true,
                personalizedAds: true,
                singleRequestMode: true,
                onSameNavigation: 'refresh',
                globalTargeting: {
                // food: ['NUT', 'HOME']
                }
            })
        ]
    })
], PENHomeModule);



/***/ })

}]);
//# sourceMappingURL=pen-home-pen-home-module-es2015.js.map