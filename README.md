# NgCapacitorPhotoswipe

Angular+Capacitor的photoswipe插件

## 安装

```shell script
npm install git+http://192.168.3.168:12000/tool/ng-capacitor-photoswipe.git
```

## 配置

> global.scss
```scss
/* photo-swipe */
@import "~photoswipe/dist/photoswipe.css";
@import "~photoswipe/dist/default-skin/default-skin.css";
```

## 使用

> 导入AppModule
```typescript
import { NgCapacitorPhotoswipeModule } from 'ng-capacitor-photoswipe/dist';

@NgModule({
  imports: [
    NgCapacitorPhotoswipeModule.forRoot(),
  ],
})
export class AppModule {}
```

### 通过 `directive` 调用
> 在目标Module中导入
```typescript
import { NgCapacitorPhotoswipeModule } from 'ng-capacitor-photoswipe/dist';

@NgModule({
  imports: [
    NgCapacitorPhotoswipeModule,
  ],
})
```
> `template` 中绑定attribute
```html
<!-- 调用单张预览 -->
<img src="path2pic" libPhotoswipe>

<!-- 通过给一组图片设置相同的libPhotoswipe值将改组图片关联预览 -->
<img src="path2pic1" libPhotoswipe="group1">
<img src="path2pic2" libPhotoswipe="group1">
<img src="path2pic3" libPhotoswipe="group1">
```

### 通过 `injectable` 调用

```typescript
import {NgCapacitorPhotoswipeService} from 'ng-capacitor-photoswipe/dist';

export class SomeNgComponent{

    constructor(
        private photoswipeService: NgCapacitorPhotoswipeService,
    ) {
        // 单张预览 *图片链接
        this.photoswipeService.singleShow('path2pic');
        // 多张群组预览 *图片链接
        this.photoswipeService.show(index, ['path2pic1', 'path2pic2']);

        // 单张预览 *HTMLImageElement
        this.photoswipeService.showFromElement(aHTMLImageElement);
        // 多张群组预览 *HTMLImageElement
        this.photoswipeService.showFromElements(index, [aHTMLImageElement, bHTMLImageElement]);
    }
}
```

## Reference

- [Photoswipe](https://photoswipe.com)
- [Photoswipe Github](https://github.com/dimsemenov/photoswipe)
