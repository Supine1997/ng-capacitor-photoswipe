import { __awaiter } from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgCapacitorPhotoswipeService } from './service';
export class NgCapacitorPhotoswipeDirective {
    constructor(el, capacitorPhotoswipeService) {
        this.el = el;
        this.capacitorPhotoswipeService = capacitorPhotoswipeService;
    }
    onClick(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            ev.stopPropagation(); // 停止事件冒泡
            // attr上的值
            const attrValue = this.el.nativeElement.getAttribute('libPhotoswipe');
            if (attrValue) { // 如果存在值，则表示为群组显示
                const imagesNodeArray = document.body.querySelectorAll(`img[libPhotoswipe=${attrValue}]:not(.pswp__img)`);
                const index = this.getNodeIndexFromList(this.el.nativeElement, imagesNodeArray);
                yield this.capacitorPhotoswipeService.showFromElements(index, imagesNodeArray);
            }
            else {
                yield this.capacitorPhotoswipeService.showFromElement(this.el.nativeElement);
            }
        });
    }
    /**
     * 获取一个node在nodeList中的索引
     * @param node 目标node
     * @param nodeList 目标nodeList
     */
    getNodeIndexFromList(node, nodeList) {
        for (let i = 0; i < nodeList.length; i++) {
            if (nodeList[i] === node) {
                return i;
            }
        }
        return -1;
    }
}
NgCapacitorPhotoswipeDirective.decorators = [
    { type: Directive, args: [{
                selector: 'img[libPhotoswipe]',
            },] }
];
NgCapacitorPhotoswipeDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgCapacitorPhotoswipeService }
];
NgCapacitorPhotoswipeDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2dpdGxhYi1ydW5uZXIvYnVpbGRzL3dzU3k0QXo0LzAvdG9vbC9uZy1jYXBhY2l0b3ItcGhvdG9zd2lwZS9wcm9qZWN0cy9uZy1jYXBhY2l0b3ItcGhvdG9zd2lwZS9zcmMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBS3ZELE1BQU0sT0FBTyw4QkFBOEI7SUFDdkMsWUFDWSxFQUFjLEVBQ2QsMEJBQXdEO1FBRHhELE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQThCO0lBRXBFLENBQUM7SUFHSyxPQUFPLENBQUMsRUFBRTs7WUFDWixFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxTQUFTO1lBQy9CLFVBQVU7WUFDVixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEUsSUFBSSxTQUFTLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQzlCLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLFNBQVMsbUJBQW1CLENBQUMsQ0FBQztnQkFDMUcsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUNoRixNQUFNLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZUFBc0IsQ0FBQyxDQUFDO2FBQ3pGO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxDQUFDLDBCQUEwQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ2hGO1FBQ0wsQ0FBQztLQUFBO0lBRUQ7Ozs7T0FJRztJQUNLLG9CQUFvQixDQUFDLElBQWEsRUFBRSxRQUFrQjtRQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7U0FDSjtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDOzs7WUFwQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7YUFDakM7OztZQUxrQixVQUFVO1lBQ3JCLDRCQUE0Qjs7O3NCQVkvQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nQ2FwYWNpdG9yUGhvdG9zd2lwZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnaW1nW2xpYlBob3Rvc3dpcGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdDYXBhY2l0b3JQaG90b3N3aXBlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBjYXBhY2l0b3JQaG90b3N3aXBlU2VydmljZTogTmdDYXBhY2l0b3JQaG90b3N3aXBlU2VydmljZSxcbiAgICApIHtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgYXN5bmMgb25DbGljayhldik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTsgLy8g5YGc5q2i5LqL5Lu25YaS5rOhXG4gICAgICAgIC8vIGF0dHLkuIrnmoTlgLxcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnbGliUGhvdG9zd2lwZScpO1xuICAgICAgICBpZiAoYXR0clZhbHVlKSB7IC8vIOWmguaenOWtmOWcqOWAvO+8jOWImeihqOekuuS4uue+pOe7hOaYvuekulxuICAgICAgICAgICAgY29uc3QgaW1hZ2VzTm9kZUFycmF5ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKGBpbWdbbGliUGhvdG9zd2lwZT0ke2F0dHJWYWx1ZX1dOm5vdCgucHN3cF9faW1nKWApO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldE5vZGVJbmRleEZyb21MaXN0KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgaW1hZ2VzTm9kZUFycmF5KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY2FwYWNpdG9yUGhvdG9zd2lwZVNlcnZpY2Uuc2hvd0Zyb21FbGVtZW50cyhpbmRleCwgaW1hZ2VzTm9kZUFycmF5IGFzIGFueSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNhcGFjaXRvclBob3Rvc3dpcGVTZXJ2aWNlLnNob3dGcm9tRWxlbWVudCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5LiA5Liqbm9kZeWcqG5vZGVMaXN05Lit55qE57Si5byVXG4gICAgICogQHBhcmFtIG5vZGUg55uu5qCHbm9kZVxuICAgICAqIEBwYXJhbSBub2RlTGlzdCDnm67moIdub2RlTGlzdFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Tm9kZUluZGV4RnJvbUxpc3Qobm9kZTogRWxlbWVudCwgbm9kZUxpc3Q6IE5vZGVMaXN0KTogbnVtYmVyIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vZGVMaXN0W2ldID09PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cbiJdfQ==