webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/cd-demos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**************************************************************************\n * GLOBAL STYLES\n *************************************************************************/\n\nhtml, body {\n    font-size: 100%;\n}\n\nbody {\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    font-weight: 300;\n    padding: 15px 50px;\n    color: #555;\n    -webkit-font-smoothing: antialiased;\n}\n\na {\n    color: #0f97f9;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\np {\n    line-height: 24px;\n}\n\np,\n.list {\n    margin-top: 1em;\n}\n\n.list li {\n    margin-left: 1em;\n    margin-top: 0.5em;\n}\n\nbutton {\n    padding: 1em;\n    font-size: 16px;\n    border-radius: 0.3em;\n    border: 0;\n    background: #EA5548;\n    color: #fff;\n    font-weight: bold;\n    margin-top: 2em;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n/**************************************************************************\n * SITE LAYOUT\n *************************************************************************/\n\n.site-header {\n    margin: 0;\n    padding: 15px 0;\n}\n\n.site-header h1 {\n    margin: 0;\n    padding: 0;\n    font-size: 2rem;\n    line-height: 2rem;\n}\n\n.site-nav {\n    padding: 15px 0;\n    margin-left: -15px;\n    margin-bottom: 15px;\n}\n\n.site-nav > a {\n    display: inline-block;\n    margin-left: 15px;\n}\n\n.site-main {\n    margin-bottom: 2em;\n}\n\n/**************************************************************************\n * TREE STYLES\n *************************************************************************/\n\n.tree {\n    margin-top: 1em;\n}\n\n.tree ul {\n    padding-top: 20px;\n    position: relative;\n\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n}\n\n.tree li {\n    float: left;\n    text-align: center;\n    list-style-type: none;\n    position: relative;\n    padding: 20px 5px 0 5px;\n\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n}\n\n/*We will use ::before and ::after to draw the connectors*/\n\n.tree li::before, .tree li::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 50%;\n    border-top: 1px solid #ccc;\n    width: 50%;\n    height: 20px;\n}\n\n.tree li::after {\n    right: auto;\n    left: 50%;\n    border-left: 1px solid #ccc;\n}\n\n/*We need to remove left-right connectors from elements without\nany siblings*/\n.tree li:only-child::after, .tree li:only-child::before {\n    display: none;\n}\n\n/*Remove space from the top of single children*/\n.tree li:only-child {\n    padding-top: 0;\n}\n\n/*Remove left connector from first child and\nright connector from last child*/\n.tree li:first-child::before, .tree li:last-child::after {\n    border: 0 none;\n}\n\n/*Adding back the vertical connector to the last nodes*/\n.tree li:last-child::before {\n    border-right: 1px solid #ccc;\n    border-radius: 0 5px 0 0;\n    -webkit-border-radius: 0 5px 0 0;\n    -moz-border-radius: 0 5px 0 0;\n}\n\n.tree li:first-child::after {\n    border-radius: 5px 0 0 0;\n    -webkit-border-radius: 5px 0 0 0;\n    -moz-border-radius: 5px 0 0 0;\n}\n\n/*Time to add downward connectors from parents*/\n.tree ul ul::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 50%;\n    border-left: 1px solid #ccc;\n    width: 0;\n    height: 20px;\n}\n\n.tree li a,\n.tree li .component {\n    background: #c8e4f8;\n    color: #000;\n    border: 1px solid #94a0b4;\n    padding: 0.5em 1em;\n    text-decoration: none;\n    font-family: arial, verdana, tahoma;\n    font-size: 16px;\n    font-weight: bold;\n    display: inline-block;\n\n    border-radius: 5px;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n}\n\n/*Time for some hover effects*/\n/*We will apply the hover effect the the lineage of the element also*/\n.tree li a:hover, .tree li a:hover + ul li a {\n    /* .tree li .component:hover, .tree li .component:hover+ul li .component { */\n    /* background: #94a0b4; */\n    color: #000;\n    border: 1px solid #555;\n}\n\n/*Connector styles on hover*/\n.tree li a:hover + ul li::after,\n.tree li a:hover + ul li::before,\n.tree li a:hover + ul::before,\n.tree li a:hover + ul ul::before,\n.tree li .component:hover + ul li::after,\n.tree li .component:hover + ul li::before,\n.tree li .component:hover + ul::before,\n.tree li .component:hover + ul ul::before {\n    /* border-color: #94a0b4; */\n}\n\n.tree li a.checked {\n    background: #bada55;\n}\n\n.tree li a.on-push {\n    background: #CCCED3;\n    position: relative;\n}\n\n.tree li a.detached {\n    background: #CCCED3;\n    position: relative;\n}\n\n.tree li a.detached.checked,\n.tree li a.on-push.checked {\n    background: #bada55;\n}\n\n.tree li a.on-push.subscriber {\n    background: #85A6E8;\n}\n\n.tree li a.on-push.checked-observable {\n    background: #F4C812;\n}\n\n.tree li a.detached:before {\n    position: absolute;\n    content: 'Detached';\n    left: -3em;\n    background: white;\n    border: 1px solid #77819E;\n    color: #333;\n    top: -0.5em;\n    line-height: 24px;\n}\n\n.tree li a.on-push:before {\n    position: absolute;\n    content: 'OnPush';\n    left: -3em;\n    background: white;\n    border: 1px solid #77819E;\n    color: #333;\n    top: -0.5em;\n    line-height: 24px;\n}\n\n.tree li a.click-me {\n    position: relative;\n    -webkit-animation: pusate 1s infinite alternate;\n    -moz-animation: pusate 1s infinite alternate;\n    -animation: pusate 1s infinite alternate;\n    text-shadow: 0 0 8px #ccc;\n}\n\n.tree li a.click-me:hover {\n    cursor: pointer;\n}\n\n/* .tree li a.click-me:before { */\n/*   position: absolute; */\n/*   content: 'Click Me!'; */\n/*   left: -1em; */\n/*   background: white; */\n/*   border: 1px solid #77819E; */\n/*   color: #333; */\n/*   top: 0.4em; */\n/*   line-height: 24px; */\n/*   padding: 0em 0.2em; */\n/* } */\n\n@-webkit-keyframes pusate {\n    from {\n        box-shadow: 0 0 10px #fff;\n    }\n    to {\n        box-shadow: 0 0 20px #c00;\n    }\n}\n\n@keyframes pusate {\n    from {\n        box-shadow: 0 0 10px #fff;\n    }\n    to {\n        box-shadow: 0 0 20px #c00;\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cd-demos.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Angular 2 Change Detection Demos</h1>\n<p>Pick one of the following:</p>\n<div class=\"site-nav\">\n    <a routerLink=\"/default-change-detection\">Default Change Detection</a>\n    <a routerLink=\"/on-push-change-detection\">OnPush Change Detection</a>\n    <a routerLink=\"/on-push-change-detection-observables\">OnPush Change Detection (Observables)</a>\n    <a routerLink=\"/manual-change-detection\">Manual Change Detection</a>\n</div>\n<div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cd-demos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdDemosAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_change_detection__ = __webpack_require__("../../../../../src/app/default-change-detection/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__on_push_change_detection__ = __webpack_require__("../../../../../src/app/on-push-change-detection/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__on_push_change_detection_observables__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manual_change_detection__ = __webpack_require__("../../../../../src/app/manual-change-detection/index.ts");
// tslint:disable:component-selector
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CdDemosAppComponent = (function () {
    function CdDemosAppComponent() {
        this.notifier = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    CdDemosAppComponent.prototype.ngDoCheck = function () {
        if (this.defaultChangeDetectionCmp) {
            this.defaultChangeDetectionCmp.notifier = this.notifier;
        }
        if (this.onPushChangeDetectionCmp) {
            this.onPushChangeDetectionCmp.notifier = this.notifier;
        }
        if (this.onPushChangeDetectionObservablesCmp) {
            this.onPushChangeDetectionObservablesCmp.notifier = this.notifier;
        }
        if (this.manualChangeDetectionCmp) {
            this.manualChangeDetectionCmp.notifier = this.notifier;
        }
    };
    return CdDemosAppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__default_change_detection__["a" /* DefaultChangeDetectionComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__default_change_detection__["a" /* DefaultChangeDetectionComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__default_change_detection__["a" /* DefaultChangeDetectionComponent */]) === "function" && _a || Object)
], CdDemosAppComponent.prototype, "defaultChangeDetectionCmp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__on_push_change_detection__["a" /* OnPushChangeDetectionComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__on_push_change_detection__["a" /* OnPushChangeDetectionComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__on_push_change_detection__["a" /* OnPushChangeDetectionComponent */]) === "function" && _b || Object)
], CdDemosAppComponent.prototype, "onPushChangeDetectionCmp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__on_push_change_detection_observables__["a" /* OnPushChangeDetectionObservablesComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__on_push_change_detection_observables__["a" /* OnPushChangeDetectionObservablesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__on_push_change_detection_observables__["a" /* OnPushChangeDetectionObservablesComponent */]) === "function" && _c || Object)
], CdDemosAppComponent.prototype, "onPushChangeDetectionObservablesCmp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__manual_change_detection__["a" /* ManualChangeDetectionComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__manual_change_detection__["a" /* ManualChangeDetectionComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__manual_change_detection__["a" /* ManualChangeDetectionComponent */]) === "function" && _d || Object)
], CdDemosAppComponent.prototype, "manualChangeDetectionCmp", void 0);
CdDemosAppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cd-demos-app',
        template: __webpack_require__("../../../../../src/app/cd-demos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cd-demos.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
    })
], CdDemosAppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/cd-demos.component.js.map

