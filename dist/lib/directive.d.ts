import { ElementRef } from '@angular/core';
import { NgCapacitorPhotoswipeService } from './service';
export declare class NgCapacitorPhotoswipeDirective {
    private capacitorPhotoswipeService;
    constructor(el: ElementRef, capacitorPhotoswipeService: NgCapacitorPhotoswipeService);
    /**
     * 获取一个node在nodeList中的索引
     * @param node 目标node
     * @param nodeList 目标nodeList
     */
    private getNodeIndexFromList;
}
