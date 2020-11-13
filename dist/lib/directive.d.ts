import { ElementRef } from '@angular/core';
import { NgCapacitorPhotoswipeService } from './service';
export declare class NgCapacitorPhotoswipeDirective {
    private el;
    private capacitorPhotoswipeService;
    constructor(el: ElementRef, capacitorPhotoswipeService: NgCapacitorPhotoswipeService);
    onClick(ev: any): Promise<void>;
    /**
     * 获取一个node在nodeList中的索引
     * @param node 目标node
     * @param nodeList 目标nodeList
     */
    private getNodeIndexFromList;
}