/***/ }),

/***/ "../../../../../src/app/cd-demos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdDemosAppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../../_@angular_common@4.4.3@@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../../_@angular_platform-browser@4.4.3@@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.3@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toggle_state_service__ = __webpack_require__("../../../../../src/app/toggle-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cd_demos_component__ = __webpack_require__("../../../../../src/app/cd-demos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__default_change_detection__ = __webpack_require__("../../../../../src/app/default-change-detection/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manual_change_detection__ = __webpack_require__("../../../../../src/app/manual-change-detection/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__on_push_change_detection__ = __webpack_require__("../../../../../src/app/on-push-change-detection/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__on_push_change_detection_observables__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__on_push_change_detection_observables_on_push_change_detection_observables_module__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/on-push-change-detection-observables.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    {
        path: '',
        redirectTo: '/default-change-detection',
        pathMatch: 'full'
    },
    {
        path: 'default-change-detection',
        component: __WEBPACK_IMPORTED_MODULE_6__default_change_detection__["a" /* DefaultChangeDetectionComponent */]
    },
    {
        path: 'on-push-change-detection',
        component: __WEBPACK_IMPORTED_MODULE_8__on_push_change_detection__["a" /* OnPushChangeDetectionComponent */]
    },
    {
        path: 'on-push-change-detection-observables',
        component: __WEBPACK_IMPORTED_MODULE_9__on_push_change_detection_observables__["a" /* OnPushChangeDetectionObservablesComponent */]
    },
    {
        path: 'manual-change-detection',
        component: __WEBPACK_IMPORTED_MODULE_7__manual_change_detection__["a" /* ManualChangeDetectionComponent */]
    }
];
var CdDemosAppModule = (function () {
    function CdDemosAppModule() {
    }
    return CdDemosAppModule;
}());
CdDemosAppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__cd_demos_component__["a" /* CdDemosAppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__cd_demos_component__["a" /* CdDemosAppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shared__["a" /* AttachableCompnentBase */],
            __WEBPACK_IMPORTED_MODULE_11__shared__["b" /* CompnentBase */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6__default_change_detection__["b" /* DefaultChangeDetectionModule */],
            __WEBPACK_IMPORTED_MODULE_7__manual_change_detection__["b" /* ManualChangeDetectionModule */],
            __WEBPACK_IMPORTED_MODULE_8__on_push_change_detection__["b" /* OnPushChangeDetectionModule */],
            __WEBPACK_IMPORTED_MODULE_10__on_push_change_detection_observables_on_push_change_detection_observables_module__["a" /* OnPushChangeDetectionObservablesModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__toggle_state_service__["b" /* ToggleStateService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* LocationStrategy */],
                useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* HashLocationStrategy */]
            }
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]],
    })
], CdDemosAppModule);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/cd-demos.module.js.map

/***/ }),

/***/ "../../../../../src/app/default-change-detection/component-five/component-five.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFive; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_click_directives__ = __webpack_require__("../../../../../src/app/shared/click.directives.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentFive = (function (_super) {
    __extends(ComponentFive, _super);
    function ComponentFive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComponentFive;
}(__WEBPACK_IMPORTED_MODULE_1__shared_click_directives__["b" /* CompnentBase */]));
ComponentFive = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-five',
        template: "\n        <a (click)=\"ngDoCheck($event)\">Cmp5</a>\n    "
    })
], ComponentFive);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-five.component.js.map

/***/ }),

/***/ "../../../../../src/app/default-change-detection/component-four/component-four.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_click_directives__ = __webpack_require__("../../../../../src/app/shared/click.directives.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentFour = (function (_super) {
    __extends(ComponentFour, _super);
    function ComponentFour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComponentFour;
}(__WEBPACK_IMPORTED_MODULE_1__shared_click_directives__["b" /* CompnentBase */]));
ComponentFour = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-four',
        template: "\n        <a  (click)=\"ngDoCheck($event)\">Cmp4</a>\n    "
    })
], ComponentFour);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-four.component.js.map

/***/ }),

/***/ "../../../../../src/app/default-change-detection/component-one/component-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_click_directives__ = __webpack_require__("../../../../../src/app/shared/click.directives.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentOne = (function (_super) {
    __extends(ComponentOne, _super);
    function ComponentOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComponentOne;
}(__WEBPACK_IMPORTED_MODULE_1__shared_click_directives__["b" /* CompnentBase */]));
ComponentOne = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-one',
        template: "\n        <a (click)=\"ngDoCheck($event)\">Cmp1</a>\n\n        <ul>\n            <li>\n                <cmp-two></cmp-two>\n            </li>\n            <li>\n                <cmp-three></cmp-three>\n            </li>\n        </ul>\n    "
    })
], ComponentOne);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-one.component.js.map

/***/ }),

/***/ "../../../../../src/app/default-change-detection/component-seven/component-seven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSeven; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_click_directives__ = __webpack_require__("../../../../../src/app/shared/click.directives.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentSeven = (function (_super) {
    __extends(ComponentSeven, _super);
    function ComponentSeven() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComponentSeven;
}(__WEBPACK_IMPORTED_MODULE_1__shared_click_directives__["b" /* CompnentBase */]));
ComponentSeven = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-seven',
        template: "\n        <a  (click)=\"ngDoCheck($event)\">Cmp7</a>\n    "
    })
], ComponentSeven);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-seven.component.js.map

/***/ }),

/***/ "../../../../../src/app/default-change-detection/component-six/component-six.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSix; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_click_directives__ = __webpack_require__("../../../../../src/app/shared/click.directives.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentSix = (function (_super) {
    __extends(ComponentSix, _super);
    function ComponentSix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComponentSix;
}(__WEBPACK_IMPORTED_MODULE_1__shared_click_directives__["b" /* CompnentBase */]));
ComponentSix = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-six',
        template: "\n        <a  (click)=\"ngDoCheck($event)\">Cmp6</a>\n    "
    })
], ComponentSix);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-six.component.js.map

/***/ }),

