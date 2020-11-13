import { Injectable, Directive, ElementRef, HostListener, NgModule } from '@angular/core';
import { __awaiter } from 'tslib';
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import { Plugins, Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';

var template = `
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar" style="height: auto;padding-top: var(--ion-safe-area-top);">
                <div class="pswp__counter" style="margin-top: var(--ion-safe-area-top);"></div>
                <button class="pswp__button pswp__button--close" title="关闭"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                        <div class="pswp__preloader__cut">
                            <div class="pswp__preloader__donut"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="上一张">
            </button>
            <button class="pswp__button pswp__button--arrow--right" title="下一张">
            </button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>
`;

class NgCapacitorPhotoswipe {
    constructor() {
        this.viewDomId = '__media-previewer';
        this.viewDom = this.generateViewDom();
    }
    /**
     * 构建Dom
     */
    generateViewDom() {
        let viewDom = document.getElementById(this.viewDomId);
        if (viewDom) {
            return viewDom;
        }
        viewDom = document.createElement('div');
        viewDom.classList.add('copy-unable');
        viewDom.id = this.viewDomId;
        viewDom.innerHTML = template; // 插入dom模板
        document.body.appendChild(viewDom);
        return viewDom;
    }
    /**
     * 构建配置
     * @return 默认配置
     */
    generateOptions() {
        return {
            loop: false,
        };
    }
    /**
     * 从imgElements对象中获取items
     * @param imgElements imgElements
     */
    getItemsFromElements(imgElements) {
        const items = [];
        for (const el of imgElements) {
            items.push({
                el,
                src: el.src,
                w: el.naturalWidth,
                h: el.naturalHeight,
            });
        }
        return items;
    }
    /**
     * 从图片链接开始显示
     * @param defaultIndex 开始image的索引
     * @param urls 图片链接数组
     */
    start(defaultIndex, urls) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.generateOptions();
            options.index = defaultIndex; // 默认索引
            const gallery = new PhotoSwipe(this.viewDom.querySelector('.pswp'), PhotoSwipeUI_Default, urls.map(url => new Object({ src: url, w: 0, h: 0 })), options);
            /* 自动更新图片尺寸 @reference https://github.com/luoyang125024608/vue-photoswipe-mobile/blob/master/src/previewer.vue */
            gallery.listen('gettingData', (index, item) => {
                if (!item.w || !item.h) {
                    const img = new Image();
                    img.onload = () => {
                        item.w = img.width;
                        item.h = img.height;
                        gallery.updateSize(true);
                    };
                    img.src = item.src;
                }
            });
            return new Promise(resolve => {
                gallery.listen('close', resolve);
                gallery.init();
            });
        });
    }
    /**
     * 从image element对象开始显示
     * @param defaultIndex 开始image的索引
     * @param imgElements 同一组的image element对象数组
     */
    startWithElements(defaultIndex, imgElements) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield this.getItemsFromElements(imgElements);
            const options = this.generateOptions();
            options.index = defaultIndex;
            options.showHideOpacity = true;
            options.history = false;
            options.shareEl = false;
            options.getThumbBoundsFn = i => {
                const thumbnail = items[i].el;
                const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                const rect = thumbnail.getBoundingClientRect();
                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            };
            options.addCaptionHTMLFn = (item, captionEl, isFake) => {
                if (!item.title) {
                    captionEl.children[0].innerText = '';
                    return false;
                }
                captionEl.children[0].innerHTML = item.title;
                return true;
            };
            options.getDoubleTapZoom = (isMouseClick, item) => {
                if (isMouseClick) {
                    return 1.5;
                }
                else {
                    return item.initialZoomLevel < 0.7 ? 1 : 1.5;
                }
            };
            const gallery = new PhotoSwipe(this.viewDom.querySelector('.pswp'), PhotoSwipeUI_Default, items, options);
            // see: http://photoswipe.com/documentation/responsive-images.html
            let realViewportWidth;
            let useLargeImages = false;
            let firstResize = true;
            let imageSrcWillChange;
            gallery.listen('beforeResize', () => {
                let dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
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
            return new Promise(resolve => {
                gallery.listen('close', resolve);
                gallery.init();
            });
        });
    }
}

