import { Platform } from '@ionic/angular';
export declare class NgCapacitorPhotoswipeService {
    private platform;
    constructor(platform: Platform);
    /**
     * 从图片链接开始显示
     * @param defaultIndex 开始image的索引
     * @param urls // 图片链接数组
     */
    show(defaultIndex: number, urls: string[]): Promise<void>;
    /**
     * 显示单张图片
     * @param src 图片地址
     * @param option 额外信息 *{
     *     width:图片宽度,
     *     height:图片高度,
     * }
     */
    singleShow(src: string): Promise<void>;
    /**
     * 通过Element显示
     * @param defaultIndex 默认索引
     * @param elements ImageElement数组
     */
    showFromElements(defaultIndex: number, elements: HTMLImageElement[]): Promise<void>;
    /**
     * 通过单个Element显示
     * @param element 目标 ImageElement
     */
    showFromElement(element: HTMLImageElement): Promise<void>;
}