/***/ "../../../../../src/app/default-change-detection/component-three/component-three.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentThree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_click_directives__ = __webpack_require__("../../../../../src/app/shared/click.directives.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentThree = (function (_super) {
    __extends(ComponentThree, _super);
    function ComponentThree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComponentThree;
}(__WEBPACK_IMPORTED_MODULE_1__shared_click_directives__["b" /* CompnentBase */]));
ComponentThree = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-three',
        template: "\n        <a (click)=\"ngDoCheck($event)\">Cmp3</a>\n\n        <ul>\n            <li>\n                <cmp-six></cmp-six>\n            </li>\n            <li>\n                <cmp-seven></cmp-seven>\n            </li>\n        </ul>\n    "
    })
], ComponentThree);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-three.component.js.map

/***/ }),

/***/ "../../../../../src/app/default-change-detection/component-two/component-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTwo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_click_directives__ = __webpack_require__("../../../../../src/app/shared/click.directives.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentTwo = (function (_super) {
    __extends(ComponentTwo, _super);
    function ComponentTwo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComponentTwo;
}(__WEBPACK_IMPORTED_MODULE_1__shared_click_directives__["b" /* CompnentBase */]));
ComponentTwo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-two',
        template: "\n        <a  (click)=\"ngDoCheck($event)\">Cmp2</a>\n\n        <ul>\n            <li>\n                <cmp-four></cmp-four>\n            </li>\n            <li>\n                <cmp-five></cmp-five>\n            </li>\n        </ul>\n    "
    })
], ComponentTwo);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-two.component.js.map

/***/ }),

/***/ "../../../../../src/app/default-change-detection/default-change-detection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/default-change-detection/default-change-detection.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Default Change Detection</h2>\n<p>This demo shows how change detection is performed for each\n    component after every VM turn. <br>All components should light up when:</p>\n\n\n<ol class=\"list\">\n    <li>The app is bootstrapped (reload browser to double-check)</li>\n    <li>The \"Trigger CD\" button is clicked</li>\n</ol>\n\n<div>\n    <button (click)=\"null\">Trigger Change Detection</button>\n</div>\n<div class=\"tree\">\n    <ul>\n        <li>\n            <cmp-one></cmp-one>\n        </li>\n    </ul>\n</div>\n<div style=\"margin-bottom: 5em; clear: both;\"></div>\n<input  [(ngModel)]=\"name\">"

/***/ }),

/***/ "../../../../../src/app/default-change-detection/default-change-detection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultChangeDetectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_state_service__ = __webpack_require__("../../../../../src/app/toggle-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_click_directives__ = __webpack_require__("../../../../../src/app/shared/click.directives.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefaultChangeDetectionComponent = (function (_super) {
    __extends(DefaultChangeDetectionComponent, _super);
    function DefaultChangeDetectionComponent(toggleStateService, zone, el, cd) {
        var _this = _super.call(this, zone, el, cd) || this;
        _this.toggleStateService = toggleStateService;
        return _this;
    }
    DefaultChangeDetectionComponent.prototype.notifyInterval = function (runInterval) {
        this.toggleStateService.runInterval = runInterval;
        this.notifier.next(runInterval);
    };
    return DefaultChangeDetectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared_click_directives__["b" /* CompnentBase */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DefaultChangeDetectionComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('checkbox'),
    __metadata("design:type", Object)
], DefaultChangeDetectionComponent.prototype, "checkbox", void 0);
DefaultChangeDetectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-default-change-detection',
        template: __webpack_require__("../../../../../src/app/default-change-detection/default-change-detection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/default-change-detection/default-change-detection.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__toggle_state_service__["b" /* ToggleStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__toggle_state_service__["b" /* ToggleStateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _d || Object])
], DefaultChangeDetectionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/default-change-detection.component.js.map

/***/ }),

/***/ "../../../../../src/app/default-change-detection/default-change-detection.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultChangeDetectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../../_@angular_forms@4.4.3@@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../../_@angular_common@4.4.3@@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__default_change_detection_component__ = __webpack_require__("../../../../../src/app/default-change-detection/default-change-detection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_one_component_one_component__ = __webpack_require__("../../../../../src/app/default-change-detection/component-one/component-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_two_component_two_component__ = __webpack_require__("../../../../../src/app/default-change-detection/component-two/component-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_three_component_three_component__ = __webpack_require__("../../../../../src/app/default-change-detection/component-three/component-three.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_four_component_four_component__ = __webpack_require__("../../../../../src/app/default-change-detection/component-four/component-four.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_five_component_five_component__ = __webpack_require__("../../../../../src/app/default-change-detection/component-five/component-five.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_six_component_six_component__ = __webpack_require__("../../../../../src/app/default-change-detection/component-six/component-six.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_seven_component_seven_component__ = __webpack_require__("../../../../../src/app/default-change-detection/component-seven/component-seven.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DefaultChangeDetectionModule = (function () {
    function DefaultChangeDetectionModule() {
    }
    return DefaultChangeDetectionModule;
}());
DefaultChangeDetectionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__default_change_detection_component__["a" /* DefaultChangeDetectionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__component_one_component_one_component__["a" /* ComponentOne */],
            __WEBPACK_IMPORTED_MODULE_5__component_two_component_two_component__["a" /* ComponentTwo */],
            __WEBPACK_IMPORTED_MODULE_6__component_three_component_three_component__["a" /* ComponentThree */],
            __WEBPACK_IMPORTED_MODULE_7__component_four_component_four_component__["a" /* ComponentFour */],
            __WEBPACK_IMPORTED_MODULE_8__component_five_component_five_component__["a" /* ComponentFive */],
            __WEBPACK_IMPORTED_MODULE_9__component_six_component_six_component__["a" /* ComponentSix */],
            __WEBPACK_IMPORTED_MODULE_10__component_seven_component_seven_component__["a" /* ComponentSeven */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
        ]
    })
], DefaultChangeDetectionModule);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/default-change-detection.module.js.map

/***/ }),

/***/ "../../../../../src/app/default-change-detection/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default_change_detection_module__ = __webpack_require__("../../../../../src/app/default-change-detection/default-change-detection.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__default_change_detection_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_change_detection_component__ = __webpack_require__("../../../../../src/app/default-change-detection/default-change-detection.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__default_change_detection_component__["a"]; });


//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cd_demos_module__ = __webpack_require__("../../../../../src/app/cd-demos.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cd_demos_module__["a"]; });

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-eight/component-eight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentEight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentEight = (function () {
    function ComponentEight(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentEight.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentEight;
}());
ComponentEight = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-eight',
        template: "\n        <a (click)=\"1\">Cmp8</a>\n\n        <ul>\n            <li>\n                <cmp-sixteen></cmp-sixteen>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentEight);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-eight.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-eleven/component-eleven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentEleven; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentEleven = (function () {
    function ComponentEleven(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentEleven.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentEleven;
}());
ComponentEleven = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-eleven',
        template: "\n        <a (click)=\"1\">Cmp11</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentEleven);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-eleven.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-five/component-five.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFive; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentFive = (function () {
    function ComponentFive(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFive.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentFive;
}());
ComponentFive = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-five',
        template: "\n        <a (click)=\"1\">Cmp5</a>\n\n        <ul>\n            <li>\n                <cmp-ten></cmp-ten>\n            </li>\n            <li>\n                <cmp-eleven></cmp-eleven>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentFive);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-five.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-fiveteen/component-fiveteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFiveteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentFiveteen = (function () {
    function ComponentFiveteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFiveteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentFiveteen;
}());
ComponentFiveteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-fiveteen',
        template: "\n        <a (click)=\"1\">Cmp15</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentFiveteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-fiveteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-four/component-four.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentFour = (function () {
    function ComponentFour(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFour.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    ComponentFour.prototype.triggerChangeDetection = function () {
    };
    return ComponentFour;
}());
ComponentFour = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-four',
        template: "\n        <a (click)=\"1\">Cmp4</a>\n\n        <ul>\n            <li>\n                <cmp-eight></cmp-eight>\n            </li>\n            <li>\n                <cmp-nine></cmp-nine>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentFour);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-four.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-fourteen/component-fourteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFourteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentFourteen = (function () {
    function ComponentFourteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFourteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentFourteen;
}());
ComponentFourteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-fourteen',
        template: "\n        <a (click)=\"1\">Cmp14</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentFourteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-fourteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-nine/component-nine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentNine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentNine = (function () {
    function ComponentNine(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentNine.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentNine;
}());
ComponentNine = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-nine',
        template: "\n        <a (click)=\"1\">Cmp9</a>\n\n        <ul>\n            <li>\n                <cmp-seventeen></cmp-seventeen>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentNine);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-nine.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-one/component-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentOne = (function () {
    function ComponentOne(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentOne.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentOne;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]) === "function" && _a || Object)
], ComponentOne.prototype, "notifier", void 0);
ComponentOne = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-one',
        template: "\n        <a (click)=\"1\">Cmp1</a>\n\n        <ul>\n            <li>\n                <cmp-two [notifier]=\"notifier\"></cmp-two>\n            </li>\n            <li>\n                <cmp-three></cmp-three>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
], ComponentOne);