const { StatusBar } = Plugins;
class NgCapacitorPhotoswipeService {
    constructor(platform) {
        this.platform = platform;
    }
    /**
     * 从图片链接开始显示
     * @param defaultIndex 开始image的索引
     * @param urls // 图片链接数组
     */
    show(defaultIndex, urls) {
        return __awaiter(this, void 0, void 0, function* () {
            const backButtonDefaultController = new BackButtonDefaultController(this.platform);
            backButtonDefaultController.disable();
            yield new NgCapacitorPhotoswipe().start(defaultIndex, urls);
            backButtonDefaultController.enable();
        });
    }
    /**
     * 显示单张图片
     * @param src 图片地址
     * @param option 额外信息 *{
     *     width:图片宽度,
     *     height:图片高度,
     * }
     */
    singleShow(src) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.show(0, [src]);
        });
    }
    /**
     * 通过Element显示
     * @param defaultIndex 默认索引
     * @param elements ImageElement数组
     */
    showFromElements(defaultIndex, elements) {
        return __awaiter(this, void 0, void 0, function* () {
            const backButtonDefaultController = new BackButtonDefaultController(this.platform);
            backButtonDefaultController.disable();
            yield new NgCapacitorPhotoswipe().startWithElements(defaultIndex, elements);
            backButtonDefaultController.enable();
        });
    }
    /**
     * 通过单个Element显示
     * @param element 目标 ImageElement
     */
    showFromElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.showFromElements(0, [element]);
        });
    }
}
NgCapacitorPhotoswipeService.decorators = [
    { type: Injectable }
];
NgCapacitorPhotoswipeService.ctorParameters = () => [
    { type: Platform }
];
/**
 * Android返回按键默认事件控制器
 */
class BackButtonDefaultController {
    constructor(platform) {
        this.platform = platform;
    }
    disable() {
        if (Capacitor.isNative) {
            StatusBar.hide();
            if (Capacitor.platform === 'android') {
                // 接管默认返回键路由返回事件
                this.subscription = this.platform.backButton.subscribeWithPriority(0, () => null);
            }
        }
    }
    enable() {
        var _a;
        if (Capacitor.isNative) {
            StatusBar.show();
            // 释放默认返回键监听
            (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
    }
}

class NgCapacitorPhotoswipeDirective {
    constructor(el, capacitorPhotoswipeService) {
        this.el = el;
        this.capacitorPhotoswipeService = capacitorPhotoswipeService;
    }
    onClick(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            ev.stopPropagation(); // 停止事件冒泡
            // attr上的值
            const attrValue = this.el.nativeElement.getAttribute('libPhotoswipe');
            if (attrValue) { // 如果存在值，则表示为群组显示
                const imagesNodeArray = document.body.querySelectorAll(`img[libPhotoswipe=${attrValue}]:not(.pswp__img)`);
                const index = this.getNodeIndexFromList(this.el.nativeElement, imagesNodeArray);
                yield this.capacitorPhotoswipeService.showFromElements(index, imagesNodeArray);
            }
            else {
                yield this.capacitorPhotoswipeService.showFromElement(this.el.nativeElement);
            }
        });
    }
    /**
     * 获取一个node在nodeList中的索引
     * @param node 目标node
     * @param nodeList 目标nodeList
     */
    getNodeIndexFromList(node, nodeList) {
        for (let i = 0; i < nodeList.length; i++) {
            if (nodeList[i] === node) {
                return i;
            }
        }
        return -1;
    }
}
NgCapacitorPhotoswipeDirective.decorators = [
    { type: Directive, args: [{
                selector: 'img[libPhotoswipe]',
            },] }
];
NgCapacitorPhotoswipeDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgCapacitorPhotoswipeService }
];
NgCapacitorPhotoswipeDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

class NgCapacitorPhotoswipeModule {
    static forRoot() {
        return {
            ngModule: NgCapacitorPhotoswipeModule,
            providers: [
                NgCapacitorPhotoswipeService,
            ],
        };
    }
}
NgCapacitorPhotoswipeModule.decorators = [
    { type: NgModule, args: [{
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

export { NgCapacitorPhotoswipeDirective, NgCapacitorPhotoswipeModule, NgCapacitorPhotoswipeService };
//# sourceMappingURL=ng-capacitor-photoswipe.js.map
