(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-masters-designation-master-designation-master-module"],{

/***/ "0+3w":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/masters/designation-master/designation-master.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNpZ25hdGlvbi1tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "3Qn6":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masters/designation-master/designation-master.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>designation-master works!</p>\r\n");

/***/ }),

/***/ "gfl2":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/masters/designation-master/designation-master.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DesignationMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationMasterModule", function() { return DesignationMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _designation_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./designation-master-routing.module */ "za8s");
/* harmony import */ var _designation_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./designation-master.component */ "rwjW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let DesignationMasterModule = class DesignationMasterModule {
};
DesignationMasterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_designation_master_component__WEBPACK_IMPORTED_MODULE_4__["DesignationMasterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _designation_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["DesignationMasterRoutingModule"]
        ]
    })
], DesignationMasterModule);



/***/ }),

/***/ "rwjW":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/masters/designation-master/designation-master.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DesignationMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationMasterComponent", function() { return DesignationMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_designation_master_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./designation-master.component.html */ "3Qn6");
/* harmony import */ var _designation_master_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designation-master.component.css */ "0+3w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DesignationMasterComponent = class DesignationMasterComponent {
    constructor() { }
    ngOnInit() {
    }
};
DesignationMasterComponent.ctorParameters = () => [];
DesignationMasterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-designation-master',
        template: _raw_loader_designation_master_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_designation_master_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DesignationMasterComponent);



/***/ }),

/***/ "za8s":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/masters/designation-master/designation-master-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DesignationMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationMasterRoutingModule", function() { return DesignationMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _designation_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./designation-master.component */ "rwjW");




const routes = [
    { path: '', component: _designation_master_component__WEBPACK_IMPORTED_MODULE_3__["DesignationMasterComponent"] }
];
let DesignationMasterRoutingModule = class DesignationMasterRoutingModule {
};
DesignationMasterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DesignationMasterRoutingModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-masters-designation-master-designation-master-module-es2015.js.map