var _a, _b, _c;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-one.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-seven/component-seven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSeven; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentSeven = (function () {
    function ComponentSeven(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentSeven.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentSeven;
}());
ComponentSeven = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-seven',
        template: "\n        <a (click)=\"1\">Cmp7</a>\n\n        <ul>\n            <li>\n                <cmp-fourteen></cmp-fourteen>\n            </li>\n            <li>\n                <cmp-fiveteen></cmp-fiveteen>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentSeven);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-seven.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-seventeen/component-seventeen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSeventeen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentSeventeen = (function () {
    function ComponentSeventeen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentSeventeen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentSeventeen;
}());
ComponentSeventeen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-seventeen',
        template: "\n        <a (click)=\"1\">Cmp17</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentSeventeen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-seventeen.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-six/component-six.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSix; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentSix = (function () {
    function ComponentSix(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentSix.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentSix;
}());
ComponentSix = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-six',
        template: "\n        <a (click)=\"1\">Cmp6</a>\n\n        <ul>\n            <li>\n                <cmp-twelve></cmp-twelve>\n            </li>\n            <li>\n                <cmp-thirteen></cmp-thirteen>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentSix);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-six.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-sixteen/component-sixteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSixteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentSixteen = (function () {
    function ComponentSixteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentSixteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentSixteen;
}());
ComponentSixteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-sixteen',
        template: "\n        <a (click)=\"1\">Cmp16</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentSixteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-sixteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-ten/component-ten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_state_service__ = __webpack_require__("../../../../../src/app/toggle-state.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentTen = (function () {
    function ComponentTen(zone, el, cd) {
        this.zone = zone;
        this.el = el;
        this.cd = cd;
    }
    ComponentTen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    ComponentTen.prototype.next = function () {
        __WEBPACK_IMPORTED_MODULE_2__toggle_state_service__["a" /* MessageService */].messages.next();
    };
    return ComponentTen;
}());
ComponentTen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-ten',
        template: "\n        <a (click)=\"next()\">Cmp10</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _c || Object])
], ComponentTen);

var _a, _b, _c;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-ten.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-thirteen/component-thirteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentThirteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentThirteen = (function () {
    function ComponentThirteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentThirteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentThirteen;
}());
ComponentThirteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-thirteen',
        template: "\n        <a (click)=\"1\">Cmp13</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentThirteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-thirteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-three/component-three.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentThree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_click_directives__ = __webpack_require__("../../../../../src/app/shared/click.directives.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentThree = (function (_super) {
    __extends(ComponentThree, _super);
    function ComponentThree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentThree.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentThree;
}(__WEBPACK_IMPORTED_MODULE_2__shared_click_directives__["a" /* AttachableCompnentBase */]));
ComponentThree = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-three',
        template: "\n        <a (click)=\"1\">Cmp3</a>\n\n        <ul>\n            <li>\n                <cmp-six></cmp-six>\n            </li>\n            <li>\n                <cmp-seven></cmp-seven>\n            </li>\n        </ul>\n    "
    })
], ComponentThree);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-three.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-twelve/component-twelve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTwelve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_state_service__ = __webpack_require__("../../../../../src/app/toggle-state.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentTwelve = (function () {
    function ComponentTwelve(zone, el, cd) {
        var _this = this;
        this.zone = zone;
        this.el = el;
        this.cd = cd;
        __WEBPACK_IMPORTED_MODULE_2__toggle_state_service__["a" /* MessageService */].messages.subscribe(function (a) {
            _this.cd.detectChanges();
        });
    }
    ComponentTwelve.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentTwelve;
}());
ComponentTwelve = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-twelve',
        template: "\n        <a (click)=\"1\">Cmp12</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _c || Object])
], ComponentTwelve);

var _a, _b, _c;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-twelve.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/component-two/component-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTwo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_click_directives__ = __webpack_require__("../../../../../src/app/shared/click.directives.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentTwo = (function (_super) {
    __extends(ComponentTwo, _super);
    function ComponentTwo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attached = false;
        return _this;
    }
    ComponentTwo.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentTwo;
}(__WEBPACK_IMPORTED_MODULE_3__shared_click_directives__["a" /* AttachableCompnentBase */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]) === "function" && _a || Object)
], ComponentTwo.prototype, "notifier", void 0);
ComponentTwo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-two',
        template: "\n        <a  (click)=\"1\" class=\"detached\">Cmp2</a>\n\n        <ul>\n            <li>\n                <cmp-four></cmp-four>\n            </li>\n            <li>\n                <cmp-five></cmp-five>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    })
], ComponentTwo);

var _a;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-two.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manual_change_detection_module__ = __webpack_require__("../../../../../src/app/manual-change-detection/manual-change-detection.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__manual_change_detection_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manual_change_detection_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/manual-change-detection.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__manual_change_detection_component__["a"]; });


//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/manual-change-detection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualChangeDetectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_state_service__ = __webpack_require__("../../../../../src/app/toggle-state.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManualChangeDetectionComponent = (function () {
    function ManualChangeDetectionComponent() {
        this.attachOrDetachNotifier = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    ManualChangeDetectionComponent.prototype.attachOrDetachChangeDetector = function (attach) {
        // this.attachOrDetachNotifier.next(attach);
        __WEBPACK_IMPORTED_MODULE_2__toggle_state_service__["a" /* MessageService */].messages.next(attach);
    };
    return ManualChangeDetectionComponent;
}());
ManualChangeDetectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'manual-cd',
        template: "\n        <h2>Manual Change Detection</h2>\n        <p>This demo shows how a change detector is detached from the change detector tree\n            and performes change detection manually.</p>\n\n\n        <ol class=\"list\">\n            <li>The app is bootstrapped (reload browser to double-check)</li>\n            <li>The \"Trigger CD\" button is clicked</li>\n        </ol>\n\n        <div>\n            <button (click)=\"null\">Trigger Change Detection</button>\n            <label for=\"toggle\">\n                <input id=\"toggle\" #attach type=\"checkbox\" (click)=\"attachOrDetachChangeDetector(attach.checked)\">\n                Attach/Detach Change Detector\n            </label>\n        </div>\n        <div class=\"tree\">\n            <ul>\n                <li>\n                    <cmp-one [notifier]=\"attachOrDetachNotifier\"></cmp-one>\n                </li>\n            </ul>\n        </div>\n        <div style=\"margin-bottom: 5em; clear: both;\"></div>\n    "
    })
], ManualChangeDetectionComponent);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/manual-change-detection.component.js.map

/***/ }),

