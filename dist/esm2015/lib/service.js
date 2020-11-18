import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import CapacitorPhotoswipe from './index';
import { Capacitor, Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
const { StatusBar } = Plugins;
export class NgCapacitorPhotoswipeService {
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
            yield new CapacitorPhotoswipe().start(defaultIndex, urls);
            backButtonDefaultController.enable();
        });
    }
    /**
     * 显示单张图片
     * @param src 图片地址
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
            yield new CapacitorPhotoswipe().startWithElements(defaultIndex, elements);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9naXRsYWItcnVubmVyL2J1aWxkcy93c1N5NEF6NC8wL3Rvb2wvbmctY2FwYWNpdG9yLXBob3Rvc3dpcGUvcHJvamVjdHMvbmctY2FwYWNpdG9yLXBob3Rvc3dpcGUvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxtQkFBbUIsTUFBTSxTQUFTLENBQUM7QUFDMUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsTUFBTSxFQUFDLFNBQVMsRUFBQyxHQUFHLE9BQU8sQ0FBQztBQUc1QixNQUFNLE9BQU8sNEJBQTRCO0lBRXJDLFlBQ1ksUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUU5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNHLElBQUksQ0FBQyxZQUFvQixFQUFFLElBQWM7O1lBQzNDLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSwyQkFBMkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkYsMkJBQTJCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEMsTUFBTSxJQUFJLG1CQUFtQixFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxRCwyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFRDs7O09BR0c7SUFDRyxVQUFVLENBQUMsR0FBVzs7WUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUQ7Ozs7T0FJRztJQUNHLGdCQUFnQixDQUFDLFlBQW9CLEVBQUUsUUFBNEI7O1lBQ3JFLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSwyQkFBMkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkYsMkJBQTJCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEMsTUFBTSxJQUFJLG1CQUFtQixFQUFFLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzFFLDJCQUEyQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pDLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLGVBQWUsQ0FBQyxPQUF5Qjs7WUFDM0MsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQUE7OztZQTlDSixVQUFVOzs7WUFMSCxRQUFROztBQXNEaEI7O0dBRUc7QUFDSCxNQUFNLDJCQUEyQjtJQUc3QixZQUNZLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFFOUIsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDcEIsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xDLGdCQUFnQjtnQkFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckY7U0FDSjtJQUNMLENBQUM7SUFFRCxNQUFNOztRQUNGLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUNwQixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakIsWUFBWTtZQUNaLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsV0FBVyxHQUFHO1NBQ3BDO0lBQ0wsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBDYXBhY2l0b3JQaG90b3N3aXBlIGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHtDYXBhY2l0b3IsIFBsdWdpbnN9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IHtTdGF0dXNCYXJ9ID0gUGx1Z2lucztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nQ2FwYWNpdG9yUGhvdG9zd2lwZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS7juWbvueJh+mTvuaOpeW8gOWni+aYvuekulxuICAgICAqIEBwYXJhbSBkZWZhdWx0SW5kZXgg5byA5aeLaW1hZ2XnmoTntKLlvJVcbiAgICAgKiBAcGFyYW0gdXJscyAvLyDlm77niYfpk77mjqXmlbDnu4RcbiAgICAgKi9cbiAgICBhc3luYyBzaG93KGRlZmF1bHRJbmRleDogbnVtYmVyLCB1cmxzOiBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBiYWNrQnV0dG9uRGVmYXVsdENvbnRyb2xsZXIgPSBuZXcgQmFja0J1dHRvbkRlZmF1bHRDb250cm9sbGVyKHRoaXMucGxhdGZvcm0pO1xuICAgICAgICBiYWNrQnV0dG9uRGVmYXVsdENvbnRyb2xsZXIuZGlzYWJsZSgpO1xuICAgICAgICBhd2FpdCBuZXcgQ2FwYWNpdG9yUGhvdG9zd2lwZSgpLnN0YXJ0KGRlZmF1bHRJbmRleCwgdXJscyk7XG4gICAgICAgIGJhY2tCdXR0b25EZWZhdWx0Q29udHJvbGxlci5lbmFibGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmL7npLrljZXlvKDlm77niYdcbiAgICAgKiBAcGFyYW0gc3JjIOWbvueJh+WcsOWdgFxuICAgICAqL1xuICAgIGFzeW5jIHNpbmdsZVNob3coc3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvdygwLCBbc3JjXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YCa6L+HRWxlbWVudOaYvuekulxuICAgICAqIEBwYXJhbSBkZWZhdWx0SW5kZXgg6buY6K6k57Si5byVXG4gICAgICogQHBhcmFtIGVsZW1lbnRzIEltYWdlRWxlbWVudOaVsOe7hFxuICAgICAqL1xuICAgIGFzeW5jIHNob3dGcm9tRWxlbWVudHMoZGVmYXVsdEluZGV4OiBudW1iZXIsIGVsZW1lbnRzOiBIVE1MSW1hZ2VFbGVtZW50W10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgYmFja0J1dHRvbkRlZmF1bHRDb250cm9sbGVyID0gbmV3IEJhY2tCdXR0b25EZWZhdWx0Q29udHJvbGxlcih0aGlzLnBsYXRmb3JtKTtcbiAgICAgICAgYmFja0J1dHRvbkRlZmF1bHRDb250cm9sbGVyLmRpc2FibGUoKTtcbiAgICAgICAgYXdhaXQgbmV3IENhcGFjaXRvclBob3Rvc3dpcGUoKS5zdGFydFdpdGhFbGVtZW50cyhkZWZhdWx0SW5kZXgsIGVsZW1lbnRzKTtcbiAgICAgICAgYmFja0J1dHRvbkRlZmF1bHRDb250cm9sbGVyLmVuYWJsZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmAmui/h+WNleS4qkVsZW1lbnTmmL7npLpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCDnm67moIcgSW1hZ2VFbGVtZW50XG4gICAgICovXG4gICAgYXN5bmMgc2hvd0Zyb21FbGVtZW50KGVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zaG93RnJvbUVsZW1lbnRzKDAsIFtlbGVtZW50XSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFuZHJvaWTov5Tlm57mjInplK7pu5jorqTkuovku7bmjqfliLblmahcbiAqL1xuY2xhc3MgQmFja0J1dHRvbkRlZmF1bHRDb250cm9sbGVyIHtcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICApIHtcbiAgICB9XG5cbiAgICBkaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoQ2FwYWNpdG9yLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBTdGF0dXNCYXIuaGlkZSgpO1xuICAgICAgICAgICAgaWYgKENhcGFjaXRvci5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgICAgICAgICAgLy8g5o6l566h6buY6K6k6L+U5Zue6ZSu6Lev55Sx6L+U5Zue5LqL5Lu2XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnBsYXRmb3JtLmJhY2tCdXR0b24uc3Vic2NyaWJlV2l0aFByaW9yaXR5KDAsICgpID0+IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoQ2FwYWNpdG9yLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBTdGF0dXNCYXIuc2hvdygpO1xuICAgICAgICAgICAgLy8g6YeK5pS+6buY6K6k6L+U5Zue6ZSu55uR5ZCsXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==