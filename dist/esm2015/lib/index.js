import { __awaiter } from "tslib";
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import template from './template';
export default class NgCapacitorPhotoswipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZ2l0bGFiLXJ1bm5lci9idWlsZHMvd3NTeTRBejQvMC90b29sL25nLWNhcGFjaXRvci1waG90b3N3aXBlL3Byb2plY3RzL25nLWNhcGFjaXRvci1waG90b3N3aXBlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxLQUFLLG9CQUFvQixNQUFNLHVDQUF1QyxDQUFDO0FBRTlFLE9BQU8sUUFBUSxNQUFNLFlBQVksQ0FBQztBQUVsQyxNQUFNLENBQUMsT0FBTyxPQUFPLHFCQUFxQjtJQUl0QztRQUhRLGNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUlwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxlQUFlO1FBQ25CLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxPQUFPLENBQUM7U0FDbEI7UUFDRCxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQyxVQUFVO1FBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7O09BR0c7SUFDSyxlQUFlO1FBQ25CLE9BQU87WUFDSCxJQUFJLEVBQUUsS0FBSztT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O1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQaG90b1N3aXBlIGZyb20gJ3Bob3Rvc3dpcGUnO1xuaW1wb3J0ICogYXMgUGhvdG9Td2lwZVVJX0RlZmF1bHQgZnJvbSAncGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUtdWktZGVmYXVsdCc7XG5pbXBvcnQge1Bob3RvU3dpcGVJdGVtfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5nQ2FwYWNpdG9yUGhvdG9zd2lwZSB7XG4gICAgcHJpdmF0ZSB2aWV3RG9tSWQgPSAnX19tZWRpYS1wcmV2aWV3ZXInO1xuICAgIHZpZXdEb206IEhUTUxFbGVtZW50OyAvLyDop4blm75Eb20gPGRpdiBpZD1cIl9fbWVkaWEtcHJldmlld2VyXCI+PGRpdiBjbGFzcz1cInBzd3BcIj4uLi48L2Rpdj48L2Rpdj5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZpZXdEb20gPSB0aGlzLmdlbmVyYXRlVmlld0RvbSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaehOW7ukRvbVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVWaWV3RG9tKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgbGV0IHZpZXdEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnZpZXdEb21JZCk7XG4gICAgICAgIGlmICh2aWV3RG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gdmlld0RvbTtcbiAgICAgICAgfVxuICAgICAgICB2aWV3RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZpZXdEb20uY2xhc3NMaXN0LmFkZCgnY29weS11bmFibGUnKTtcbiAgICAgICAgdmlld0RvbS5pZCA9IHRoaXMudmlld0RvbUlkO1xuICAgICAgICB2aWV3RG9tLmlubmVySFRNTCA9IHRlbXBsYXRlOyAvLyDmj5LlhaVkb23mqKHmnb9cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3RG9tKTtcbiAgICAgICAgcmV0dXJuIHZpZXdEb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5p6E5bu66YWN572uXG4gICAgICogQHJldHVybiDpu5jorqTphY3nva5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdlbmVyYXRlT3B0aW9ucygpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9vcDogZmFsc2UsIC8vIOaYr+WQpuW+queOr+aYvuekulxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS7jmltZ0VsZW1lbnRz5a+56LGh5Lit6I635Y+WaXRlbXNcbiAgICAgKiBAcGFyYW0gaW1nRWxlbWVudHMgaW1nRWxlbWVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEl0ZW1zRnJvbUVsZW1lbnRzKGltZ0VsZW1lbnRzOiBIVE1MSW1hZ2VFbGVtZW50W10pOiBQaG90b1N3aXBlSXRlbVtdIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBlbCBvZiBpbWdFbGVtZW50cykge1xuICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICAgc3JjOiBlbC5zcmMsXG4gICAgICAgICAgICAgICAgdzogZWwubmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgIGg6IGVsLm5hdHVyYWxIZWlnaHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO5Zu+54mH6ZO+5o6l5byA5aeL5pi+56S6XG4gICAgICogQHBhcmFtIGRlZmF1bHRJbmRleCDlvIDlp4tpbWFnZeeahOe0ouW8lVxuICAgICAqIEBwYXJhbSB1cmxzIOWbvueJh+mTvuaOpeaVsOe7hFxuICAgICAqL1xuICAgIGFzeW5jIHN0YXJ0KGRlZmF1bHRJbmRleDogbnVtYmVyLCB1cmxzOiBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZW5lcmF0ZU9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5pbmRleCA9IGRlZmF1bHRJbmRleDsgLy8g6buY6K6k57Si5byVXG5cbiAgICAgICAgY29uc3QgZ2FsbGVyeSA9IG5ldyBQaG90b1N3aXBlKFxuICAgICAgICAgICAgdGhpcy52aWV3RG9tLnF1ZXJ5U2VsZWN0b3IoJy5wc3dwJyksXG4gICAgICAgICAgICBQaG90b1N3aXBlVUlfRGVmYXVsdCxcbiAgICAgICAgICAgIHVybHMubWFwKHVybCA9PiBuZXcgT2JqZWN0KHtzcmM6IHVybCwgdzogMCwgaDogMH0pKSxcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICk7XG5cbiAgICAgICAgLyog6Ieq5Yqo5pu05paw5Zu+54mH5bC65a+4IEByZWZlcmVuY2UgaHR0cHM6Ly9naXRodWIuY29tL2x1b3lhbmcxMjUwMjQ2MDgvdnVlLXBob3Rvc3dpcGUtbW9iaWxlL2Jsb2IvbWFzdGVyL3NyYy9wcmV2aWV3ZXIudnVlICovXG4gICAgICAgIGdhbGxlcnkubGlzdGVuKCdnZXR0aW5nRGF0YScsIChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtLncgfHwgIWl0ZW0uaCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udyA9IGltZy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5oID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeS51cGRhdGVTaXplKHRydWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGl0ZW0uc3JjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBnYWxsZXJ5Lmxpc3RlbignY2xvc2UnLCByZXNvbHZlKTtcbiAgICAgICAgICAgIGdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku45pbWFnZSBlbGVtZW505a+56LGh5byA5aeL5pi+56S6XG4gICAgICogQHBhcmFtIGRlZmF1bHRJbmRleCDlvIDlp4tpbWFnZeeahOe0ouW8lVxuICAgICAqIEBwYXJhbSBpbWdFbGVtZW50cyDlkIzkuIDnu4TnmoRpbWFnZSBlbGVtZW505a+56LGh5pWw57uEXG4gICAgICovXG4gICAgYXN5bmMgc3RhcnRXaXRoRWxlbWVudHMoZGVmYXVsdEluZGV4OiBudW1iZXIsIGltZ0VsZW1lbnRzOiBIVE1MSW1hZ2VFbGVtZW50W10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCB0aGlzLmdldEl0ZW1zRnJvbUVsZW1lbnRzKGltZ0VsZW1lbnRzKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZW5lcmF0ZU9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5pbmRleCA9IGRlZmF1bHRJbmRleDtcbiAgICAgICAgb3B0aW9ucy5zaG93SGlkZU9wYWNpdHkgPSB0cnVlO1xuICAgICAgICBvcHRpb25zLmhpc3RvcnkgPSBmYWxzZTtcbiAgICAgICAgb3B0aW9ucy5zaGFyZUVsID0gZmFsc2U7XG4gICAgICAgIG9wdGlvbnMuZ2V0VGh1bWJCb3VuZHNGbiA9IGkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gaXRlbXNbaV0uZWw7XG4gICAgICAgICAgICBjb25zdCBwYWdlWVNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRodW1ibmFpbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogcmVjdC5sZWZ0LFxuICAgICAgICAgICAgICAgIHk6IHJlY3QudG9wICsgcGFnZVlTY3JvbGwsXG4gICAgICAgICAgICAgICAgdzogcmVjdC53aWR0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucy5hZGRDYXB0aW9uSFRNTEZuID0gKGl0ZW0sIGNhcHRpb25FbCwgaXNGYWtlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0udGl0bGUpIHtcbiAgICAgICAgICAgICAgICBjYXB0aW9uRWwuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FwdGlvbkVsLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucy5nZXREb3VibGVUYXBab29tID0gKGlzTW91c2VDbGljaywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTW91c2VDbGljaykge1xuICAgICAgICAgICAgICAgIHJldHVybiAxLjU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmluaXRpYWxab29tTGV2ZWwgPCAwLjcgPyAxIDogMS41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGdhbGxlcnkgPSBuZXcgUGhvdG9Td2lwZShcbiAgICAgICAgICAgIHRoaXMudmlld0RvbS5xdWVyeVNlbGVjdG9yKCcucHN3cCcpLFxuICAgICAgICAgICAgUGhvdG9Td2lwZVVJX0RlZmF1bHQsXG4gICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gc2VlOiBodHRwOi8vcGhvdG9zd2lwZS5jb20vZG9jdW1lbnRhdGlvbi9yZXNwb25zaXZlLWltYWdlcy5odG1sXG4gICAgICAgIGxldCByZWFsVmlld3BvcnRXaWR0aDogbnVtYmVyO1xuICAgICAgICBsZXQgdXNlTGFyZ2VJbWFnZXMgPSBmYWxzZTtcbiAgICAgICAgbGV0IGZpcnN0UmVzaXplID0gdHJ1ZTtcbiAgICAgICAgbGV0IGltYWdlU3JjV2lsbENoYW5nZTogYm9vbGVhbjtcblxuICAgICAgICBnYWxsZXJ5Lmxpc3RlbignYmVmb3JlUmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRwaVJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA6IDE7XG4gICAgICAgICAgICBkcGlSYXRpbyA9IE1hdGgubWluKGRwaVJhdGlvLCAyLjUpO1xuICAgICAgICAgICAgcmVhbFZpZXdwb3J0V2lkdGggPSBnYWxsZXJ5LnZpZXdwb3J0U2l6ZS54ICogZHBpUmF0aW87XG4gICAgICAgICAgICBpZiAocmVhbFZpZXdwb3J0V2lkdGggPj0gMTIwMCB8fCAoIWdhbGxlcnkubGlrZWx5VG91Y2hEZXZpY2UgJiYgcmVhbFZpZXdwb3J0V2lkdGggPiA4MDApIHx8IHNjcmVlbi53aWR0aCA+IDEyMDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZUxhcmdlSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZUxhcmdlSW1hZ2VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNXaWxsQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh1c2VMYXJnZUltYWdlcykge1xuICAgICAgICAgICAgICAgICAgICB1c2VMYXJnZUltYWdlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyY1dpbGxDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGltYWdlU3JjV2lsbENoYW5nZSAmJiAhZmlyc3RSZXNpemUpIHtcbiAgICAgICAgICAgICAgICBnYWxsZXJ5LmludmFsaWRhdGVDdXJySXRlbXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpcnN0UmVzaXplKSB7XG4gICAgICAgICAgICAgICAgZmlyc3RSZXNpemUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltYWdlU3JjV2lsbENoYW5nZSA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBnYWxsZXJ5Lmxpc3RlbignY2xvc2UnLCByZXNvbHZlKTtcbiAgICAgICAgICAgIGdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=