/***/ "../../../../../src/app/manual-change-detection/manual-change-detection.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualChangeDetectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manual_change_detection_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/manual-change-detection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_one_component_one_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-one/component-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_two_component_two_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-two/component-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_three_component_three_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-three/component-three.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_four_component_four_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-four/component-four.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_five_component_five_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-five/component-five.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_six_component_six_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-six/component-six.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_seven_component_seven_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-seven/component-seven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_eight_component_eight_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-eight/component-eight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_nine_component_nine_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-nine/component-nine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_ten_component_ten_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-ten/component-ten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_eleven_component_eleven_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-eleven/component-eleven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_twelve_component_twelve_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-twelve/component-twelve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_thirteen_component_thirteen_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-thirteen/component-thirteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_fourteen_component_fourteen_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-fourteen/component-fourteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_fiveteen_component_fiveteen_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-fiveteen/component-fiveteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_sixteen_component_sixteen_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-sixteen/component-sixteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_seventeen_component_seventeen_component__ = __webpack_require__("../../../../../src/app/manual-change-detection/component-seventeen/component-seventeen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var ManualChangeDetectionModule = (function () {
    function ManualChangeDetectionModule() {
    }
    return ManualChangeDetectionModule;
}());
ManualChangeDetectionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__manual_change_detection_component__["a" /* ManualChangeDetectionComponent */],
            __WEBPACK_IMPORTED_MODULE_2__component_one_component_one_component__["a" /* ComponentOne */],
            __WEBPACK_IMPORTED_MODULE_3__component_two_component_two_component__["a" /* ComponentTwo */],
            __WEBPACK_IMPORTED_MODULE_4__component_three_component_three_component__["a" /* ComponentThree */],
            __WEBPACK_IMPORTED_MODULE_5__component_four_component_four_component__["a" /* ComponentFour */],
            __WEBPACK_IMPORTED_MODULE_6__component_five_component_five_component__["a" /* ComponentFive */],
            __WEBPACK_IMPORTED_MODULE_7__component_six_component_six_component__["a" /* ComponentSix */],
            __WEBPACK_IMPORTED_MODULE_8__component_seven_component_seven_component__["a" /* ComponentSeven */],
            __WEBPACK_IMPORTED_MODULE_9__component_eight_component_eight_component__["a" /* ComponentEight */],
            __WEBPACK_IMPORTED_MODULE_10__component_nine_component_nine_component__["a" /* ComponentNine */],
            __WEBPACK_IMPORTED_MODULE_11__component_ten_component_ten_component__["a" /* ComponentTen */],
            __WEBPACK_IMPORTED_MODULE_12__component_eleven_component_eleven_component__["a" /* ComponentEleven */],
            __WEBPACK_IMPORTED_MODULE_13__component_twelve_component_twelve_component__["a" /* ComponentTwelve */],
            __WEBPACK_IMPORTED_MODULE_14__component_thirteen_component_thirteen_component__["a" /* ComponentThirteen */],
            __WEBPACK_IMPORTED_MODULE_15__component_fourteen_component_fourteen_component__["a" /* ComponentFourteen */],
            __WEBPACK_IMPORTED_MODULE_16__component_fiveteen_component_fiveteen_component__["a" /* ComponentFiveteen */],
            __WEBPACK_IMPORTED_MODULE_17__component_sixteen_component_sixteen_component__["a" /* ComponentSixteen */],
            __WEBPACK_IMPORTED_MODULE_18__component_seventeen_component_seventeen_component__["a" /* ComponentSeventeen */]
        ]
    })
], ManualChangeDetectionModule);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/manual-change-detection.module.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-eight/component-eight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentEight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentEight = (function () {
    function ComponentEight(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentEight.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentEight;
}());
ComponentEight = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-eight',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp8</a>\n\n        <ul>\n            <li>\n                <cmp-sixteen></cmp-sixteen>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentEight);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-eight.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-eleven/component-eleven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentEleven; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentEleven = (function () {
    function ComponentEleven(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentEleven.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentEleven;
}());
ComponentEleven = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-eleven',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp11</a>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentEleven);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-eleven.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-five/component-five.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFive; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentFive = (function () {
    function ComponentFive(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFive.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentFive;
}());
ComponentFive = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-five',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp5</a>\n\n        <ul>\n            <li>\n                <cmp-ten></cmp-ten>\n            </li>\n            <li>\n                <cmp-eleven></cmp-eleven>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentFive);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-five.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-fiveteen/component-fiveteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFiveteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentFiveteen = (function () {
    function ComponentFiveteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFiveteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentFiveteen;
}());
ComponentFiveteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-fiveteen',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp15</a>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentFiveteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-fiveteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-four/component-four.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentFour = (function () {
    function ComponentFour(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFour.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    ComponentFour.prototype.triggerChangeDetection = function () {
    };
    return ComponentFour;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]) === "function" && _a || Object)
], ComponentFour.prototype, "model", void 0);
ComponentFour = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-four',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp4</a>\n\n        <ul>\n            <li>\n                <cmp-eight></cmp-eight>\n            </li>\n            <li>\n                <cmp-nine [model]=\"model\"></cmp-nine>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
], ComponentFour);

var _a, _b, _c;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-four.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-fourteen/component-fourteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFourteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentFourteen = (function () {
    function ComponentFourteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFourteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentFourteen;
}());
ComponentFourteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-fourteen',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp14</a>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentFourteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-fourteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-nine/component-nine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentNine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentNine = (function () {
    function ComponentNine(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentNine.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentNine;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]) === "function" && _a || Object)
], ComponentNine.prototype, "model", void 0);
ComponentNine = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-nine',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp9</a>\n\n        <ul>\n            <li>\n                <cmp-seventeen [model]=\"model\"></cmp-seventeen>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
], ComponentNine);

var _a, _b, _c;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-nine.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-one/component-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentOne = (function () {
    function ComponentOne(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentOne.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentOne;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]) === "function" && _a || Object)
], ComponentOne.prototype, "model", void 0);
ComponentOne = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-one',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp1</a>\n\n        <ul>\n            <li>\n                <cmp-two [model]=\"model\"></cmp-two>\n            </li>\n            <li>\n                <cmp-three [model]=\"model\"></cmp-three>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
], ComponentOne);

var _a, _b, _c;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-one.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-seven/component-seven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSeven; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toggle_state_service__ = __webpack_require__("../../../../../src/app/toggle-state.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
// tslint:disable:use-host-property-decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentSeven = (function () {
    function ComponentSeven(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentSeven.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    ComponentSeven.prototype.emitAndTriggerChangeDetection = function () {
        // this.model.next(null);
        __WEBPACK_IMPORTED_MODULE_3__toggle_state_service__["a" /* MessageService */].messages.next(null);
    };
    return ComponentSeven;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]) === "function" && _a || Object)
], ComponentSeven.prototype, "model", void 0);
ComponentSeven = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-seven',
        host: {
            '(click)': 'emitAndTriggerChangeDetection()'
        },
        template: "\n        <a class=\"on-push click-me\">Cmp7</a>\n\n        <ul>\n            <li>\n                <cmp-fourteen></cmp-fourteen>\n            </li>\n            <li>\n                <cmp-fiveteen></cmp-fiveteen>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
], ComponentSeven);

