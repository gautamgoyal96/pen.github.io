(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taxonomy-taxonomy-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/taxonomy/list-taxonomy/list-taxonomy.component.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/taxonomy/list-taxonomy/list-taxonomy.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <CoreLib-list-taxonomies routeUrl = {{currentURL}} magazineId=\"{{magazineId}}\"></CoreLib-list-taxonomies>     \n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n    \n");

/***/ }),

/***/ "./src/app/taxonomy/list-taxonomy/list-taxonomy.component.css":
/*!********************************************************************!*\
  !*** ./src/app/taxonomy/list-taxonomy/list-taxonomy.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9QRU4vc3JjL2FwcC90YXhvbm9teS9saXN0LXRheG9ub215L2xpc3QtdGF4b25vbXkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/taxonomy/list-taxonomy/list-taxonomy.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/taxonomy/list-taxonomy/list-taxonomy.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListTaxonomyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTaxonomyComponent", function() { return ListTaxonomyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../rodman-core/src/lib/rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");





let ListTaxonomyComponent = class ListTaxonomyComponent {
    constructor(router, RodmanCoreService) {
        this.router = router;
        this.RodmanCoreService = RodmanCoreService;
        this.getAllAd = [];
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        });
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        }));
    }
    ngOnInit() {
    }
};
ListTaxonomyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] }
];
ListTaxonomyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pen-list-taxonomy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-taxonomy.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/taxonomy/list-taxonomy/list-taxonomy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-taxonomy.component.css */ "./src/app/taxonomy/list-taxonomy/list-taxonomy.component.css")).default]
    })
], ListTaxonomyComponent);



/***/ }),

/***/ "./src/app/taxonomy/taxonomy-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/taxonomy/taxonomy-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TaxonomyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomyRoutingModule", function() { return TaxonomyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_taxonomy_list_taxonomy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-taxonomy/list-taxonomy.component */ "./src/app/taxonomy/list-taxonomy/list-taxonomy.component.ts");




const routes = [
    { path: "", component: _list_taxonomy_list_taxonomy_component__WEBPACK_IMPORTED_MODULE_3__["ListTaxonomyComponent"] },
    { path: ":any", component: _list_taxonomy_list_taxonomy_component__WEBPACK_IMPORTED_MODULE_3__["ListTaxonomyComponent"] },
];
let TaxonomyRoutingModule = class TaxonomyRoutingModule {
};
TaxonomyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TaxonomyRoutingModule);



/***/ }),

/***/ "./src/app/taxonomy/taxonomy.module.ts":
/*!*********************************************!*\
  !*** ./src/app/taxonomy/taxonomy.module.ts ***!
  \*********************************************/
/*! exports provided: TaxonomyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomyModule", function() { return TaxonomyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _taxonomy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxonomy-routing.module */ "./src/app/taxonomy/taxonomy-routing.module.ts");
/* harmony import */ var _list_taxonomy_list_taxonomy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-taxonomy/list-taxonomy.component */ "./src/app/taxonomy/list-taxonomy/list-taxonomy.component.ts");
/* harmony import */ var rodman_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rodman-core */ "../../dist/rodman-core/fesm2015/rodman-core.js");
/* harmony import */ var ngx_dfp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dfp */ "../../node_modules/ngx-dfp/fesm2015/ngx-dfp.js");







let TaxonomyModule = class TaxonomyModule {
};
TaxonomyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_taxonomy_list_taxonomy_component__WEBPACK_IMPORTED_MODULE_4__["ListTaxonomyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _taxonomy_routing_module__WEBPACK_IMPORTED_MODULE_3__["TaxonomyRoutingModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_5__["TaxonomiesModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_5__["ContentsModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_5__["AdsModule"],
            ngx_dfp__WEBPACK_IMPORTED_MODULE_6__["DfpModule"].forRoot({
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
], TaxonomyModule);



/***/ })

}]);
//# sourceMappingURL=taxonomy-taxonomy-module-es2015.js.map