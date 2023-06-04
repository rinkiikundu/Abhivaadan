function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./posts/post-list/post-list.component */
    "./src/app/posts/post-list/post-list.component.ts");
    /* harmony import */


    var _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./posts/create-post/create-post.component */
    "./src/app/posts/create-post/create-post.component.ts");
    /* harmony import */


    var _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./posts/post-detail/post-detail.component */
    "./src/app/posts/post-detail/post-detail.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _posts_myposts_myposts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./posts/myposts/myposts.component */
    "./src/app/posts/myposts/myposts.component.ts");
    /* harmony import */


    var _profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile/create-profile/create-profile.component */
    "./src/app/profile/create-profile/create-profile.component.ts");
    /* harmony import */


    var _profile_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./profile/view-profile/view-profile.component */
    "./src/app/profile/view-profile/view-profile.component.ts");

    var routes = [{
      path: '',
      component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__["PostListComponent"]
    }, {
      path: 'myposts',
      component: _posts_myposts_myposts_component__WEBPACK_IMPORTED_MODULE_7__["MypostsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'create',
      component: _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_3__["CreatePostComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'login',
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'myposts/:postId',
      component: _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'myposts/edit/:postId',
      component: _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_3__["CreatePostComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'profile',
      component: _profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_8__["CreateProfileComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'public/:profileId',
      component: _profile_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_9__["ViewProfileComponent"]
    }, {
      path: 'profile/:profileId',
      component: _profile_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_9__["ViewProfileComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'profile/edit/:profileId',
      component: _profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_8__["CreateProfileComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'public/:profileId/posts/:postId',
      component: _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailComponent"]
    }, {
      path: ':postId',
      component: _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService, profileService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.profileService = profileService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.autoAuthUser();
          this.profileService.autogetProfile();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./posts/post-list/post-list.component */
    "./src/app/posts/post-list/post-list.component.ts");
    /* harmony import */


    var _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./posts/create-post/create-post.component */
    "./src/app/posts/create-post/create-post.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");
    /* harmony import */


    var _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./posts/post-detail/post-detail.component */
    "./src/app/posts/post-detail/post-detail.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/auth-interceptor */
    "./src/app/auth/auth-interceptor.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _posts_myposts_myposts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./posts/myposts/myposts.component */
    "./src/app/posts/myposts/myposts.component.ts");
    /* harmony import */


    var _profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./profile/create-profile/create-profile.component */
    "./src/app/profile/create-profile/create-profile.component.ts");
    /* harmony import */


    var _profile_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./profile/view-profile/view-profile.component */
    "./src/app/profile/view-profile/view-profile.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_9__["PostService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_19__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__["PostListComponent"], _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_7__["CreatePostComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"], _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_11__["PostDetailComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _posts_myposts_myposts_component__WEBPACK_IMPORTED_MODULE_16__["MypostsComponent"], _profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_17__["CreateProfileComponent"], _profile_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_18__["ViewProfileComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__["PostListComponent"], _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_7__["CreatePostComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"], _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_11__["PostDetailComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _posts_myposts_myposts_component__WEBPACK_IMPORTED_MODULE_16__["MypostsComponent"], _profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_17__["CreateProfileComponent"], _profile_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_18__["ViewProfileComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_9__["PostService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
            multi: true
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_19__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth-interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth-interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authToken = this.authService.getToken();
          var authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authToken)
          });
          return next.handle(authRequest);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isAuth = this.authService.getIsAuth();

          if (!isAuth) {
            this.router.navigate(['/login']);
          }

          return isAuth;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/profile.service */
    "./src/app/services/profile.service.ts");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/user/";

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router, profileService) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.profileService = profileService;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.err = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(AuthService, [{
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "getIsAuth",
        value: function getIsAuth() {
          return this.isAuthenticated;
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return this.userId;
        }
      }, {
        key: "getAuthStatusListener",
        value: function getAuthStatusListener() {
          return this.authStatusListener.asObservable();
        }
      }, {
        key: "signIn",
        value: function signIn(email, password) {
          var _this = this;

          var authData = {
            email: email,
            password: password
          };
          this.http.post(BACKEND_URL + "login", authData).subscribe(function (response) {
            _this.err.next(null);

            var token = response.token;
            _this.token = token;

            if (token) {
              var expiresInDuration = response.expiresIn;

              _this.setAuthTimer(expiresInDuration);

              _this.isAuthenticated = true;
              _this.userId = response.userId;

              _this.authStatusListener.next(true);

              var now = new Date();
              var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);

              _this.saveAuthData(token, expirationDate, _this.userId);

              _this.router.navigate(["/"]);
            }
          }, function (err) {
            _this.err.next(err);
          });
        }
      }, {
        key: "createUser",
        value: function createUser(email, password) {
          var _this2 = this;

          var authData = {
            email: email,
            password: password
          };
          this.http.post(BACKEND_URL + "signup", authData).subscribe(function (response) {
            _this2.err.next(null);

            _this2.router.navigate(["/"]);
          }, function (err) {
            _this2.err.next(err);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = null;
          this.isAuthenticated = false;
          this.authStatusListener.next(false);
          clearTimeout(this.tokenTimer);
          this.clearAuthData();
          this.router.navigate(["/"]);
        }
      }, {
        key: "autoAuthUser",
        value: function autoAuthUser() {
          var authInformation = this.getAuthData();

          if (!authInformation) {
            return;
          }

          var now = new Date();
          var expiresIn = authInformation.expirationDate.getTime() - now.getTime();

          if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
          }
        }
      }, {
        key: "getAuthData",
        value: function getAuthData() {
          var token = localStorage.getItem("token");
          var expirationDate = localStorage.getItem("expiration");
          var userId = localStorage.getItem("userId");

          if (!token || !expirationDate) {
            return;
          }

          return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
          };
        }
      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(duration) {
          var _this3 = this;

          this.tokenTimer = setTimeout(function () {
            _this3.logout();
          }, duration * 1000);
        }
      }, {
        key: "saveAuthData",
        value: function saveAuthData(token, expirationDate, userId) {
          this.profileService.getProfile();
          localStorage.setItem("token", token);
          localStorage.setItem("expiration", expirationDate.toISOString());
          localStorage.setItem("userId", userId);
        }
      }, {
        key: "clearAuthData",
        value: function clearAuthData() {
          localStorage.removeItem("token");
          localStorage.removeItem("expiration");
          localStorage.removeItem("userId");
          localStorage.removeItem("profile");
          localStorage.removeItem("uname");
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function LoginComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r27.error.status, " - ", ctx_r27.error.error.message, "");
      }
    }

    function LoginComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/reset-password"];
    };

    function LoginComponent_form_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_5_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.onSubmit(_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "E-Mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_5_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.onSwitchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forget Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r30.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.isLoginMode ? "Login" : "Sign Up", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Switch to ", ctx_r29.isLoginMode ? "Sign Up" : "Login", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.error = null;
          this.authService.err.subscribe(function (err) {
            _this4.error = err;
            _this4.isLoading = false;
          });
        }
      }, {
        key: "onSwitchMode",
        value: function onSwitchMode() {
          this.isLoginMode = !this.isLoginMode;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          this.isLoading = true;

          if (!form.valid) {
            return;
          }

          var email = form.value.email;
          var password = form.value.password;

          if (this.isLoginMode) {
            this.authService.signIn(email, password);
            form.reset();
          } else {
            this.authService.createUser(email, password);
            form.reset();
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 6,
      vars: 3,
      consts: [[1, "container"], [1, "row"], [1, "col-xs-12", "col-md-6", "col-md-offset-3"], ["class", "alert alert-danger", 4, "ngIf"], ["style", "text-align: center;", "class", "loading-text", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "loading-text", 2, "text-align", "center"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "ngModel", "", "name", "email", "required", "", "email", "", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "name", "password", "required", "", "minlength", "6", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-link", 3, "routerLink"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_5_Template, 18, 5, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".col-md-offset-3[_ngcontent-%COMP%]{\r\n    margin:3rem auto\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtb2Zmc2V0LTN7XHJcbiAgICBtYXJnaW46M3JlbSBhdXRvXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      consts: [[1, "text-center", "copyright"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA9 Copyrights reserved by RINKI NISHI HARIKA JAPPU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mymenu[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n    justify-content: center;\r\n    padding-bottom: 30px;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px;\r\n    border: 0;\r\n    text-transform: uppercase;\r\n    background: rgba(0,123,255,.0627451);\r\n    color: rgba(0,123,255,.6);\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    transition: background .2s ease-in-out;\r\n    margin: 15px auto .5rem;\r\n    outline: none;\r\n    font-size: 13px;\r\n    text-decoration: none;\r\n}\r\n.github[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    transition: all .2s ease-in-out;\r\n    font-weight: 600;\r\n}\r\n.github[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n}\r\na.button.btn-light.medium[_ngcontent-%COMP%] {\r\n    background: rgba(87,100,112,.083);\r\n    width: 30%;\r\n    color: #000!important;\r\n    justify-content: center;\r\n    font-weight: 600;\r\n    padding: 11px;\r\n}\r\na.button.btn-light.medium[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n}\r\n@media screen and (max-width:551px){\r\n    .button[_ngcontent-%COMP%], a.button.btn-light.medium[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n}\r\n.footer[_ngcontent-%COMP%]{\r\n    padding: 80px 0 50px;\r\n}\r\n.copyright[_ngcontent-%COMP%] {\r\n    \r\n    background: #e2e2e2;\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJOztRQUVJLFdBQVc7SUFDZjtBQUNKO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlJQUF5STtBQUM3SSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teW1lbnV7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDEyMywyNTUsLjA2Mjc0NTEpO1xyXG4gICAgY29sb3I6IHJnYmEoMCwxMjMsMjU1LC42KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gLjVyZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5naXRodWIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmdpdGh1YiwgZm9vdGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5hLmJ1dHRvbi5idG4tbGlnaHQubWVkaXVtIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoODcsMTAwLDExMiwuMDgzKTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBjb2xvcjogIzAwMCFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG59XHJcblxyXG5hLmJ1dHRvbi5idG4tbGlnaHQubWVkaXVtIGltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MXB4KXtcclxuICAgIC5idXR0b24sXHJcbiAgICBhLmJ1dHRvbi5idG4tbGlnaHQubWVkaXVte1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgcGFkZGluZzogODBweCAwIDUwcHg7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/profile", a1];
    };

    function HeaderComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r70.username));
      }
    }

    var _c1 = function _c1() {
      return ["/profile"];
    };

    function HeaderComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function HeaderComponent_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MyPosts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Auth");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_16_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return {
        exact: true
      };
    };

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authService, profileService, route) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.profileService = profileService;
        this.route = route;
        this.userIsAuthenticated = false;
        this.profileisSet = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.profileisSet = this.profileService.getIsProfileSet();
          this.userIsAuthenticated = this.authService.getIsAuth();

          if (this.userIsAuthenticated) {
            this.getProfile();
          }

          this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this5.userIsAuthenticated = isAuthenticated;

            if (_this5.userIsAuthenticated) {
              _this5.getProfile();
            }
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this6 = this;

          this.profileService.getProfileByCreatorId().subscribe(function (prof) {
            _this6.profileisSet = true;
            _this6.username = prof.profile.username;
            _this6.profile = {
              id: prof.profile._id,
              username: prof.profile.username,
              bio: prof.profile.bio,
              imagePath: prof.profile.imagePath,
              creator: prof.profile.creator
            };
          }, function (err) {
            _this6.profileisSet = false;
            _this6.username = null;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authListenerSubs.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 43,
      vars: 8,
      consts: [[1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "py-4"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo02", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/", 1, "nav-link"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], [1, "nav", "mymenu", "mt-5"], [1, "nav-item"], ["href", "https://github.com/japangor", "aria-label", "Github", 1, "nav-link", "text-github"], [1, "fa", "fa-github", 2, "font-size", "28px", "color", "black"], ["href", "https://medium.com/@japangor", "aria-label", "Github", 1, "nav-link", "text-github"], [1, "fa", "fa-medium", 2, "font-size", "28px", "color", "black"], ["href", "https://www.instagram.com/japangor/", "aria-label", "Instagram", 1, "nav-link"], [1, "fa", "fa-instagram", 2, "font-size", "28px", "color", "black"], ["href", "https://www.linkedin.com/in/japangor/", "aria-label", "LinkedIn", 1, "nav-link"], [1, "fa", "fa-linkedin", 2, "font-size", "28px", "color", "black"], [1, "social"], ["href", "https://github.com/japank05"], [1, "fa", "fa-github"], ["href", "https://medium.com/@japangor05"], [1, "fa", "fa-medium"], ["href", "https://www.instagram.com/japan_gor05/"], [1, "fa", "fa-instagram"], ["href", "https://www.linkedin.com/in/japan-gor-765868126/"], [1, "fa", "fa-linkedin"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/create", 1, "nav-link"], [1, "nav-link", 3, "routerLink"], ["routerLink", "/myposts", 1, "nav-link"], ["routerLink", "/login", 1, "nav-link"], [1, "nav-link", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Abhivaadan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 3, 0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_li_12_Template, 3, 3, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_li_13_Template, 3, 2, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 3, 0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 3, 0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 3, 0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated && ctx.profileisSet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated && !ctx.profileisSet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".bg-light[_ngcontent-%COMP%]{\r\n    background-color: #fff !important;\r\n}\r\n.navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]{\r\n    margin-right: 50px !important;\r\n    margin-left: auto;\r\n\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n    font-weight:500;\r\n}\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{\r\n    padding: 10px 5px;\r\n}\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    color: #007bff\r\n}\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding: 10px 10px;\r\n    color: #000;\r\n    font-size: 16px;\r\n}\r\nul.social[_ngcontent-%COMP%] {\r\n    padding:0;\r\n    display: block;\r\n    position: relative;\r\n}\r\nul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display:inline-block\r\n}\r\nul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding:0 15px\r\n}\r\nul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:black;\r\n    \r\n}\r\n@media (max-width: 551px) {\r\n    .sideicon[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    ul.social[_ngcontent-%COMP%]{\r\n        display: block\r\n    }\r\n    nav.navbar.navbar-expand-lg.navbar-light.bg-light.py-4[_ngcontent-%COMP%]{\r\n        padding-bottom: 10px !important;\r\n        padding-top: 10px !important;\r\n    }\r\n    .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{\r\n        padding: 0;\r\n        border-bottom: 1px solid #afa6a6;\r\n    }\r\n    .navbar-collapse.collapse.show[_ngcontent-%COMP%]{\r\n        height: 100vh;\r\n    }\r\n    .collapse.navbar-collapse.sticky[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        top: 0;\r\n        z-index: 99999;\r\n        width: 100%;\r\n        display: block;\r\n        background: #f8f8f8;\r\n        box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);\r\n    }\r\n\r\n    .header-main[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        text-align: right;\r\n    }\r\n    .header-main[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        float: right;\r\n        margin-top: 15px;\r\n    }\r\n    .header-main[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        padding: 10px;\r\n    }\r\n    .header-main[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n        font-size: 21px !important;\r\n    }\r\n    .header-main[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 20px;\r\n        margin-top: -2px;\r\n    }\r\n    .sticky-header[_ngcontent-%COMP%] {\r\n        top: 0;\r\n    }\r\n}\r\n@media screen and (min-width:992px) {\r\n    ul.social[_ngcontent-%COMP%]{\r\n        display: none\r\n    }\r\n    .footer-icons.hidden-xs.hidden-sm[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        left: 0;\r\n        background: #fff;\r\n        z-index: 55;\r\n        border-radius: 4px;\r\n        box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);\r\n        \r\n        top: 25%;\r\n        width: auto;\r\n        text-align: left;\r\n    }\r\n    .footer-icons.hidden-xs.hidden-sm[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .footer-icons.hidden-xs.hidden-sm[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-bottom: 30px;\r\n    }\r\n   \r\n    .main-header[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        top: 0;\r\n        background-color: #f8f8f8;\r\n        border-color: #e7e7e7;\r\n        width: 100%;\r\n        z-index: 55;\r\n        padding-left: 55px;\r\n        padding-right: 55px;\r\n        box-shadow: 0 0px 0px rgba(0, 0, 0, .28), 0 2px 6px rgba(0, 0, 0, .23);\r\n    }\r\n    .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n        opacity: 0.8;\r\n        transform: translateY(-3px);\r\n        transition: all 0.2s ease-in-out;\r\n    }\r\n}\r\n.middle[_ngcontent-%COMP%] {\r\n    min-height: 450px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQjtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSSxXQUFXOztBQUVmO0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLCtCQUErQjtRQUMvQiw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFVBQVU7UUFDVixnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7UUFDZixNQUFNO1FBQ04sY0FBYztRQUNkLFdBQVc7UUFDWCxjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLHNFQUFzRTtJQUMxRTs7SUFFQTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFNBQVM7UUFDVCxZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLE1BQU07SUFDVjtBQUNKO0FBRUE7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJLGVBQWU7UUFDZixPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsc0VBQXNFO1FBQ3RFLDRCQUE0QjtRQUM1QixRQUFRO1FBQ1IsV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLE1BQU07UUFDTix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixzRUFBc0U7SUFDMUU7SUFDQTtRQUNJLFlBQVk7UUFDWiwyQkFBMkI7UUFDM0IsZ0NBQWdDO0lBQ3BDO0FBQ0o7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmctbGlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXZ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxufVxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG59XHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbXtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0uYWN0aXZlIGF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDA3YmZmXHJcbn1cclxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIGF7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG51bC5zb2NpYWwge1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbnVsLnNvY2lhbCBsaXtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrXHJcbn1cclxuXHJcbnVsLnNvY2lhbCBsaXtcclxuICAgIHBhZGRpbmc6MCAxNXB4XHJcbn1cclxuXHJcbnVsLnNvY2lhbCBsaSBhe1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTUxcHgpIHtcclxuICAgIC5zaWRlaWNvbntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgdWwuc29jaWFse1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICB9XHJcbiAgICBuYXYubmF2YmFyLm5hdmJhci1leHBhbmQtbGcubmF2YmFyLWxpZ2h0LmJnLWxpZ2h0LnB5LTR7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1uYXYgLm5hdi1pdGVte1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZmE2YTY7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlLnNob3d7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuICAgIC5jb2xsYXBzZS5uYXZiYXItY29sbGFwc2Uuc3RpY2t5IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjIzKTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLW1haW4gLmZvb3Rlci1pY29ucyB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLW1haW4gLmZvb3Rlci1pY29ucyB1bCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1tYWluIC5mb290ZXItaWNvbnMgdWwgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLW1haW4gLmZvb3Rlci1pY29ucyB1bCBsaSAuZmEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1tYWluIC5mb290ZXItaWNvbnMgdWwgbGkgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgfVxyXG4gICAgLnN0aWNreS1oZWFkZXIge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gICAgdWwuc29jaWFse1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgIH1cclxuICAgIC5mb290ZXItaWNvbnMuaGlkZGVuLXhzLmhpZGRlbi1zbSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB6LWluZGV4OiA1NTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjIzKTtcclxuICAgICAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xyXG4gICAgICAgIHRvcDogMjUlO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWljb25zLmhpZGRlbi14cy5oaWRkZW4tc20gdWwgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1pY29ucy5oaWRkZW4teHMuaGlkZGVuLXNtIHVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5tYWluLWhlYWRlcj4uY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTdlN2U3O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDU1O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDBweCByZ2JhKDAsIDAsIDAsIC4yOCksIDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIC4yMyk7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWljb25zIHVsIGxpOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWlkZGxlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/create-post/create-post.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/posts/create-post/create-post.component.ts ***!
    \************************************************************/

  /*! exports provided: CreatePostComponent */

  /***/
  function srcAppPostsCreatePostCreatePostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function () {
      return CreatePostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _mime_type_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mime-type.validator */
    "./src/app/posts/create-post/mime-type.validator.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");

    function CreatePostComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreatePostComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a post title.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreatePostComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r16.form.value.title);
      }
    }

    function CreatePostComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Choose a valid image.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreatePostComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a post title.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CreatePostComponent =
    /*#__PURE__*/
    function () {
      function CreatePostComponent(ps, route, profileService, router) {
        _classCallCheck(this, CreatePostComponent);

        this.ps = ps;
        this.route = route;
        this.profileService = profileService;
        this.router = router;
        this.isLoading = false;
        this.mode = "create";
      }

      _createClass(CreatePostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.checkProfileCreated();
          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("postId")) {
              _this7.mode = "edit";
              _this7.postId = paramMap.get("postId");

              _this7.getPostById(_this7.postId);
            } else {
              _this7.mode = "create";
              _this7.postId = null;
            }
          });
          this.createForm();
        }
      }, {
        key: "getPostById",
        value: function getPostById(id) {
          var _this8 = this;

          this.isLoading = true;
          this.ps.getPost(id).subscribe(function (postData) {
            _this8.post = {
              id: postData._id,
              title: postData.title,
              content: postData.content,
              imagePath: postData.imagePath,
              creator: postData.creator
            };
            _this8.imagePreview = postData.imagePath;

            _this8.form.setValue({
              title: _this8.post.title,
              content: _this8.post.content,
              image: _this8.post.imagePath
            });

            _this8.isLoading = false;
          });
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_2__["mimeType"]]
            })
          });
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this9 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.form.get("image").updateValueAndValidity();
          var reader = new FileReader();

          reader.onload = function () {
            _this9.imagePreview = reader.result;
          };

          reader.readAsDataURL(file);
        }
      }, {
        key: "onSavePost",
        value: function onSavePost() {
          this.postdate = new Date();

          if (this.form.invalid) {
            return;
          }

          this.isLoading = true;

          if (this.mode === "create") {
            this.ps.addPost(this.form.value.title, this.form.value.content, this.form.value.image, this.postdate);
          } else {
            this.ps.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
          }

          this.form.reset();
        }
      }, {
        key: "checkProfileCreated",
        value: function checkProfileCreated() {
          var _this10 = this;

          this.profileService.getProfileByCreatorId().subscribe(function (profile) {
            if (!profile) {
              _this10.router.navigate(["/profile"]);
            }
          }, function (e) {
            _this10.router.navigate(["/profile"]);
          });
        }
      }]);

      return CreatePostComponent;
    }();

    CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) {
      return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    CreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreatePostComponent,
      selectors: [["app-create-post"]],
      decls: 19,
      vars: 7,
      consts: [[1, "container"], ["style", "text-align: center;", "class", "loading-text", 4, "ngIf"], [3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "formControlName", "title", "placeholder", "Post Title", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], ["type", "file", 1, "form-control", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["rows", "4", "formControlName", "content", "placeholder", "Post Content", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "loading-text", 2, "text-align", "center"], [1, "text-danger"], [1, "image-preview"], [3, "src", "alt"]],
      template: function CreatePostComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreatePostComponent_div_2_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreatePostComponent_Template_form_submit_3_listener() {
            return ctx.onSavePost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreatePostComponent_span_6_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePostComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            return _r15.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Pick Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatePostComponent_Template_input_change_10_listener($event) {
            return ctx.onImagePicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreatePostComponent_div_12_Template, 2, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreatePostComponent_span_13_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreatePostComponent_span_16_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Save Post ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("title").invalid && ctx.form.get("title").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagePreview !== "" && ctx.imagePreview && ctx.form.get("image").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("image").invalid && ctx.form.dirty && ctx.form.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("content").invalid && ctx.form.get("content").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"]],
      styles: ["textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%] {\r\n    height: 8rem;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    margin: 3rem auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvY3JlYXRlLXBvc3QvY3JlYXRlLXBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsT0FBTztBQUNYOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2NyZWF0ZS1wb3N0L2NyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLmltYWdlLXByZXZpZXcge1xyXG4gICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-post',
          templateUrl: './create-post.component.html',
          styleUrls: ['./create-post.component.css']
        }]
      }], function () {
        return [{
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/create-post/mime-type.validator.ts":
  /*!**********************************************************!*\
    !*** ./src/app/posts/create-post/mime-type.validator.ts ***!
    \**********************************************************/

  /*! exports provided: mimeType */

  /***/
  function srcAppPostsCreatePostMimeTypeValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mimeType", function () {
      return mimeType;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var mimeType = function mimeType(control) {
      if (typeof control.value === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
      }

      var file = control.value;
      var fileReader = new FileReader();
      var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
          var arr = new Uint8Array(fileReader.result).subarray(0, 4);
          var header = "";
          var isValid = false;

          for (var i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }

          switch (header) {
            case "89504e47":
              isValid = true;
              break;

            case "ffd8ffe0":
            case "ffd8ffe1":
            case "ffd8ffe2":
            case "ffd8ffe3":
            case "ffd8ffe8":
              isValid = true;
              break;

            default:
              isValid = false; // Or you can use the blob.type as fallback

              break;
          }

          if (isValid) {
            observer.next(null);
          } else {
            observer.next({
              invalidMimeType: true
            });
          }

          observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
      });
      return frObs;
    };
    /***/

  },

  /***/
  "./src/app/posts/myposts/myposts.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/posts/myposts/myposts.component.ts ***!
    \****************************************************/

  /*! exports provided: MypostsComponent */

  /***/
  function srcAppPostsMypostsMypostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MypostsComponent", function () {
      return MypostsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function MypostsComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r34.error.status, " - ", ctx_r34.error.error.message, "");
      }
    }

    function MypostsComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r35.error.status, " - ", ctx_r35.error.statusText, "");
      }
    }

    function MypostsComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["../public", a1];
    };

    function MypostsComponent_ng_container_10_div_1_span_8_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " / ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var post_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, user_r42.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("by ", user_r42.username, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, post_r40.postDate, "short"));
      }
    }

    function MypostsComponent_ng_container_10_div_1_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MypostsComponent_ng_container_10_div_1_span_8_small_1_Template, 7, 8, "small", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r42 = ctx.$implicit;

        var post_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r42.creator === post_r40.creator);
      }
    }

    var _c1 = function _c1(a0) {
      return [a0];
    };

    function MypostsComponent_ng_container_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MypostsComponent_ng_container_10_div_1_span_8_Template, 2, 1, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r40 = ctx.$implicit;

        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + post_r40.imagePath + ") ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, post_r40.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r40.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.postbyUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", post_r40.content, " ");
      }
    }

    function MypostsComponent_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MypostsComponent_ng_container_10_div_1_Template, 11, 8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.posts);
      }
    }

    function MypostsComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Posts Found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MypostsComponent =
    /*#__PURE__*/
    function () {
      function MypostsComponent(ps, authService, profileService) {
        _classCallCheck(this, MypostsComponent);

        this.ps = ps;
        this.authService = authService;
        this.profileService = profileService;
        this.posts = [];
        this.postbyUser = [];
        this.isloading = false;
      }

      _createClass(MypostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.getErrors();
          this.isloading = true;
          this.getMyPost();
          this.postsSub = this.ps.getPostUpdateListener().subscribe(function (posts) {
            _this11.getPostUserbyCreatorId(posts);

            _this11.isloading = false;
            _this11.posts = posts;
          }, function (e) {
            _this11.isloading = false;
            _this11.error = e;
          });
        }
      }, {
        key: "getPostUserbyCreatorId",
        value: function getPostUserbyCreatorId(post) {
          var _this12 = this;

          var creatorId = [];

          for (var i in post) {
            creatorId.push(post[i].creator);
          }

          var unique = _toConsumableArray(new Set(creatorId));

          for (var _i in unique) {
            this.profileService.getPostUserByCreatorId(unique[_i]).subscribe(function (user) {
              _this12.postbyUser.push(user.profile);
            });
          }
        }
      }, {
        key: "getErrors",
        value: function getErrors() {
          var _this13 = this;

          this.error = null;
          this.ps.err.subscribe(function (err) {
            _this13.error = err;
            _this13.isloading = false;
          });
        }
      }, {
        key: "getMyPost",
        value: function getMyPost() {
          this.ps.getMyPost(this.userId);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.postsSub.unsubscribe();
        }
      }]);

      return MypostsComponent;
    }();

    MypostsComponent.ɵfac = function MypostsComponent_Factory(t) {
      return new (t || MypostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]));
    };

    MypostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MypostsComponent,
      selectors: [["app-myposts"]],
      decls: 12,
      vars: 5,
      consts: [[1, "site-section", "bg-light"], [1, "container"], [1, "row", "mb-5"], [1, "col-md-12", "text-center"], [1, "font-weight-bold", "text-black"], [1, "row"], ["class", "alert alert-danger", 4, "ngIf"], ["style", "text-align: center;", "class", "loading-text", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-danger"], [1, "loading-text", 2, "text-align", "center"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["data-aos", "fade-up", 1, "d-block", "podcast-entry", "bg-white", "mb-5", "aos-init", "aos-animate"], [1, "image", "w-100"], [1, "text", "w-100"], [1, ""], [3, "routerLink"], [1, "text-white", "mb-3"], ["class", "text-black-opacity-05", 4, "ngFor", "ngForOf"], [1, "mb-4"], [1, "text-black-opacity-05"], [1, "sep"]],
      template: function MypostsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MypostsComponent_div_7_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MypostsComponent_div_8_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MypostsComponent_div_9_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MypostsComponent_ng_container_10_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MypostsComponent_div_11_Template, 3, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error && ctx.error.error.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error && !ctx.error.error.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isloading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts.length == 0 && !ctx.isloading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".bg-light[_ngcontent-%COMP%] {\r\n  background: #ccc;\r\n}\r\n\r\n.site-section[_ngcontent-%COMP%] {\r\n  padding: 2.5em 0;\r\n}\r\n\r\n.podcast-entry[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{\r\n  height: 300px;\r\n  background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.podcast-entry[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 40px;\r\n  height: 250px;\r\n  padding: 40px 40px 20px;\r\n     \r\n}\r\n\r\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n   text-overflow: ellipsis;\r\n   display: -webkit-box;\r\n   -webkit-line-clamp: 3; \r\n   -webkit-box-orient: vertical;\r\n}\r\n\r\n@media (min-width: 768px)\r\n{\r\n  .site-section[_ngcontent-%COMP%] {\r\n    padding: 5em 0;\r\n}\r\n}\r\n\r\n@media screen and (max-width:551px){\r\n\r\n    .podcast-entry[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n      height: 225px;\r\n      padding: 25px;\r\n    }\r\n    .body-text[_ngcontent-%COMP%]{\r\n        flex: 2;\r\n      }\r\n  }\r\n\r\n.alert-danger[_ngcontent-%COMP%]{\r\n    margin: 3rem auto;\r\n    width: 50%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvbXlwb3N0cy9teXBvc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtJQUNwQixrQ0FBa0M7SUFDbEMsNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCOztBQUV6Qjs7QUFDQTtFQUNFLGdCQUFnQjtHQUNmLHVCQUF1QjtHQUN2QixvQkFBb0I7R0FDcEIscUJBQXFCLEVBQUUsNEJBQTRCO0dBQ25ELDRCQUE0QjtBQUMvQjs7QUFDQTs7RUFFRTtJQUNFLGNBQWM7QUFDbEI7QUFDQTs7QUFJRTs7SUFFRTtNQUNFLGFBQWE7TUFDYixhQUFhO0lBQ2Y7SUFDQTtRQUNJLE9BQU87TUFDVDtFQUNKOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL215cG9zdHMvbXlwb3N0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLnNpdGUtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMi41ZW0gMDtcclxufVxyXG5cclxuLnBvZGNhc3QtZW50cnkgLmltYWdle1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ucG9kY2FzdC1lbnRyeSAudGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggNDBweCAyMHB4O1xyXG4gICAgIFxyXG59XHJcbi50ZXh0IHB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXHJcbiAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KVxyXG57XHJcbiAgLnNpdGUtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA1ZW0gMDtcclxufVxyXG59XHJcblxyXG5cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NTFweCl7XHJcblxyXG4gICAgLnBvZGNhc3QtZW50cnkgLnRleHQge1xyXG4gICAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmJvZHktdGV4dHtcclxuICAgICAgICBmbGV4OiAyO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAuYWxlcnQtZGFuZ2Vye1xyXG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MypostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-myposts',
          templateUrl: './myposts.component.html',
          styleUrls: ['./myposts.component.css']
        }]
      }], function () {
        return [{
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/post-detail/post-detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/posts/post-detail/post-detail.component.ts ***!
    \************************************************************/

  /*! exports provided: PostDetailComponent */

  /***/
  function srcAppPostsPostDetailPostDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function () {
      return PostDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");

    function PostDetailComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r20.error.status, " - ", ctx_r20.error.error.message, "");
      }
    }

    function PostDetailComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["../edit", a1];
    };

    function PostDetailComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit Post ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete Confirmation Box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Please click on Ok button to Delete the post permanently ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailComponent_div_4_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.OnDelete(ctx_r24.postId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r22.postId));
      }
    }

    var _c1 = function _c1(a1) {
      return ["../public", a1];
    };

    function PostDetailComponent_div_5_small_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " / ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r26.profile.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("by ", ctx_r26.profile.username, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, ctx_r26.post.postDate, "short"));
      }
    }

    function PostDetailComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostDetailComponent_div_5_small_6_Template, 7, 8, "small", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.post.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.profile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r23.post.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.post.content);
      }
    }

    var PostDetailComponent =
    /*#__PURE__*/
    function () {
      function PostDetailComponent(postsService, route, router, authService, profileService) {
        _classCallCheck(this, PostDetailComponent);

        this.postsService = postsService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.profileService = profileService;
        this.isloading = false;
      }

      _createClass(PostDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.url = this.router.url.split("/")[1];
          this.authData();
          this.getErrors();
          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("postId")) {
              _this14.postId = paramMap.get("postId");

              _this14.getPostById(_this14.postId);
            }
          });
        }
      }, {
        key: "authData",
        value: function authData() {
          var _this15 = this;

          this.isAuth = this.authService.getIsAuth();
          this.userId = this.authService.getUserId();
          this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this15.userIsAuthenticated = isAuthenticated;
            _this15.userId = _this15.authService.getUserId();
          });
        }
      }, {
        key: "getErrors",
        value: function getErrors() {
          var _this16 = this;

          this.error = null;
          this.postsService.err.subscribe(function (err) {
            _this16.error = err;
            _this16.isloading = false;
          });
        }
      }, {
        key: "getPostById",
        value: function getPostById(id) {
          var _this17 = this;

          this.isloading = true;
          this.postsService.getPost(this.postId).subscribe(function (postData) {
            console.log(postData);
            _this17.post = {
              id: postData._id,
              title: postData.title,
              content: postData.content,
              imagePath: postData.imagePath,
              creator: postData.creator,
              postDate: postData.postDate
            };

            _this17.getPostUserByCreatorId(postData.creator); // this.compareIds(this.userId,this.post.creator)


            _this17.isloading = false;
          });

          (function (e) {
            _this17.isloading = false;
            _this17.error = e;
          });
        }
      }, {
        key: "OnDelete",
        value: function OnDelete(postId) {
          this.postsService.deletePost(postId);
        }
      }, {
        key: "getPostUserByCreatorId",
        value: function getPostUserByCreatorId(id) {
          var _this18 = this;

          this.profileService.getPostUserByCreatorId(id).subscribe(function (profile) {
            if (profile.profile) {
              _this18.profile = profile.profile;
            } else {}
          }, function (e) {
            _this18.isloading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusSub.unsubscribe();
        }
      }]);

      return PostDetailComponent;
    }();

    PostDetailComponent.ɵfac = function PostDetailComponent_Factory(t) {
      return new (t || PostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]));
    };

    PostDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostDetailComponent,
      selectors: [["app-post-detail"]],
      decls: 6,
      vars: 4,
      consts: [[1, "container"], ["class", "alert alert-danger", 4, "ngIf"], ["style", "text-align: center;", "class", "loading-text", 4, "ngIf"], [1, "row"], ["class", "col-md-3 col-xs-12", 4, "ngIf"], ["class", "col-md-9 main", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "loading-text", 2, "text-align", "center"], [1, "col-md-3", "col-xs-12"], [1, "list-group"], [1, "list-group-item", "list-group-item-action", 3, "routerLink"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "list-group-item", "list-group-item-action"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "col-md-9", "main"], [1, "card-body"], [1, "text-white", "mb-3"], [1, "text-black-opacity-05"], [4, "ngIf"], [1, "img"], ["alt", "", 1, "img-responsive", "center", 3, "src"], [3, "routerLink"], [1, "sep"]],
      template: function PostDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailComponent_div_1_Template, 3, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostDetailComponent_div_2_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostDetailComponent_div_4_Template, 22, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostDetailComponent_div_5_Template, 12, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isloading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuth && ctx.url == "myposts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".img[_ngcontent-%COMP%]{\r\n    margin-top: 5rem;\r\n    text-align: center;\r\n    margin: 3rem auto;\r\n}\r\n\r\n.img-responsive[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3QtZGV0YWlsL3Bvc3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG59XHJcblxyXG4uaW1nLXJlc3BvbnNpdmV7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi5tYWlue1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-detail',
          templateUrl: './post-detail.component.html',
          styleUrls: ['./post-detail.component.css']
        }]
      }], function () {
        return [{
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/post-list/post-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/posts/post-list/post-list.component.ts ***!
    \********************************************************/

  /*! exports provided: PostListComponent */

  /***/
  function srcAppPostsPostListPostListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostListComponent", function () {
      return PostListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function PostListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tell Your Story to the World");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Join with us! Login or Register. Write your story and share !!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PostListComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["public", a1];
    };

    function PostListComponent_div_7_span_7_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " / ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var post_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, user_r7.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("by ", user_r7.username, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, post_r4.postDate, "short"));
      }
    }

    function PostListComponent_div_7_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostListComponent_div_7_span_7_small_1_Template, 7, 8, "small", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r7 = ctx.$implicit;

        var post_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r7.creator === post_r4.creator);
      }
    }

    var _c1 = function _c1(a0) {
      return [a0];
    };

    function PostListComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostListComponent_div_7_span_7_Template, 2, 1, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r4 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + post_r4.imagePath + ") ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, post_r4.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r4.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.postbyUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 8, post_r4.content, 0, 170), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, post_r4.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r4.content.length > 170 ? "...Read More" : "");
      }
    }

    function PostListComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var usr_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, usr_r12.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", usr_r12.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usr_r12.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 4, usr_r12.bio, 0, 70));
      }
    }

    var PostListComponent =
    /*#__PURE__*/
    function () {
      function PostListComponent(ps, authService, profileService) {
        _classCallCheck(this, PostListComponent);

        this.ps = ps;
        this.authService = authService;
        this.profileService = profileService;
        this.userIsAuthenticated = false;
        this.posts = [];
        this.user = [];
        this.postbyUser = [];
        this.isloading = false;
      }

      _createClass(PostListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.checkAuth();
          this.getErrors();
          this.getUsers();
          this.isloading = true;
          this.userId = this.authService.getUserId();
          this.ps.getPosts();
          this.postsSub = this.ps.getPostUpdateListener().subscribe(function (posts) {
            _this19.isloading = false;
            _this19.posts = posts;

            _this19.sortPostByDate(posts);

            _this19.getPostUserbyCreatorId(_this19.posts);

            console.log("posts is", _this19.posts);
          }, function (e) {
            _this19.isloading = false;
            _this19.error = e;
          });
        }
      }, {
        key: "sortPostByDate",
        value: function sortPostByDate(post) {
          post.sort(function (a, b) {
            return new Date(b.postDate).getTime() - new Date(a.postDate).getTime();
          });
        }
      }, {
        key: "getErrors",
        value: function getErrors() {
          var _this20 = this;

          this.error = null;
          this.ps.err.subscribe(function (err) {
            _this20.error = err;
            _this20.isloading = false;
          });
        }
      }, {
        key: "checkAuth",
        value: function checkAuth() {
          var _this21 = this;

          this.userIsAuthenticated = this.authService.getIsAuth();
          this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this21.userIsAuthenticated = isAuthenticated;

            _this21.getUserProfile();
          });
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {}
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this22 = this;

          this.profileService.getAllUsers().subscribe(function (user) {
            _this22.user = user.profile;
          });
        }
      }, {
        key: "getPostUserbyCreatorId",
        value: function getPostUserbyCreatorId(post) {
          var _this23 = this;

          var creatorId = [];

          for (var i in post) {
            creatorId.push(post[i].creator);
          }

          var unique = _toConsumableArray(new Set(creatorId));

          for (var _i2 in unique) {
            this.profileService.getPostUserByCreatorId(unique[_i2]).subscribe(function (user) {
              _this23.postbyUser.push(user.profile);
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.postsSub.unsubscribe();
          this.authListenerSubs.unsubscribe();
        }
      }]);

      return PostListComponent;
    }();

    PostListComponent.ɵfac = function PostListComponent_Factory(t) {
      return new (t || PostListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]));
    };

    PostListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostListComponent,
      selectors: [["app-post-list"]],
      decls: 14,
      vars: 4,
      consts: [["class", "container hero", 4, "ngIf"], [1, "site-section"], [1, "container"], [1, "row"], ["style", "text-align: center;", "class", "loading-text", 4, "ngIf"], [1, "col-lg-8"], ["class", "d-block d-md-flex podcast-entry bg-white mb-5 aos-init aos-animate", "data-aos", "fade-up", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "featured-user", "mb-5", "mb-lg-0"], [1, "mb-4"], [1, "list-unstyled"], [4, "ngFor", "ngForOf"], [1, "container", "hero"], [1, "row", "align-items-center", "text-center", "text-md-left"], [1, "mb-3", "display-3"], ["src", "assets/asset-1.png", "alt", "Image", 1, "img-fluid"], [1, "loading-text", 2, "text-align", "center"], ["data-aos", "fade-up", 1, "d-block", "d-md-flex", "podcast-entry", "bg-white", "mb-5", "aos-init", "aos-animate"], [1, "image"], [1, "text"], [1, "font-weight-dark"], [3, "routerLink"], [1, "text-white", "mb-3"], ["class", "text-black-opacity-05", 4, "ngFor", "ngForOf"], [1, "desc"], [1, "text-black-opacity-05"], [4, "ngIf"], [1, "sep"], [1, "d-flex", "align-items-center", 3, "routerLink"], [1, "img-fluid", "mr-2", 3, "src"], [1, "podcaster"], [1, "d-block"], [1, "small"]],
      template: function PostListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostListComponent_div_0_Template, 9, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostListComponent_div_5_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostListComponent_div_7_Template, 14, 16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Popular Authors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostListComponent_li_13_Template, 9, 10, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isloading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".card[_ngcontent-%COMP%]{\r\n    min-height: 150px;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    min-height: 150px;\r\n  }\r\n.card-body[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n  }\r\n.body-text[_ngcontent-%COMP%]{\r\n    flex: 3;\r\n  }\r\n.bg-image[_ngcontent-%COMP%]{\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n\r\n      background-size: 100% 100%;\r\n      background-repeat: no-repeat;\r\n      background-position: left top;\r\n  }\r\n@media screen and (max-width:551px){\r\n    .body-text[_ngcontent-%COMP%]{\r\n        flex: 2;\r\n      }\r\n  }\r\n.alert-danger[_ngcontent-%COMP%]{\r\n    margin: 3rem auto;\r\n    width: 50%;\r\n  }\r\n.podcast-entry[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n  height: auto;\r\n}\r\n.podcast-entry[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  \r\n}\r\n.podcast-entry[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 20px;\r\n  padding-left: 40px;\r\n}\r\n.featured-user[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  text-transform: uppercase;\r\n}\r\n.featured-user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  box-shadow: 0 5px 40px -10px rgba(0, 0, 0, 0.1);\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n    padding: 25px 15px;\r\n}\r\n.featured-user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  text-decoration: none;\r\n}\r\n.featured-user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 65px;\r\n  float: left;\r\n  height: 65px;\r\n  border-radius: 50%;\r\n}\r\n@media (min-width: 768px){\r\n  .site-section[_ngcontent-%COMP%] {\r\n    padding: 5em 0;\r\n}\r\n\r\n  .podcast-entry[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: calc(100% - 100px);\r\n}\r\n}\r\n@media screen and (max-width:551px){\r\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin-top:25px;\r\n    font-size: 40px !important;\r\n}\r\n\r\n.podcast-entry[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  width: auto;\r\n}\r\n\r\n.podcast-entry[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n  padding: 25px;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSxPQUFPO0VBQ1Q7QUFFQTtJQUNFLE9BQU87SUFDUCxhQUFhO0lBQ2IseUJBQXlCOztNQUV2QiwwQkFBMEI7TUFDMUIsNEJBQTRCO01BQzVCLDZCQUE2QjtFQUNqQztBQUtBO0lBQ0U7UUFDSSxPQUFPO01BQ1Q7RUFDSjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjtBQVNGO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLCtDQUErQztJQUM3QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0FBQ2xCOztFQUVFO0lBQ0UseUJBQXlCO0FBQzdCO0FBQ0E7QUFHQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbn1cclxuLmNhcmQtYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYm9keT5kaXYge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJvZHktdGV4dHtcclxuICAgIGZsZXg6IDM7XHJcbiAgfVxyXG5cclxuICAuYmctaW1hZ2V7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MXB4KXtcclxuICAgIC5ib2R5LXRleHR7XHJcbiAgICAgICAgZmxleDogMjtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLmFsZXJ0LWRhbmdlcntcclxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLnBvZGNhc3QtZW50cnkgLmltYWdlIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucG9kY2FzdC1lbnRyeSAuaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC8qIGhlaWdodDogMzAwcHg7ICovXHJcbn1cclxuXHJcbi5wb2RjYXN0LWVudHJ5IC50ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuLmZlYXR1cmVkLXVzZXIgaDMge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5mZWF0dXJlZC11c2VyIHVsIGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDQwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxufVxyXG4uZmVhdHVyZWQtdXNlciB1bCBsaSBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC11c2VyIHVsIGxpIGEgaW1nIHtcclxuICB3aWR0aDogNjVweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgLnNpdGUtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA1ZW0gMDtcclxufVxyXG5cclxuICAucG9kY2FzdC1lbnRyeSAudGV4dCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG59XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MXB4KXtcclxuICAuaGVybyBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvZGNhc3QtZW50cnkgLmltYWdle1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5wb2RjYXN0LWVudHJ5IC50ZXh0e1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-list',
          templateUrl: './post-list.component.html',
          styleUrls: ['./post-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/create-profile/create-profile.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/profile/create-profile/create-profile.component.ts ***!
    \********************************************************************/

  /*! exports provided: CreateProfileComponent */

  /***/
  function srcAppProfileCreateProfileCreateProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateProfileComponent", function () {
      return CreateProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _posts_create_post_mime_type_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../posts/create-post/mime-type.validator */
    "./src/app/posts/create-post/mime-type.validator.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");

    function CreateProfileComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateProfileComponent_ng_container_5_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r54.error, "");
      }
    }

    function CreateProfileComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateProfileComponent_ng_container_5_span_1_Template, 2, 1, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.form.get("username") && (ctx_r48.form.get("username").dirty || ctx_r48.form.get("username").touched));
      }
    }

    function CreateProfileComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a post title.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateProfileComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r51.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r51.form.value.title);
      }
    }

    function CreateProfileComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Choose a valid image.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateProfileComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a Bio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CreateProfileComponent =
    /*#__PURE__*/
    function () {
      function CreateProfileComponent(profileService, router, route) {
        _classCallCheck(this, CreateProfileComponent);

        this.profileService = profileService;
        this.router = router;
        this.route = route;
        this.isLoading = true;
        this.mode = "create";
      }

      _createClass(CreateProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("profileId")) {
              _this24.mode = "edit";
              _this24.uname = paramMap.get("profileId");

              _this24.getProfileById(_this24.uname);
            } else {
              _this24.mode = "create";
              _this24.uname = null;
            }
          });
          this.createForm();
          this.checkProfileExist();
        }
      }, {
        key: "getProfileById",
        value: function getProfileById(id) {
          var _this25 = this;

          this.isLoading = true;
          this.profileService.getProfileByUsername(id).subscribe(function (profile) {
            _this25.isLoading = false;
            _this25.post = {
              id: profile.profile._id,
              username: profile.profile.username,
              bio: profile.profile.bio,
              imagePath: profile.profile.imagePath,
              creator: profile.profile.creator
            };
            _this25.profileId = profile.profile._id;
            _this25.imagePreview = profile.profile.imagePath;

            _this25.form.setValue({
              username: _this25.post.username,
              bio: _this25.post.bio,
              image: _this25.post.imagePath
            });
          });
        }
      }, {
        key: "checkProfileExist",
        value: function checkProfileExist() {
          var _this26 = this;

          this.isLoading = true;
          this.profileService.getProfileByCreatorId().subscribe(function (profile) {
            console.log(profile);

            if (profile) {
              var uname = profile.profile.username;
              if (_this26.mode == "create") _this26.router.navigate(['/profile', uname]);
            } else {
              _this26.isLoading = false;
            }
          }, function (e) {
            _this26.isLoading = false;
          });
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              asyncValidators: [_posts_create_post_mime_type_validator__WEBPACK_IMPORTED_MODULE_2__["mimeType"]]
            })
          });
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this27 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.form.get("image").updateValueAndValidity();
          var reader = new FileReader();

          reader.onload = function () {
            _this27.imagePreview = reader.result;
          };

          reader.readAsDataURL(file);
        }
      }, {
        key: "onSavePost",
        value: function onSavePost() {
          if (this.form.invalid) {
            return;
          }

          this.isLoading = true;

          if (this.mode === "create") {
            this.profileService.addProfile(this.form.value.username, this.form.value.bio, this.form.value.image);
          } else {
            this.profileService.updateProfile(this.profileId, this.form.value.username, this.form.value.bio, this.form.value.image);
          }

          this.form.reset();
        }
      }, {
        key: "clearError",
        value: function clearError() {
          this.error = '';
        }
      }, {
        key: "checkUsername",
        value: function checkUsername(uname) {
          var _this28 = this;

          this.profileService.getProfileByUsername(uname).subscribe(function (profile) {
            if (profile && uname !== _this28.uname) {
              _this28.error = "Username is already taken!";
            }
          });
        }
      }]);

      return CreateProfileComponent;
    }();

    CreateProfileComponent.ɵfac = function CreateProfileComponent_Factory(t) {
      return new (t || CreateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    CreateProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateProfileComponent,
      selectors: [["app-create-profile"]],
      decls: 19,
      vars: 8,
      consts: [[1, "container"], ["style", "text-align: center;", "class", "loading-text", 4, "ngIf"], [3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "formControlName", "username", "placeholder", "Username", 1, "form-control", 3, "focus", "blur"], [4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], ["type", "file", 1, "form-control", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["rows", "4", "formControlName", "bio", "placeholder", "Your short Bio", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "loading-text", 2, "text-align", "center"], [1, "text-danger"], [1, "image-preview"], [3, "src", "alt"]],
      template: function CreateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateProfileComponent_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateProfileComponent_Template_form_submit_2_listener() {
            return ctx.onSavePost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function CreateProfileComponent_Template_input_focus_4_listener() {
            return ctx.clearError();
          })("blur", function CreateProfileComponent_Template_input_blur_4_listener($event) {
            return ctx.checkUsername($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateProfileComponent_ng_container_5_Template, 2, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateProfileComponent_span_6_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateProfileComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            return _r50.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Pick Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateProfileComponent_Template_input_change_10_listener($event) {
            return ctx.onImagePicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateProfileComponent_div_12_Template, 2, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateProfileComponent_span_13_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateProfileComponent_span_16_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Save Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("username").invalid && ctx.form.get("username").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagePreview !== "" && ctx.imagePreview && ctx.form.get("image").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("image").invalid && ctx.form.dirty && ctx.form.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("bio").invalid && ctx.form.get("bio").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.error);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]],
      styles: ["textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%] {\r\n    height: 8rem;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    margin: 3rem auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IHtcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4uaW1hZ2UtcHJldmlldyBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-profile',
          templateUrl: './create-profile.component.html',
          styleUrls: ['./create-profile.component.css']
        }]
      }], function () {
        return [{
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/view-profile/view-profile.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/profile/view-profile/view-profile.component.ts ***!
    \****************************************************************/

  /*! exports provided: ViewProfileComponent */

  /***/
  function srcAppProfileViewProfileViewProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function () {
      return ViewProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");

    function ViewProfileComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["../edit", a1];
    };

    function ViewProfileComponent_div_3_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r62.profileId));
      }
    }

    function ViewProfileComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewProfileComponent_div_3_a_4_Template, 2, 3, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r57.profile.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.userId === ctx_r57.profile.creator && ctx_r57.url == "profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r57.profile.bio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r57.profile.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ViewProfileComponent_h2_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r58.profile.username, "'s Posts");
      }
    }

    function ViewProfileComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a1) {
      return ["../../myposts", a1];
    };

    function ViewProfileComponent_ng_container_10_div_1_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, post_r64.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r64.title, "");
      }
    }

    var _c2 = function _c2(a1) {
      return ["posts", a1];
    };

    function ViewProfileComponent_ng_container_10_div_1_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, post_r64.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r64.title, "");
      }
    }

    function ViewProfileComponent_ng_container_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewProfileComponent_ng_container_10_div_1_a_4_Template, 2, 4, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewProfileComponent_ng_container_10_div_1_a_5_Template, 2, 4, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "By Mike Smith ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r64 = ctx.$implicit;

        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + post_r64.imagePath + ") ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.userId === post_r64.creator);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.userId !== post_r64.creator);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 7, post_r64.postDate, "short"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](17, 10, post_r64.content, 0, 170), "", post_r64.content.length > 170 ? " ...Read More" : "", "");
      }
    }

    function ViewProfileComponent_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewProfileComponent_ng_container_10_div_1_Template, 18, 14, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r60.posts);
      }
    }

    function ViewProfileComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Posts written by this user");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ViewProfileComponent =
    /*#__PURE__*/
    function () {
      function ViewProfileComponent(profileService, authService, route, router) {
        _classCallCheck(this, ViewProfileComponent);

        this.profileService = profileService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.isloading = false;
        this.posts = [];
      }

      _createClass(ViewProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.userId = this.authService.getUserId();
          this.url = this.router.url.split("/")[1];
          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("profileId")) {
              _this29.profileId = paramMap.get("profileId");

              _this29.getProfileByUsername(_this29.profileId);

              _this29.getCurrentUseersPost(_this29.profileId);
            } else {
              _this29.router.navigate["/"];
            }
          });
        }
      }, {
        key: "getProfileByUsername",
        value: function getProfileByUsername(uname) {
          var _this30 = this;

          this.isloading = true;
          this.profileService.getProfileByUsername(uname).subscribe(function (profile) {
            _this30.profile = profile.profile;
            _this30.isloading = false;
          });
        }
      }, {
        key: "getCurrentUseersPost",
        value: function getCurrentUseersPost(uname) {
          var _this31 = this;

          this.isloading = true;
          this.profileService.getMyPost(uname).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (postData) {
            return postData.post.map(function (post) {
              return {
                title: post.title,
                content: post.content,
                id: post._id,
                imagePath: post.imagePath,
                creator: post.creator,
                postDate: post.postDate
              };
            });
          })).subscribe(function (data) {
            _this31.isloading = false;
            _this31.posts = data;
          });
        }
      }]);

      return ViewProfileComponent;
    }();

    ViewProfileComponent.ɵfac = function ViewProfileComponent_Factory(t) {
      return new (t || ViewProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ViewProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewProfileComponent,
      selectors: [["app-view-profile"]],
      decls: 12,
      vars: 6,
      consts: [[1, "container", "py-5"], ["style", "text-align: center;", "class", "loading-text", 4, "ngIf"], ["class", "row profile", 4, "ngIf"], ["class", "font-weight-light text-black", 4, "ngIf"], [1, "row"], [1, "col-lg-12"], [4, "ngIf"], [1, "loading-text", 2, "text-align", "center"], [1, "row", "profile"], [1, "col-md-8", "col-xs-12", "order-2", "order-lg-1"], [1, "text-black", "font-weight-light", "mb-4"], [3, "routerLink", 4, "ngIf"], [1, "col-md-4", "col-xs-12", "order-1", "order-lg-2"], [1, "img-fluid", "w-50", "rounded-circle", "mb-3", 3, "src"], [3, "routerLink"], [1, "font-weight-light", "text-black"], ["class", "d-block d-md-flex podcast-entry bg-white mb-5 aos-init aos-animate", "data-aos", "fade-up", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "d-block", "d-md-flex", "podcast-entry", "bg-white", "mb-5", "aos-init", "aos-animate"], [1, "image"], [1, "text"], [1, "font-weight-light"], [1, "text-white", "mb-3"], [1, "text-black-opacity-05"], [1, "sep"], [1, "desc"], [1, "nopost"]],
      template: function ViewProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewProfileComponent_div_2_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewProfileComponent_div_3_Template, 9, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewProfileComponent_h2_5_Template, 2, 1, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewProfileComponent_div_8_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewProfileComponent_ng_container_10_Template, 2, 1, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewProfileComponent_div_11_Template, 3, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isloading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isloading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts.length == 0 && !ctx.isloading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]],
      styles: [".icon-twitter[_ngcontent-%COMP%]:before {\r\n    content: \"\\f099\";\r\n}\r\n\r\n[class^=\"icon-\"][_ngcontent-%COMP%], [class*=\" icon-\"][_ngcontent-%COMP%] {\r\n    font-family: 'icomoon' !important;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 134px !important;\r\n    height: 135px;\r\n\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding-right: 25px;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding: 0px 8px;\r\n    border :1px solid;\r\n    border-color: rgba(117, 117, 117, 1);\r\n    border-radius: 5px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    max-width: 728px;\r\n}\r\n\r\n.podcast-entry[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    height: auto;\r\n  }\r\n\r\n.podcast-entry[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    \r\n  }\r\n\r\n.podcast-entry[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n  }\r\n\r\n.featured-user[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n.featured-user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n.featured-user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    text-decoration: none;\r\n  }\r\n\r\n.featured-user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 65px;\r\n    float: left;\r\n    height: 65px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n@media (min-width: 768px){\r\n    .site-section[_ngcontent-%COMP%] {\r\n      padding: 5em 0;\r\n  }\r\n  \r\n    .podcast-entry[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n      width: calc(100% - 100px);\r\n  }\r\n  }\r\n\r\n@media screen and (max-width:551px){\r\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n      font-size: 40px !important;\r\n  }\r\n  .col-md-4.col-xs-12.order-1.order-lg-2[_ngcontent-%COMP%]{\r\n    float: none;\r\n    margin: 0 auto;\r\n    text-align: center; \r\n  }\r\n  .podcast-entry[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n    width: auto;\r\n  }\r\n  \r\n  .podcast-entry[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n    padding: 25px;\r\n  }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS92aWV3LXByb2ZpbGUvdmlldy1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFO01BQ0UsY0FBYztFQUNsQjs7SUFFRTtNQUNFLHlCQUF5QjtFQUM3QjtFQUNBOztBQUdBO0lBQ0U7TUFDRSwwQkFBMEI7RUFDOUI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0VBQ0EiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3ZpZXctcHJvZmlsZS92aWV3LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXR3aXR0ZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDk5XCI7XHJcbn1cclxuXHJcbltjbGFzc149XCJpY29uLVwiXSwgW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgICBmb250LWZhbWlseTogJ2ljb21vb24nICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4ucHJvZmlsZSBpbWd7XHJcbiAgICB3aWR0aDogMTM0cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTM1cHg7XHJcblxyXG59XHJcblxyXG4ucHJvZmlsZSBoMntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuLnByb2ZpbGUgYXtcclxuICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgICBib3JkZXIgOjFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMTcsIDExNywgMTE3LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNzI4cHg7XHJcbn1cclxuXHJcbi5wb2RjYXN0LWVudHJ5IC5pbWFnZSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5wb2RjYXN0LWVudHJ5IC5pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xyXG4gIH1cclxuICBcclxuICAucG9kY2FzdC1lbnRyeSAudGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mZWF0dXJlZC11c2VyIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5mZWF0dXJlZC11c2VyIHVsIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5mZWF0dXJlZC11c2VyIHVsIGxpIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZlYXR1cmVkLXVzZXIgdWwgbGkgYSBpbWcge1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5zaXRlLXNlY3Rpb24ge1xyXG4gICAgICBwYWRkaW5nOiA1ZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgICAucG9kY2FzdC1lbnRyeSAudGV4dCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MXB4KXtcclxuICAgIC5oZXJvIGgxIHtcclxuICAgICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb2wtbWQtNC5jb2wteHMtMTIub3JkZXItMS5vcmRlci1sZy0ye1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgfVxyXG4gIC5wb2RjYXN0LWVudHJ5IC5pbWFnZXtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnBvZGNhc3QtZW50cnkgLnRleHR7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gIH1cclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-profile',
          templateUrl: './view-profile.component.html',
          styleUrls: ['./view-profile.component.css']
        }]
      }], function () {
        return [{
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/post.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/post.service.ts ***!
    \******************************************/

  /*! exports provided: PostService */

  /***/
  function srcAppServicesPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/posts";

    var PostService =
    /*#__PURE__*/
    function () {
      function PostService(http, router) {
        _classCallCheck(this, PostService);

        this.http = http;
        this.router = router;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.err = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(PostService, [{
        key: "getPostUpdateListener",
        value: function getPostUpdateListener() {
          return this.postsUpdated.asObservable();
        }
      }, {
        key: "addPost",
        value: function addPost(title, content, imgpath, postDate) {
          var _this32 = this;

          var postData = new FormData();
          postData.append("title", title);
          postData.append("content", content);
          postData.append("image", imgpath, title);
          postData.append("postDate", postDate.toString());
          this.http.post(BACKEND_URL, postData).subscribe(function (responseData) {
            _this32.err.next(null);

            _this32.router.navigate(["/"]);
          }), function (err) {
            _this32.err.next(err);
          };
        }
      }, {
        key: "getPosts",
        value: function getPosts() {
          var _this33 = this;

          this.http.get(BACKEND_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (postData) {
            return postData.posts.map(function (post) {
              return {
                title: post.title,
                content: post.content,
                id: post._id,
                imagePath: post.imagePath,
                creator: post.creator,
                postDate: post.postDate
              };
            });
          })).subscribe(function (transformedPosts) {
            _this33.err.next(null);

            _this33.posts = transformedPosts;

            _this33.postsUpdated.next(_toConsumableArray(_this33.posts));
          }, function (err) {
            _this33.err.next(err);
          });
        }
      }, {
        key: "getPost",
        value: function getPost(id) {
          return this.http.get(BACKEND_URL + "/" + id);
        }
      }, {
        key: "getMyPost",
        value: function getMyPost(id) {
          var _this34 = this;

          this.http.get(BACKEND_URL + "/mypost").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (postData) {
            return postData.posts.map(function (post) {
              return {
                title: post.title,
                content: post.content,
                id: post._id,
                imagePath: post.imagePath,
                creator: post.creator,
                postDate: post.postDate
              };
            });
          })).subscribe(function (transformedPosts) {
            _this34.err.next(null);

            _this34.posts = transformedPosts;

            _this34.postsUpdated.next(_toConsumableArray(_this34.posts));
          }, function (err) {
            _this34.err.next(err);
          });
        }
      }, {
        key: "updatePost",
        value: function updatePost(id, title, content, image) {
          var _this35 = this;

          var postData;

          if (typeof image === "object") {
            postData = new FormData();
            postData.append("id", id);
            postData.append("title", title);
            postData.append("content", content);
            postData.append("image", image, title);
          } else {
            postData = {
              id: id,
              title: title,
              content: content,
              imagePath: image,
              creator: null
            };
          }

          this.http.put(BACKEND_URL + "/" + id, postData).subscribe(function (response) {
            _this35.err.next(null);

            _this35.router.navigate(["/myposts"]);
          }, function (err) {
            _this35.err.next(err);
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(postId) {
          var _this36 = this;

          this.http["delete"](BACKEND_URL + "/" + postId).subscribe(function (data) {
            _this36.err.next(null);

            var updatedPosts = _this36.posts.filter(function (post) {
              return post.id !== postId;
            });

            _this36.posts = updatedPosts;

            _this36.postsUpdated.next(_toConsumableArray(_this36.posts));

            _this36.router.navigate(["/"]);
          }, function (e) {
            _this36.err.next(e);
          });
        }
      }]);

      return PostService;
    }();

    PostService.ɵfac = function PostService_Factory(t) {
      return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PostService,
      factory: PostService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/profile.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/profile.service.ts ***!
    \*********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/profile";

    var ProfileService =
    /*#__PURE__*/
    function () {
      function ProfileService(http, router) {
        _classCallCheck(this, ProfileService);

        this.http = http;
        this.router = router;
        this.isProfileSet = false;
        this.updatedProfile = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.err = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(ProfileService, [{
        key: "getProfileUpdateListener",
        value: function getProfileUpdateListener() {
          return this.updatedProfile.asObservable();
        }
      }, {
        key: "getIsProfile",
        value: function getIsProfile() {
          return this.profile;
        }
      }, {
        key: "getIsProfileSet",
        value: function getIsProfileSet() {
          return this.isProfileSet;
        }
      }, {
        key: "addProfile",
        value: function addProfile(title, content, imgpath) {
          var _this37 = this;

          var postData = new FormData();
          postData.append("username", title);
          postData.append("bio", content);
          postData.append("image", imgpath, title);
          this.http.post(BACKEND_URL + "/create", postData).subscribe(function (responseData) {
            _this37.router.navigate(['/']);

            _this37.err.next(null);
          }, function (err) {
            _this37.err.next(err);
          });
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(id, username, bio, image) {
          var _this38 = this;

          var profileData;

          if (typeof image === "object") {
            profileData = new FormData();
            profileData.append("id", id);
            profileData.append("username", username);
            profileData.append("bio", bio);
            profileData.append("image", image, username);
          } else {
            profileData = {
              id: id,
              username: username,
              bio: bio,
              imagePath: image,
              creator: null
            };
          }

          this.http.put(BACKEND_URL + "/edit/" + id, profileData).subscribe(function (response) {
            _this38.err.next(null);

            _this38.router.navigate(["/profile"]);
          }, function (err) {
            console.log(err);

            _this38.err.next(err);
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this39 = this;

          this.http.get(BACKEND_URL + "/viewprofile").subscribe(function (profile) {
            var prof = profile.profile;
            _this39.profile = prof;
            _this39.isProfileSet = true;

            _this39.updatedProfile.next(profile.profile);

            _this39.saveProfileData(profile.profile);
          }, function (err) {});
        }
      }, {
        key: "getProfileByCreatorId",
        value: function getProfileByCreatorId() {
          return this.http.get(BACKEND_URL + "/viewprofile");
        }
      }, {
        key: "getPostUserByCreatorId",
        value: function getPostUserByCreatorId(creatorId) {
          return this.http.get(BACKEND_URL + "/bycreator/" + creatorId);
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.http.get(BACKEND_URL + "/profiles");
        }
      }, {
        key: "getProfileByUsername",
        value: function getProfileByUsername(uname) {
          return this.http.get(BACKEND_URL + "/" + uname);
        }
      }, {
        key: "getMyPost",
        value: function getMyPost(uname) {
          return this.http.get(BACKEND_URL + "/" + uname + "/mypost");
        }
      }, {
        key: "saveProfileData",
        value: function saveProfileData(profile) {
          localStorage.setItem("profile", profile);
          localStorage.setItem("uname", profile.username);
        }
      }, {
        key: "autogetProfile",
        value: function autogetProfile() {
          var profile = localStorage.getItem("profile");

          if (profile) {
            this.isProfileSet = true;
          }
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/spinner/spinner.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/spinner/spinner.component.ts ***!
    \**********************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SpinnerComponent =
    /*#__PURE__*/
    function () {
      function SpinnerComponent() {
        _classCallCheck(this, SpinnerComponent);
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
      return new (t || SpinnerComponent)();
    };

    SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      decls: 6,
      vars: 0,
      consts: [[1, "text-center", "spinner"], ["role", "status", 1, "spinner-border"], [1, "sr-only"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Please Wait ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".spinner[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n}\r\n\r\nh4[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lcntcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaDR7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-spinner',
          templateUrl: './spinner.component.html',
          styleUrls: ['./spinner.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: "https://abhivaadan.herokuapp.com/api"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\jaygo\Documents\Abhivaadan\FRONTEND\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map