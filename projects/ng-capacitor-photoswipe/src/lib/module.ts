import {NgModule} from '@angular/core';
import {NgCapacitorPhotoswipeDirective} from './directive';
import {NgCapacitorPhotoswipeService} from './service';

@NgModule({
    declarations: [
        NgCapacitorPhotoswipeDirective,
    ],
    providers: [
        NgCapacitorPhotoswipeService,
    ],
    exports: [
        NgCapacitorPhotoswipeDirective,
    ],
})
export class NgCapacitorPhotoswipeModule {
}
