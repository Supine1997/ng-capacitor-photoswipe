(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('photoswipe'), require('photoswipe/dist/photoswipe-ui-default'), require('@capacitor/core'), require('@ionic/angular')) :
    typeof define === 'function' && define.amd ? define('ng-capacitor-photoswipe', ['exports', '@angular/core', 'photoswipe', 'photoswipe/dist/photoswipe-ui-default', '@capacitor/core', '@ionic/angular'], factory) :
    (global = global || self, factory(global['ng-capacitor-photoswipe'] = {}, global.ng.core, global['>=4']['1']['3'], global.PhotoSwipeUI_Default, global['>=2']['4']['2'], global['>=5']['0']['0']));
}(this, (function (exports, core, PhotoSwipe, PhotoSwipeUI_Default, core$1, angular) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var template = "\n<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"pswp__bg\"></div>\n    <div class=\"pswp__scroll-wrap\">\n        <div class=\"pswp__container\">\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n        </div>\n        <div class=\"pswp__ui pswp__ui--hidden\">\n            <div class=\"pswp__top-bar\" style=\"height: auto;padding-top: var(--ion-safe-area-top);\">\n                <div class=\"pswp__counter\" style=\"margin-top: var(--ion-safe-area-top);\"></div>\n                <button class=\"pswp__button pswp__button--close\" title=\"\u5173\u95ED\"></button>\n                <div class=\"pswp__preloader\">\n                    <div class=\"pswp__preloader__icn\">\n                        <div class=\"pswp__preloader__cut\">\n                            <div class=\"pswp__preloader__donut\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n                <div class=\"pswp__share-tooltip\"></div>\n            </div>\n            <button class=\"pswp__button pswp__button--arrow--left\" title=\"\u4E0A\u4E00\u5F20\">\n            </button>\n            <button class=\"pswp__button pswp__button--arrow--right\" title=\"\u4E0B\u4E00\u5F20\">\n            </button>\n            <div class=\"pswp__caption\">\n                <div class=\"pswp__caption__center\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n";

    var NgCapacitorPhotoswipe = /** @class */ (function () {
        function NgCapacitorPhotoswipe() {
            this.viewDomId = '__media-previewer';
            this.viewDom = this.generateViewDom();
        }
        /**
         * 构建Dom
         */
        NgCapacitorPhotoswipe.prototype.generateViewDom = function () {
            var viewDom = document.getElementById(this.viewDomId);
            if (viewDom) {
                return viewDom;
            }
            viewDom = document.createElement('div');
            viewDom.classList.add('copy-unable');
            viewDom.id = this.viewDomId;
            viewDom.innerHTML = template; // 插入dom模板
            document.body.appendChild(viewDom);
            return viewDom;
        };
        /**
         * 构建配置
         * @return 默认配置
         */
        NgCapacitorPhotoswipe.prototype.generateOptions = function () {
            return {
                loop: false,
            };
        };
        /**
         * 从imgElements对象中获取items
         * @param imgElements imgElements
         */
        NgCapacitorPhotoswipe.prototype.getItemsFromElements = function (imgElements) {
            var e_1, _a;
            var items = [];
            try {
                for (var imgElements_1 = __values(imgElements), imgElements_1_1 = imgElements_1.next(); !imgElements_1_1.done; imgElements_1_1 = imgElements_1.next()) {
                    var el = imgElements_1_1.value;
                    items.push({
                        el: el,
                        src: el.src,
                        w: el.naturalWidth,
                        h: el.naturalHeight,
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (imgElements_1_1 && !imgElements_1_1.done && (_a = imgElements_1.return)) _a.call(imgElements_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return items;
        };
        /**
         * 从图片链接开始显示
         * @param defaultIndex 开始image的索引
         * @param urls 图片链接数组
         */
        NgCapacitorPhotoswipe.prototype.start = function (defaultIndex, urls) {
            return __awaiter(this, void 0, void 0, function () {
                var options, gallery;
                return __generator(this, function (_a) {
                    options = this.generateOptions();
                    options.index = defaultIndex; // 默认索引
                    gallery = new PhotoSwipe(this.viewDom.querySelector('.pswp'), PhotoSwipeUI_Default, urls.map(function (url) { return new Object({ src: url, w: 0, h: 0 }); }), options);
                    /* 自动更新图片尺寸 @reference https://github.com/luoyang125024608/vue-photoswipe-mobile/blob/master/src/previewer.vue */
                    gallery.listen('gettingData', function (index, item) {
                        if (!item.w || !item.h) {
                            var img_1 = new Image();
                            img_1.onload = function () {
                                item.w = img_1.width;
                                item.h = img_1.height;
                                gallery.updateSize(true);
                            };
                            img_1.src = item.src;
                        }
                    });
                    return [2 /*return*/, new Promise(function (resolve) {
                            gallery.listen('close', resolve);
                            gallery.init();
                        })];
                });
            });
        };
        /**
         * 从image element对象开始显示
         * @param defaultIndex 开始image的索引
         * @param imgElements 同一组的image element对象数组
         */
        NgCapacitorPhotoswipe.prototype.startWithElements = function (defaultIndex, imgElements) {
            return __awaiter(this, void 0, void 0, function () {
                var items, options, gallery, realViewportWidth, useLargeImages, firstResize, imageSrcWillChange;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getItemsFromElements(imgElements)];
                        case 1:
                            items = _a.sent();
                            options = this.generateOptions();
                            options.index = defaultIndex;
                            options.showHideOpacity = true;
                            options.history = false;
                            options.shareEl = false;
                            options.getThumbBoundsFn = function (i) {
                                var thumbnail = items[i].el;
                                var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                                var rect = thumbnail.getBoundingClientRect();
                                return {
                                    x: rect.left,
                                    y: rect.top + pageYScroll,
                                    w: rect.width
                                };
                            };
                            options.addCaptionHTMLFn = function (item, captionEl, isFake) {
                                if (!item.title) {
                                    captionEl.children[0].innerText = '';
                                    return false;
                                }
                                captionEl.children[0].innerHTML = item.title;
                                return true;
                            };
                            options.getDoubleTapZoom = function (isMouseClick, item) {
                                if (isMouseClick) {
                                    return 1.5;
                                }
                                else {
                                    return item.initialZoomLevel < 0.7 ? 1 : 1.5;
                                }
                            };
                            gallery = new PhotoSwipe(this.viewDom.querySelector('.pswp'), PhotoSwipeUI_Default, items, options);
                            useLargeImages = false;
                            firstResize = true;
                            gallery.listen('beforeResize', function () {
                                var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
                                dpiRatio = Math.min(dpiRatio, 2.5);
                                realViewportWidth = gallery.viewportSize.x * dpiRatio;
                                if (realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200) {
                                    if (!useLargeImages) {
                                        useLargeImages = true;
                                        imageSrcWillChange = true;
                                    }
                                }
                                else {
                                    if (useLargeImages) {
                                        useLargeImages = false;
                                        imageSrcWillChange = true;
                                    }
                                }
                                if (imageSrcWillChange && !firstResize) {
                                    gallery.invalidateCurrItems();
                                }
                                if (firstResize) {
                                    firstResize = false;
                                }
                                imageSrcWillChange = false;
                            });
                            return [2 /*return*/, new Promise(function (resolve) {
                                    gallery.listen('close', resolve);
                                    gallery.init();
                                })];
                    }
                });
            });
        };
        return NgCapacitorPhotoswipe;
    }());

    var StatusBar = core$1.Plugins.StatusBar;
    var NgCapacitorPhotoswipeService = /** @class */ (function () {
        function NgCapacitorPhotoswipeService(platform) {
            this.platform = platform;
        }
        /**
         * 从图片链接开始显示
         * @param defaultIndex 开始image的索引
         * @param urls // 图片链接数组
         */
        NgCapacitorPhotoswipeService.prototype.show = function (defaultIndex, urls) {
            return __awaiter(this, void 0, void 0, function () {
                var backButtonDefaultController;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            backButtonDefaultController = new BackButtonDefaultController(this.platform);
                            backButtonDefaultController.disable();
                            return [4 /*yield*/, new NgCapacitorPhotoswipe().start(defaultIndex, urls)];
                        case 1:
                            _b.sent();
                            backButtonDefaultController.enable();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 显示单张图片
         * @param src 图片地址
         */
        NgCapacitorPhotoswipeService.prototype.singleShow = function (src) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.show(0, [src])];
                });
            });
        };
        /**
         * 通过Element显示
         * @param defaultIndex 默认索引
         * @param elements ImageElement数组
         */
        NgCapacitorPhotoswipeService.prototype.showFromElements = function (defaultIndex, elements) {
            return __awaiter(this, void 0, void 0, function () {
                var backButtonDefaultController;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            backButtonDefaultController = new BackButtonDefaultController(this.platform);
                            backButtonDefaultController.disable();
                            return [4 /*yield*/, new NgCapacitorPhotoswipe().startWithElements(defaultIndex, elements)];
                        case 1:
                            _b.sent();
                            backButtonDefaultController.enable();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 通过单个Element显示
         * @param element 目标 ImageElement
         */
        NgCapacitorPhotoswipeService.prototype.showFromElement = function (element) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.showFromElements(0, [element])];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return NgCapacitorPhotoswipeService;
    }());
    NgCapacitorPhotoswipeService.decorators = [
        { type: core.Injectable }
    ];
    NgCapacitorPhotoswipeService.ctorParameters = function () { return [
        { type: angular.Platform }
    ]; };
    /**
     * Android返回按键默认事件控制器
     */
    var BackButtonDefaultController = /** @class */ (function () {
        function BackButtonDefaultController(platform) {
            this.platform = platform;
        }
        BackButtonDefaultController.prototype.disable = function () {
            if (core$1.Capacitor.isNative) {
                StatusBar.hide();
                if (core$1.Capacitor.platform === 'android') {
                    // 接管默认返回键路由返回事件
                    this.subscription = this.platform.backButton.subscribeWithPriority(0, function () { return null; });
                }
            }
        };
        BackButtonDefaultController.prototype.enable = function () {
            var _a;
            if (core$1.Capacitor.isNative) {
                StatusBar.show();
                // 释放默认返回键监听
                (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            }
        };
        return BackButtonDefaultController;
    }());

    var NgCapacitorPhotoswipeDirective = /** @class */ (function () {
        function NgCapacitorPhotoswipeDirective(el, capacitorPhotoswipeService) {
            this.el = el;
            this.capacitorPhotoswipeService = capacitorPhotoswipeService;
        }
        NgCapacitorPhotoswipeDirective.prototype.onClick = function (ev) {
            return __awaiter(this, void 0, void 0, function () {
                var attrValue, imagesNodeArray, index;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ev.stopPropagation(); // 停止事件冒泡
                            attrValue = this.el.nativeElement.getAttribute('libPhotoswipe');
                            if (!attrValue) return [3 /*break*/, 2];
                            imagesNodeArray = document.body.querySelectorAll("img[libPhotoswipe=" + attrValue + "]:not(.pswp__img)");
                            index = this.getNodeIndexFromList(this.el.nativeElement, imagesNodeArray);
                            return [4 /*yield*/, this.capacitorPhotoswipeService.showFromElements(index, imagesNodeArray)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.capacitorPhotoswipeService.showFromElement(this.el.nativeElement)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 获取一个node在nodeList中的索引
         * @param node 目标node
         * @param nodeList 目标nodeList
         */
        NgCapacitorPhotoswipeDirective.prototype.getNodeIndexFromList = function (node, nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                if (nodeList[i] === node) {
                    return i;
                }
            }
            return -1;
        };
        return NgCapacitorPhotoswipeDirective;
    }());
    NgCapacitorPhotoswipeDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'img[libPhotoswipe]',
                },] }
    ];
    NgCapacitorPhotoswipeDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: NgCapacitorPhotoswipeService }
    ]; };
    NgCapacitorPhotoswipeDirective.propDecorators = {
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };

    var NgCapacitorPhotoswipeModule = /** @class */ (function () {
        function NgCapacitorPhotoswipeModule() {
        }
        NgCapacitorPhotoswipeModule.forRoot = function () {
            return {
                ngModule: NgCapacitorPhotoswipeModule,
                providers: [
                    NgCapacitorPhotoswipeService,
                ],
            };
        };
        return NgCapacitorPhotoswipeModule;
    }());
    NgCapacitorPhotoswipeModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        NgCapacitorPhotoswipeDirective,
                    ],
                    exports: [
                        NgCapacitorPhotoswipeDirective,
                    ],
                },] }
    ];

    /*
     * Public API Surface of ng-capacitor-photoswipe
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgCapacitorPhotoswipeDirective = NgCapacitorPhotoswipeDirective;
    exports.NgCapacitorPhotoswipeModule = NgCapacitorPhotoswipeModule;
    exports.NgCapacitorPhotoswipeService = NgCapacitorPhotoswipeService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-capacitor-photoswipe.umd.js.map