var _a, _b, _c;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-seven.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-seventeen/component-seventeen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSeventeen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toggle_state_service__ = __webpack_require__("../../../../../src/app/toggle-state.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentSeventeen = (function () {
    function ComponentSeventeen(zone, el, cd) {
        this.zone = zone;
        this.el = el;
        this.cd = cd;
    }
    ComponentSeventeen.prototype.ngOnInit = function () {
        // this.model.subscribe(() => {
        //     this.cd.markForCheck();
        //     toggleClass(this.el, this.zone, 'checked-observable');
        // });
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__toggle_state_service__["a" /* MessageService */].messages.subscribe(function () {
            _this.cd.markForCheck();
            // toggleClass(this.el, this.zone, 'checked-observable');
        });
    };
    ComponentSeventeen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone, 'checked-observable');
    };
    return ComponentSeventeen;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]) === "function" && _a || Object)
], ComponentSeventeen.prototype, "model", void 0);
ComponentSeventeen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-seventeen',
        template: "\n        <a class=\"on-push subscriber\">Cmp17</a>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _d || Object])
], ComponentSeventeen);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-seventeen.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-six/component-six.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSix; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentSix = (function () {
    function ComponentSix(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentSix.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentSix;
}());
ComponentSix = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-six',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp6</a>\n\n        <ul>\n            <li>\n                <cmp-twelve></cmp-twelve>\n            </li>\n            <li>\n                <cmp-thirteen></cmp-thirteen>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentSix);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-six.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-sixteen/component-sixteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSixteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentSixteen = (function () {
    function ComponentSixteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentSixteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    ComponentSixteen.prototype.triggerChangeDetection = function () {
    };
    return ComponentSixteen;
}());
ComponentSixteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-sixteen',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp16</a>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentSixteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-sixteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-ten/component-ten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentTen = (function () {
    function ComponentTen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentTen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    ComponentTen.prototype.triggerChangeDetection = function () {
    };
    return ComponentTen;
}());
ComponentTen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-ten',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp10</a>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentTen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-ten.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-thirteen/component-thirteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentThirteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentThirteen = (function () {
    function ComponentThirteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentThirteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentThirteen;
}());
ComponentThirteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-thirteen',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp13</a>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentThirteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-thirteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-three/component-three.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentThree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentThree = (function () {
    function ComponentThree(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentThree.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentThree;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]) === "function" && _a || Object)
], ComponentThree.prototype, "model", void 0);
ComponentThree = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-three',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp3</a>\n\n        <ul>\n            <li>\n                <cmp-six></cmp-six>\n            </li>\n            <li>\n                <cmp-seven [model]=\"model\"></cmp-seven>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
], ComponentThree);

var _a, _b, _c;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-three.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-twelve/component-twelve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTwelve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentTwelve = (function () {
    function ComponentTwelve(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentTwelve.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    ComponentTwelve.prototype.triggerChangeDetection = function () {
    };
    return ComponentTwelve;
}());
ComponentTwelve = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-twelve',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp12</a>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentTwelve);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-twelve.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/component-two/component-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTwo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentTwo = (function () {
    function ComponentTwo(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentTwo.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentTwo;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]) === "function" && _a || Object)
], ComponentTwo.prototype, "model", void 0);
ComponentTwo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-two',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp2</a>\n\n        <ul>\n            <li>\n                <cmp-four [model]=\"model\"></cmp-four>\n            </li>\n            <li>\n                <cmp-five></cmp-five>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
], ComponentTwo);

var _a, _b, _c;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-two.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__on_push_change_detection_observables_module__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/on-push-change-detection-observables.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__on_push_change_detection_observables_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/on-push-change-detection-observables.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__on_push_change_detection_observables_component__["a"]; });


//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/on-push-change-detection-observables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnPushChangeDetectionObservablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OnPushChangeDetectionObservablesComponent = (function () {
    function OnPushChangeDetectionObservablesComponent() {
        this.model = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    OnPushChangeDetectionObservablesComponent.prototype.emitAndTriggerChangeDetection = function () {
        this.model.next(null);
    };
    return OnPushChangeDetectionObservablesComponent;
}());
OnPushChangeDetectionObservablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'on-push-cd-observables',
        template: "\n        <h2>OnPush Change Detection (Observables)</h2>\n        <p>This demo shows how Angular performs change detection only for a path when Observables are used.</p>\n\n        <ol class=\"list\">\n            <li>Bootstrapped app, performs CD everywhere</li>\n            <li>Click \"Trigger CD\" button, skips \"Cmp1\" subtree</li>\n            <li>Click \"Push to Cmp17\", performs CD only on path from root to Cmp17</li>\n            <li>Click \"Cmp7\", skips subtrees of \"Cmp6\", \"Cmp5\", \"Cmp8\" and performs CD on path from root to Cmp17</li>\n        </ol>\n\n        <div>\n            <button class=\"trigger\" (click)=\"null\">Trigger Change Detection</button>\n            <button class=\"trigger\" (click)=\"emitAndTriggerChangeDetection()\">Push to Cmp17</button>\n        </div>\n        <div class=\"tree\">\n            <ul>\n                <li>\n                    <cmp-one [model]=\"model\"></cmp-one>\n                </li>\n            </ul>\n        </div>\n        <div style=\"margin-bottom: 5em; clear: both;\"></div>\n        <input  [(ngModel)]=\"name\">\n    "
    })
], OnPushChangeDetectionObservablesComponent);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/on-push-change-detection-observables.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection-observables/on-push-change-detection-observables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnPushChangeDetectionObservablesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../../_@angular_forms@4.4.3@@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../../_@angular_common@4.4.3@@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__on_push_change_detection_observables_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/on-push-change-detection-observables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_one_component_one_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-one/component-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_two_component_two_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-two/component-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_three_component_three_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-three/component-three.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_four_component_four_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-four/component-four.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_six_component_six_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-six/component-six.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_five_component_five_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-five/component-five.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_seven_component_seven_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-seven/component-seven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_eight_component_eight_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-eight/component-eight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_nine_component_nine_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-nine/component-nine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_ten_component_ten_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-ten/component-ten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_eleven_component_eleven_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-eleven/component-eleven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_twelve_component_twelve_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-twelve/component-twelve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_thirteen_component_thirteen_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-thirteen/component-thirteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_fourteen_component_fourteen_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-fourteen/component-fourteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_fiveteen_component_fiveteen_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-fiveteen/component-fiveteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_sixteen_component_sixteen_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-sixteen/component-sixteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_seventeen_component_seventeen_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection-observables/component-seventeen/component-seventeen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var OnPushChangeDetectionObservablesModule = (function () {
    function OnPushChangeDetectionObservablesModule() {
    }
    return OnPushChangeDetectionObservablesModule;
}());
OnPushChangeDetectionObservablesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__on_push_change_detection_observables_component__["a" /* OnPushChangeDetectionObservablesComponent */],
            __WEBPACK_IMPORTED_MODULE_4__component_one_component_one_component__["a" /* ComponentOne */],
            __WEBPACK_IMPORTED_MODULE_5__component_two_component_two_component__["a" /* ComponentTwo */],
            __WEBPACK_IMPORTED_MODULE_6__component_three_component_three_component__["a" /* ComponentThree */],
            __WEBPACK_IMPORTED_MODULE_7__component_four_component_four_component__["a" /* ComponentFour */],
            __WEBPACK_IMPORTED_MODULE_9__component_five_component_five_component__["a" /* ComponentFive */],
            __WEBPACK_IMPORTED_MODULE_8__component_six_component_six_component__["a" /* ComponentSix */],
            __WEBPACK_IMPORTED_MODULE_10__component_seven_component_seven_component__["a" /* ComponentSeven */],
            __WEBPACK_IMPORTED_MODULE_11__component_eight_component_eight_component__["a" /* ComponentEight */],
            __WEBPACK_IMPORTED_MODULE_12__component_nine_component_nine_component__["a" /* ComponentNine */],
            __WEBPACK_IMPORTED_MODULE_13__component_ten_component_ten_component__["a" /* ComponentTen */],
            __WEBPACK_IMPORTED_MODULE_14__component_eleven_component_eleven_component__["a" /* ComponentEleven */],
            __WEBPACK_IMPORTED_MODULE_15__component_twelve_component_twelve_component__["a" /* ComponentTwelve */],
            __WEBPACK_IMPORTED_MODULE_16__component_thirteen_component_thirteen_component__["a" /* ComponentThirteen */],
            __WEBPACK_IMPORTED_MODULE_17__component_fourteen_component_fourteen_component__["a" /* ComponentFourteen */],
            __WEBPACK_IMPORTED_MODULE_18__component_fiveteen_component_fiveteen_component__["a" /* ComponentFiveteen */],
            __WEBPACK_IMPORTED_MODULE_19__component_sixteen_component_sixteen_component__["a" /* ComponentSixteen */],
            __WEBPACK_IMPORTED_MODULE_20__component_seventeen_component_seventeen_component__["a" /* ComponentSeventeen */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
        ]
    })
], OnPushChangeDetectionObservablesModule);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/on-push-change-detection-observables.module.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-eight/component-eight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentEight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentEight = (function () {
    function ComponentEight(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentEight.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentEight;
}());
ComponentEight = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-eight',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp8</a>\n\n        <ul>\n            <li>\n                <cmp-sixteen></cmp-sixteen>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentEight);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-eight.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-eleven/component-eleven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentEleven; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentEleven = (function () {
    function ComponentEleven(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentEleven.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentEleven;
}());
ComponentEleven = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-eleven',
        template: "\n        <a (click)=\"1\">Cmp11</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentEleven);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-eleven.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-five/component-five.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFive; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentFive = (function () {
    function ComponentFive(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFive.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentFive;
}());
ComponentFive = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-five',
        template: "\n        <a (click)=\"1\">Cmp5</a>\n\n        <ul>\n            <li>\n                <cmp-ten></cmp-ten>\n            </li>\n            <li>\n                <cmp-eleven></cmp-eleven>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentFive);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-five.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-fiveteen/component-fiveteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFiveteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentFiveteen = (function () {
    function ComponentFiveteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFiveteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentFiveteen;
}());
ComponentFiveteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-fiveteen',
        template: "\n        <a (click)=\"1\">Cmp15</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentFiveteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-fiveteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-four/component-four.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentFour = (function () {
    function ComponentFour(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFour.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    ComponentFour.prototype.triggerChangeDetection = function () {
    };
    return ComponentFour;
}());
ComponentFour = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-four',
        template: "\n        <a (click)=\"1\">Cmp4</a>\n\n        <ul>\n            <li>\n                <cmp-eight></cmp-eight>\n            </li>\n            <li>\n                <cmp-nine></cmp-nine>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentFour);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-four.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-fourteen/component-fourteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFourteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentFourteen = (function () {
    function ComponentFourteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentFourteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentFourteen;
}());
ComponentFourteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-fourteen',
        template: "\n        <a (click)=\"1\">Cmp14</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentFourteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-fourteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-nine/component-nine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentNine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentNine = (function () {
    function ComponentNine(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentNine.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentNine;
}());
ComponentNine = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-nine',
        template: "\n        <a (click)=\"1\">Cmp9</a>\n\n        <ul>\n            <li>\n                <cmp-seventeen></cmp-seventeen>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentNine);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-nine.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-one/component-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentOne = (function () {
    function ComponentOne(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentOne.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentOne;
}());
ComponentOne = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-one',
        template: "\n        <a (click)=\"1\">Cmp1</a>\n\n        <ul>\n            <li>\n                <cmp-two></cmp-two>\n            </li>\n            <li>\n                <cmp-three></cmp-three>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentOne);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-one.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-seven/component-seven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSeven; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentSeven = (function () {
    function ComponentSeven(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentSeven.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentSeven;
}());
ComponentSeven = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-seven',
        template: "\n        <a (click)=\"1\">Cmp7</a>\n\n        <ul>\n            <li>\n                <cmp-fourteen></cmp-fourteen>\n            </li>\n            <li>\n                <cmp-fiveteen></cmp-fiveteen>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentSeven);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-seven.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-seventeen/component-seventeen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSeventeen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentSeventeen = (function () {
    function ComponentSeventeen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentSeventeen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentSeventeen;
}());
ComponentSeventeen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-seventeen',
        template: "\n        <a (click)=\"1\">Cmp17</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentSeventeen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-seventeen.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-six/component-six.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSix; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentSix = (function () {
    function ComponentSix(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentSix.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentSix;
}());
ComponentSix = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-six',
        template: "\n        <a (click)=\"1\">Cmp6</a>\n\n        <ul>\n            <li>\n                <cmp-twelve></cmp-twelve>\n            </li>\n            <li>\n                <cmp-thirteen></cmp-thirteen>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentSix);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-six.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-sixteen/component-sixteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSixteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
