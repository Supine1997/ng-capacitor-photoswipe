import {Directive, ElementRef} from '@angular/core';
import {NgCapacitorPhotoswipeService} from './service';

@Directive({
    selector: 'img[libPhotoswipe]',
})
export class NgCapacitorPhotoswipeDirective {
    constructor(
        el: ElementRef,
        private capacitorPhotoswipeService: NgCapacitorPhotoswipeService,
    ) {
        el.nativeElement.addEventListener('click', () => {
            // attr上的值
            const attrValue = el.nativeElement.getAttribute('libPhotoswipe');
            if (attrValue) { // 如果存在值，则表示为群组显示
                const imagesNodeArray = document.body.querySelectorAll(`img[libPhotoswipe=${attrValue}]:not(.pswp__img)`);
                const index = this.getNodeIndexFromList(el.nativeElement, imagesNodeArray);
                this.capacitorPhotoswipeService.showFromElements(index, imagesNodeArray as any);
            } else {
                this.capacitorPhotoswipeService.showFromElement(el.nativeElement);
            }
        });
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
