import {Injectable} from '@angular/core';
import CapacitorPhotoswipe from './index';
import {Capacitor, Plugins} from '@capacitor/core';
import {Platform} from '@ionic/angular';
import {Subscription} from 'rxjs';

const {StatusBar} = Plugins;

@Injectable()
export class NgCapacitorPhotoswipeService {

    constructor(
        private platform: Platform,
    ) {
    }

    /**
     * 从图片链接开始显示
     * @param defaultIndex 开始image的索引
     * @param urls // 图片链接数组
     */
    async show(defaultIndex: number, urls: string[]): Promise<void> {
        const backButtonDefaultController = new BackButtonDefaultController(this.platform);
        backButtonDefaultController.disable();
        await new CapacitorPhotoswipe().start(defaultIndex, urls);
        backButtonDefaultController.enable();
    }

    /**
     * 显示单张图片
     * @param src 图片地址
     */
    async singleShow(src: string): Promise<void> {
        return this.show(0, [src]);
    }

    /**
     * 通过Element显示
     * @param defaultIndex 默认索引
     * @param elements ImageElement数组
     */
    async showFromElements(defaultIndex: number, elements: HTMLImageElement[]): Promise<void> {
        const backButtonDefaultController = new BackButtonDefaultController(this.platform);
        backButtonDefaultController.disable();
        await new CapacitorPhotoswipe().startWithElements(defaultIndex, elements);
        backButtonDefaultController.enable();
    }

    /**
     * 通过单个Element显示
     * @param element 目标 ImageElement
     */
    async showFromElement(element: HTMLImageElement): Promise<void> {
        await this.showFromElements(0, [element]);
    }
}

/**
 * Android返回按键默认事件控制器
 */
class BackButtonDefaultController {
    subscription: Subscription;

    constructor(
        private platform: Platform,
    ) {
    }

    disable(): void {
        if (Capacitor.isNative) {
            StatusBar.hide();
            if (Capacitor.platform === 'android') {
                // 接管默认返回键路由返回事件
                this.subscription = this.platform.backButton.subscribeWithPriority(0, () => null);
            }
        }
    }

    enable(): void {
        if (Capacitor.isNative) {
            StatusBar.show();
            // 释放默认返回键监听
            this.subscription?.unsubscribe();
        }
    }
}