// tslint:disable:use-host-property-decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentSixteen = (function () {
    function ComponentSixteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentSixteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    ComponentSixteen.prototype.triggerChangeDetection = function () {
    };
    return ComponentSixteen;
}());
ComponentSixteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-sixteen',
        host: {
            '(click)': 'triggerChangeDetection()'
        },
        template: "\n        <a class=\"click-me\">Cmp16</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentSixteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-sixteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-ten/component-ten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
// tslint:disable:use-host-property-decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentTen = (function () {
    function ComponentTen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentTen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    ComponentTen.prototype.triggerChangeDetection = function () {
    };
    return ComponentTen;
}());
ComponentTen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-ten',
        host: {
            '(click)': 'triggerChangeDetection()'
        },
        template: "\n        <a class=\"click-me\">Cmp10</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentTen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-ten.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-thirteen/component-thirteen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentThirteen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentThirteen = (function () {
    function ComponentThirteen(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentThirteen.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentThirteen;
}());
ComponentThirteen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-thirteen',
        template: "\n        <a (click)=\"1\">Cmp13</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentThirteen);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-thirteen.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-three/component-three.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentThree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentThree = (function () {
    function ComponentThree(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentThree.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentThree;
}());
ComponentThree = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-three',
        template: "\n        <a (click)=\"1\">Cmp3</a>\n\n        <ul>\n            <li>\n                <cmp-six></cmp-six>\n            </li>\n            <li>\n                <cmp-seven></cmp-seven>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentThree);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-three.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-twelve/component-twelve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTwelve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
// tslint:disable:use-host-property-decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentTwelve = (function () {
    function ComponentTwelve(zone, el) {
        this.zone = zone;
        this.el = el;
    }
    ComponentTwelve.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    ComponentTwelve.prototype.triggerChangeDetection = function () {
    };
    return ComponentTwelve;
}());
ComponentTwelve = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-twelve',
        host: {
            '(click)': 'triggerChangeDetection()'
        },
        template: "\n        <a class=\"click-me\">Cmp12</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ComponentTwelve);

var _a, _b;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-twelve.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/component-two/component-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTwo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentTwo = (function () {
    function ComponentTwo(zone, el, cd) {
        this.zone = zone;
        this.el = el;
        this.cd = cd;
    }
    ComponentTwo.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return ComponentTwo;
}());
ComponentTwo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-two',
        template: "\n        <a class=\"on-push\"  (click)=\"ngDoCheck($event)\">Cmp2</a>\n\n        <ul>\n            <li>\n                <cmp-four></cmp-four>\n            </li>\n            <li>\n                <cmp-five></cmp-five>\n            </li>\n        </ul>\n    ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _c || Object])
], ComponentTwo);

