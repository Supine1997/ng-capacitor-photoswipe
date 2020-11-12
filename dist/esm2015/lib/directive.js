import { Directive, ElementRef } from '@angular/core';
import { NgCapacitorPhotoswipeService } from './service';
export class NgCapacitorPhotoswipeDirective {
    constructor(el, capacitorPhotoswipeService) {
        this.capacitorPhotoswipeService = capacitorPhotoswipeService;
        el.nativeElement.addEventListener('click', () => {
            // attr上的值
            const attrValue = el.nativeElement.getAttribute('libPhotoswipe');
            if (attrValue) { // 如果存在值，则表示为群组显示
                const imagesNodeArray = document.body.querySelectorAll(`img[libPhotoswipe=${attrValue}]:not(.pswp__img)`);
                const index = this.getNodeIndexFromList(el.nativeElement, imagesNodeArray);
                this.capacitorPhotoswipeService.showFromElements(index, imagesNodeArray);
            }
            else {
                this.capacitorPhotoswipeService.showFromElement(el.nativeElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2dpdGxhYi1ydW5uZXIvYnVpbGRzL3dzU3k0QXo0LzAvdG9vbC9uZy1jYXBhY2l0b3ItcGhvdG9zd2lwZS9wcm9qZWN0cy9uZy1jYXBhY2l0b3ItcGhvdG9zd2lwZS9zcmMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUt2RCxNQUFNLE9BQU8sOEJBQThCO0lBQ3ZDLFlBQ0ksRUFBYyxFQUNOLDBCQUF3RDtRQUF4RCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQThCO1FBRWhFLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUM1QyxVQUFVO1lBQ1YsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakUsSUFBSSxTQUFTLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQzlCLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLFNBQVMsbUJBQW1CLENBQUMsQ0FBQztnQkFDMUcsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQzNFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZUFBc0IsQ0FBQyxDQUFDO2FBQ25GO2lCQUFNO2dCQUNILElBQUksQ0FBQywwQkFBMEIsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3JFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLG9CQUFvQixDQUFDLElBQWEsRUFBRSxRQUFrQjtRQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7U0FDSjtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDOzs7WUFqQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7YUFDakM7OztZQUxrQixVQUFVO1lBQ3JCLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdDYXBhY2l0b3JQaG90b3N3aXBlU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdpbWdbbGliUGhvdG9zd2lwZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ0NhcGFjaXRvclBob3Rvc3dpcGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlbDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBjYXBhY2l0b3JQaG90b3N3aXBlU2VydmljZTogTmdDYXBhY2l0b3JQaG90b3N3aXBlU2VydmljZSxcbiAgICApIHtcbiAgICAgICAgZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGF0dHLkuIrnmoTlgLxcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGVsLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdsaWJQaG90b3N3aXBlJyk7XG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlKSB7IC8vIOWmguaenOWtmOWcqOWAvO+8jOWImeihqOekuuS4uue+pOe7hOaYvuekulxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlc05vZGVBcnJheSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbChgaW1nW2xpYlBob3Rvc3dpcGU9JHthdHRyVmFsdWV9XTpub3QoLnBzd3BfX2ltZylgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0Tm9kZUluZGV4RnJvbUxpc3QoZWwubmF0aXZlRWxlbWVudCwgaW1hZ2VzTm9kZUFycmF5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcGFjaXRvclBob3Rvc3dpcGVTZXJ2aWNlLnNob3dGcm9tRWxlbWVudHMoaW5kZXgsIGltYWdlc05vZGVBcnJheSBhcyBhbnkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcGFjaXRvclBob3Rvc3dpcGVTZXJ2aWNlLnNob3dGcm9tRWxlbWVudChlbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5LiA5Liqbm9kZeWcqG5vZGVMaXN05Lit55qE57Si5byVXG4gICAgICogQHBhcmFtIG5vZGUg55uu5qCHbm9kZVxuICAgICAqIEBwYXJhbSBub2RlTGlzdCDnm67moIdub2RlTGlzdFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Tm9kZUluZGV4RnJvbUxpc3Qobm9kZTogRWxlbWVudCwgbm9kZUxpc3Q6IE5vZGVMaXN0KTogbnVtYmVyIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vZGVMaXN0W2ldID09PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cbiJdfQ==