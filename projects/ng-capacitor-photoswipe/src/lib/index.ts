import * as PhotoSwipe from 'PhotoSwipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import {PhotoSwipeItem} from './interface';
import template from './template';

export default class NgCapacitorPhotoswipe {
    private viewDomId = '__media-previewer';
    viewDom: HTMLElement; // 视图Dom <div id="__media-previewer"><div class="pswp">...</div></div>

    constructor() {
        this.viewDom = this.generateViewDom();
    }

    /**
     * 构建Dom
     */
    private generateViewDom(): HTMLElement {
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
    private generateOptions(): any {
        return {
            loop: false, // 是否循环显示
        };
    }

    /**
     * 从imgElements对象中获取items
     * @param imgElements imgElements
     */
    private getItemsFromElements(imgElements: HTMLImageElement[]): PhotoSwipeItem[] {
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
    async start(defaultIndex: number, urls: string[]): Promise<void> {
        const options = this.generateOptions();
        options.index = defaultIndex; // 默认索引

        const gallery = new PhotoSwipe(
            this.viewDom.querySelector('.pswp'),
            PhotoSwipeUI_Default,
            urls.map(url => new Object({src: url, w: 0, h: 0})),
            options,
        );

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
    }

    /**
     * 从image element对象开始显示
     * @param defaultIndex 开始image的索引
     * @param imgElements 同一组的image element对象数组
     */
    async startWithElements(defaultIndex: number, imgElements: HTMLImageElement[]): Promise<void> {
        const items = await this.getItemsFromElements(imgElements);

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
            } else {
                return item.initialZoomLevel < 0.7 ? 1 : 1.5;
            }
        };

        const gallery = new PhotoSwipe(
            this.viewDom.querySelector('.pswp'),
            PhotoSwipeUI_Default,
            items,
            options,
        );

        // see: http://photoswipe.com/documentation/responsive-images.html
        let realViewportWidth: number;
        let useLargeImages = false;
        let firstResize = true;
        let imageSrcWillChange: boolean;

        gallery.listen('beforeResize', () => {
            let dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
            dpiRatio = Math.min(dpiRatio, 2.5);
            realViewportWidth = gallery.viewportSize.x * dpiRatio;
            if (realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200) {
                if (!useLargeImages) {
                    useLargeImages = true;
                    imageSrcWillChange = true;
                }
            } else {
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
    }
}