var _a, _b, _c;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/component-two.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__on_push_change_detection_module__ = __webpack_require__("../../../../../src/app/on-push-change-detection/on-push-change-detection.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__on_push_change_detection_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__on_push_change_detection_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/on-push-change-detection.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__on_push_change_detection_component__["a"]; });


//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/on-push-change-detection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnPushChangeDetectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_state_service__ = __webpack_require__("../../../../../src/app/toggle-state.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OnPushChangeDetectionComponent = (function () {
    function OnPushChangeDetectionComponent(toggleStateService) {
        this.toggleStateService = toggleStateService;
    }
    OnPushChangeDetectionComponent.prototype.notifyInterval = function (runInterval) {
        this.notifier.next(runInterval);
    };
    return OnPushChangeDetectionComponent;
}());
OnPushChangeDetectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'on-push-cd',
        template: "\n        <h2>OnPush Change Detection</h2>\n        <p>This demo shows how change detection skips a component's subtree when\n            it's set to <code>OnPush</code> and non of its input property change or an\n            event is fired inside that component.</p>\n\n        <ol class=\"list\">\n            <li>Bootstrapped app, performs CD everywhere (reload to check)</li>\n            <li>Click \"Trigger CD\" button, skips \"Cmp2\" subtree</li>\n            <li>Click \"Cmp12\", skips \"Cmp2\" subtree</li>\n            <li>Click \"Cmp10\", skips \"Cmp8\" subtree</li>\n            <li>Click \"Cmp16\", performs CD everywhere</li>\n        </ol>\n\n        <div>\n            <button class=\"trigger\" (click)=\"null\">Trigger Change Detection</button>\n        </div>\n        <div class=\"tree\">\n            <ul>\n                <li>\n                    <cmp-one></cmp-one>\n                </li>\n            </ul>\n        </div>\n        <div style=\"margin-bottom: 5em; clear: both;\"></div>\n        <input  [(ngModel)]=\"name\">\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__toggle_state_service__["b" /* ToggleStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__toggle_state_service__["b" /* ToggleStateService */]) === "function" && _a || Object])
], OnPushChangeDetectionComponent);

var _a;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/on-push-change-detection.component.js.map

/***/ }),

/***/ "../../../../../src/app/on-push-change-detection/on-push-change-detection.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnPushChangeDetectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../../_@angular_forms@4.4.3@@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../../_@angular_common@4.4.3@@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__on_push_change_detection_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/on-push-change-detection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_one_component_one_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-one/component-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_two_component_two_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-two/component-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_three_component_three_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-three/component-three.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_four_component_four_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-four/component-four.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_five_component_five_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-five/component-five.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_six_component_six_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-six/component-six.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_seven_component_seven_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-seven/component-seven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_eight_component_eight_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-eight/component-eight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_nine_component_nine_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-nine/component-nine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_ten_component_ten_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-ten/component-ten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_eleven_component_eleven_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-eleven/component-eleven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_twelve_component_twelve_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-twelve/component-twelve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_thirteen_component_thirteen_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-thirteen/component-thirteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_fourteen_component_fourteen_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-fourteen/component-fourteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_fiveteen_component_fiveteen_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-fiveteen/component-fiveteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_sixteen_component_sixteen_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-sixteen/component-sixteen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_seventeen_component_seventeen_component__ = __webpack_require__("../../../../../src/app/on-push-change-detection/component-seventeen/component-seventeen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var OnPushChangeDetectionModule = (function () {
    function OnPushChangeDetectionModule() {
    }
    return OnPushChangeDetectionModule;
}());
OnPushChangeDetectionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__on_push_change_detection_component__["a" /* OnPushChangeDetectionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__component_one_component_one_component__["a" /* ComponentOne */],
            __WEBPACK_IMPORTED_MODULE_5__component_two_component_two_component__["a" /* ComponentTwo */],
            __WEBPACK_IMPORTED_MODULE_6__component_three_component_three_component__["a" /* ComponentThree */],
            __WEBPACK_IMPORTED_MODULE_7__component_four_component_four_component__["a" /* ComponentFour */],
            __WEBPACK_IMPORTED_MODULE_8__component_five_component_five_component__["a" /* ComponentFive */],
            __WEBPACK_IMPORTED_MODULE_9__component_six_component_six_component__["a" /* ComponentSix */],
            __WEBPACK_IMPORTED_MODULE_10__component_seven_component_seven_component__["a" /* ComponentSeven */],
            __WEBPACK_IMPORTED_MODULE_11__component_eight_component_eight_component__["a" /* ComponentEight */],
            __WEBPACK_IMPORTED_MODULE_12__component_nine_component_nine_component__["a" /* ComponentNine */],
            __WEBPACK_IMPORTED_MODULE_13__component_ten_component_ten_component__["a" /* ComponentTen */],
            __WEBPACK_IMPORTED_MODULE_14__component_eleven_component_eleven_component__["a" /* ComponentEleven */],
            __WEBPACK_IMPORTED_MODULE_15__component_twelve_component_twelve_component__["a" /* ComponentTwelve */],
            __WEBPACK_IMPORTED_MODULE_16__component_thirteen_component_thirteen_component__["a" /* ComponentThirteen */],
            __WEBPACK_IMPORTED_MODULE_17__component_fourteen_component_fourteen_component__["a" /* ComponentFourteen */],
            __WEBPACK_IMPORTED_MODULE_18__component_fiveteen_component_fiveteen_component__["a" /* ComponentFiveteen */],
            __WEBPACK_IMPORTED_MODULE_19__component_sixteen_component_sixteen_component__["a" /* ComponentSixteen */],
            __WEBPACK_IMPORTED_MODULE_20__component_seventeen_component_seventeen_component__["a" /* ComponentSeventeen */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
        ]
    })
], OnPushChangeDetectionModule);

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/on-push-change-detection.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/click.directives.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CompnentBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachableCompnentBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_service__ = __webpack_require__("../../../../../src/app/toggle-class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toggle_state_service__ = __webpack_require__("../../../../../src/app/toggle-state.service.ts");
// tslint:disable:component-selector
// tslint:disable:component-class-suffix
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompnentBase = (function () {
    function CompnentBase(zone, el, cd) {
        this.zone = zone;
        this.el = el;
        this.cd = cd;
    }
    CompnentBase.prototype.ngAfterContentChecked = function () {
    };
    CompnentBase.prototype.ngDoCheck = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__toggle_class_service__["a" /* toggleClass */])(this.el, this.zone);
    };
    return CompnentBase;
}());
CompnentBase = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-base',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _c || Object])
], CompnentBase);

var AttachableCompnentBase = (function (_super) {
    __extends(AttachableCompnentBase, _super);
    function AttachableCompnentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attached = false;
        return _this;
    }
    AttachableCompnentBase.prototype.ngOnInit = function () {
        var _this = this;
        this.cd.detach();
        __WEBPACK_IMPORTED_MODULE_3__toggle_state_service__["a" /* MessageService */].messages.subscribe(function (attach) {
            if (attach) {
                _this.el.nativeElement.querySelector('a').classList.remove('detached');
                _this.cd.reattach();
            }
            else {
                _this.el.nativeElement.querySelector('a').classList.add('detached');
                _this.cd.detach();
            }
        });
    };
    return AttachableCompnentBase;
}(CompnentBase));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]) === "function" && _d || Object)
], AttachableCompnentBase.prototype, "notifier", void 0);
AttachableCompnentBase = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-base',
        template: ''
    })
], AttachableCompnentBase);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/click.directives.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__click_directives__ = __webpack_require__("../../../../../src/app/shared/click.directives.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__click_directives__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__click_directives__["b"]; });

//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/toggle-class.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleClass;
function toggleClass(el, zone, className) {
    if (className === void 0) { className = 'checked'; }
    console.log(el.nativeElement.localName);
    var a = el.nativeElement.querySelector('a');
    a.classList.add(className);
    zone.runOutsideAngular(function () {
        setTimeout(function () {
            a.classList.remove(className);
        }, 2000);
    });
}
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/toggle-class.service.js.map

/***/ }),

/***/ "../../../../../src/app/toggle-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToggleStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToggleStateService = (function () {
    function ToggleStateService() {
        this.runInterval = false;
    }
    return ToggleStateService;
}());
ToggleStateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], ToggleStateService);

var MessageService = (function () {
    function MessageService() {
    }
    return MessageService;
}());

MessageService.messages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/toggle-state.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../../_@angular_platform-browser-dynamic@4.4.3@@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app___ = __webpack_require__("../../../../../src/app/index.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app___["a" /* CdDemosAppModule */]);
//# sourceMappingURL=/home/projects/WebClientProject/angular2-change-detection-demos/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map