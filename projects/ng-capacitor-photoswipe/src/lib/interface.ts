/**
 * 图片预览对象
 */
export interface PhotoSwipeItem {
    el?: HTMLImageElement;
    src: string; // 图片地址
    w?: number; // 图片宽度
    h?: number; // 图片高度
}
