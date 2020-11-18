export default class NgCapacitorPhotoswipe {
    private viewDomId;
    viewDom: HTMLElement;
    constructor();
    /**
     * 构建Dom
     */
    private generateViewDom;
    /**
     * 构建配置
     * @return 默认配置
     */
    private generateOptions;
    /**
     * 从imgElements对象中获取items
     * @param imgElements imgElements
     */
    private getItemsFromElements;
    /**
     * 从图片链接开始显示
     * @param defaultIndex 开始image的索引
     * @param urls 图片链接数组
     */
    start(defaultIndex: number, urls: string[]): Promise<void>;
    /**
     * 从image element对象开始显示
     * @param defaultIndex 开始image的索引
     * @param imgElements 同一组的image element对象数组
     */
    startWithElements(defaultIndex: number, imgElements: HTMLImageElement[]): Promise<void>;
}
