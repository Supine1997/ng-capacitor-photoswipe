import {Directive, ElementRef, HostListener} from '@angular/core';
import {NgCapacitorPhotoswipeService} from './service';

@Directive({
    selector: 'img[libPhotoswipe]',
})
export class NgCapacitorPhotoswipeDirective {
    constructor(
        private el: ElementRef,
        private capacitorPhotoswipeService: NgCapacitorPhotoswipeService,
    ) {
    }

    @HostListener('click', ['$event'])
    async onClick(ev): Promise<void> {
        ev.stopPropagation(); // 停止事件冒泡
        // attr上的值
        const attrValue = this.el.nativeElement.getAttribute('libPhotoswipe');
        if (attrValue) { // 如果存在值，则表示为群组显示
            const imagesNodeArray = document.body.querySelectorAll(`img[libPhotoswipe=${attrValue}]:not(.pswp__img)`);
            const index = this.getNodeIndexFromList(this.el.nativeElement, imagesNodeArray);
            await this.capacitorPhotoswipeService.showFromElements(index, imagesNodeArray as any);
        } else {
            await this.capacitorPhotoswipeService.showFromElement(this.el.nativeElement);
        }
    }

    /**
     * 获取一个node在nodeList中的索引
     * @param node 目标node
     * @param nodeList 目标nodeList
     */
    private getNodeIndexFromList(node: Element, nodeList: NodeList): number {
        for (let i = 0; i < nodeList.length; i++) {
            if (nodeList[i] === node) {
                return i;
            }
        }
        return -1;
    }
}
