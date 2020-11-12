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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9naXRsYWItcnVubmVyL2J1aWxkcy93c1N5NEF6NC8wL3Rvb2wvbmctY2FwYWNpdG9yLXBob3Rvc3dpcGUvcHJvamVjdHMvbmctY2FwYWNpdG9yLXBob3Rvc3dpcGUvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxtQkFBbUIsTUFBTSxTQUFTLENBQUM7QUFDMUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsTUFBTSxFQUFDLFNBQVMsRUFBQyxHQUFHLE9BQU8sQ0FBQztBQUc1QixNQUFNLE9BQU8sNEJBQTRCO0lBRXJDLFlBQ1ksUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUU5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNHLElBQUksQ0FBQyxZQUFvQixFQUFFLElBQWM7O1lBQzNDLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSwyQkFBMkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkYsMkJBQTJCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEMsTUFBTSxJQUFJLG1CQUFtQixFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxRCwyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFRDs7Ozs7OztPQU9HO0lBQ0csVUFBVSxDQUFDLEdBQVc7O1lBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVEOzs7O09BSUc7SUFDRyxnQkFBZ0IsQ0FBQyxZQUFvQixFQUFFLFFBQTRCOztZQUNyRSxNQUFNLDJCQUEyQixHQUFHLElBQUksMkJBQTJCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25GLDJCQUEyQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RDLE1BQU0sSUFBSSxtQkFBbUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMxRSwyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFRDs7O09BR0c7SUFDRyxlQUFlLENBQUMsT0FBeUI7O1lBQzNDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztLQUFBOzs7WUFsREosVUFBVTs7O1lBTEgsUUFBUTs7QUEwRGhCOztHQUVHO0FBQ0gsTUFBTSwyQkFBMkI7SUFHN0IsWUFDWSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRTlCLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQixJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUNsQyxnQkFBZ0I7Z0JBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JGO1NBQ0o7SUFDTCxDQUFDO0lBRUQsTUFBTTs7UUFDRixJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDcEIsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLFlBQVk7WUFDWixNQUFBLElBQUksQ0FBQyxZQUFZLDBDQUFFLFdBQVcsR0FBRztTQUNwQztJQUNMLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgQ2FwYWNpdG9yUGhvdG9zd2lwZSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7Q2FwYWNpdG9yLCBQbHVnaW5zfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5jb25zdCB7U3RhdHVzQmFyfSA9IFBsdWdpbnM7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ0NhcGFjaXRvclBob3Rvc3dpcGVTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku47lm77niYfpk77mjqXlvIDlp4vmmL7npLpcbiAgICAgKiBAcGFyYW0gZGVmYXVsdEluZGV4IOW8gOWni2ltYWdl55qE57Si5byVXG4gICAgICogQHBhcmFtIHVybHMgLy8g5Zu+54mH6ZO+5o6l5pWw57uEXG4gICAgICovXG4gICAgYXN5bmMgc2hvdyhkZWZhdWx0SW5kZXg6IG51bWJlciwgdXJsczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgYmFja0J1dHRvbkRlZmF1bHRDb250cm9sbGVyID0gbmV3IEJhY2tCdXR0b25EZWZhdWx0Q29udHJvbGxlcih0aGlzLnBsYXRmb3JtKTtcbiAgICAgICAgYmFja0J1dHRvbkRlZmF1bHRDb250cm9sbGVyLmRpc2FibGUoKTtcbiAgICAgICAgYXdhaXQgbmV3IENhcGFjaXRvclBob3Rvc3dpcGUoKS5zdGFydChkZWZhdWx0SW5kZXgsIHVybHMpO1xuICAgICAgICBiYWNrQnV0dG9uRGVmYXVsdENvbnRyb2xsZXIuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pi+56S65Y2V5byg5Zu+54mHXG4gICAgICogQHBhcmFtIHNyYyDlm77niYflnLDlnYBcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOmineWkluS/oeaBryAqe1xuICAgICAqICAgICB3aWR0aDrlm77niYflrr3luqYsXG4gICAgICogICAgIGhlaWdodDrlm77niYfpq5jluqYsXG4gICAgICogfVxuICAgICAqL1xuICAgIGFzeW5jIHNpbmdsZVNob3coc3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvdygwLCBbc3JjXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YCa6L+HRWxlbWVudOaYvuekulxuICAgICAqIEBwYXJhbSBkZWZhdWx0SW5kZXgg6buY6K6k57Si5byVXG4gICAgICogQHBhcmFtIGVsZW1lbnRzIEltYWdlRWxlbWVudOaVsOe7hFxuICAgICAqL1xuICAgIGFzeW5jIHNob3dGcm9tRWxlbWVudHMoZGVmYXVsdEluZGV4OiBudW1iZXIsIGVsZW1lbnRzOiBIVE1MSW1hZ2VFbGVtZW50W10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgYmFja0J1dHRvbkRlZmF1bHRDb250cm9sbGVyID0gbmV3IEJhY2tCdXR0b25EZWZhdWx0Q29udHJvbGxlcih0aGlzLnBsYXRmb3JtKTtcbiAgICAgICAgYmFja0J1dHRvbkRlZmF1bHRDb250cm9sbGVyLmRpc2FibGUoKTtcbiAgICAgICAgYXdhaXQgbmV3IENhcGFjaXRvclBob3Rvc3dpcGUoKS5zdGFydFdpdGhFbGVtZW50cyhkZWZhdWx0SW5kZXgsIGVsZW1lbnRzKTtcbiAgICAgICAgYmFja0J1dHRvbkRlZmF1bHRDb250cm9sbGVyLmVuYWJsZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmAmui/h+WNleS4qkVsZW1lbnTmmL7npLpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCDnm67moIcgSW1hZ2VFbGVtZW50XG4gICAgICovXG4gICAgYXN5bmMgc2hvd0Zyb21FbGVtZW50KGVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zaG93RnJvbUVsZW1lbnRzKDAsIFtlbGVtZW50XSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFuZHJvaWTov5Tlm57mjInplK7pu5jorqTkuovku7bmjqfliLblmahcbiAqL1xuY2xhc3MgQmFja0J1dHRvbkRlZmF1bHRDb250cm9sbGVyIHtcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICApIHtcbiAgICB9XG5cbiAgICBkaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoQ2FwYWNpdG9yLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBTdGF0dXNCYXIuaGlkZSgpO1xuICAgICAgICAgICAgaWYgKENhcGFjaXRvci5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgICAgICAgICAgLy8g5o6l566h6buY6K6k6L+U5Zue6ZSu6Lev55Sx6L+U5Zue5LqL5Lu2XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnBsYXRmb3JtLmJhY2tCdXR0b24uc3Vic2NyaWJlV2l0aFByaW9yaXR5KDAsICgpID0+IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoQ2FwYWNpdG9yLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBTdGF0dXNCYXIuc2hvdygpO1xuICAgICAgICAgICAgLy8g6YeK5pS+6buY6K6k6L+U5Zue6ZSu55uR5ZCsXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==