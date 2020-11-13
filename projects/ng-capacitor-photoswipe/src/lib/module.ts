import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgCapacitorPhotoswipeDirective} from './directive';
import {NgCapacitorPhotoswipeService} from './service';

@NgModule({
    declarations: [
        NgCapacitorPhotoswipeDirective,
    ],
    exports: [
        NgCapacitorPhotoswipeDirective,
    ],
})
export class NgCapacitorPhotoswipeModule {

    static forRoot(): ModuleWithProviders<NgCapacitorPhotoswipeModule> {
        return {
            ngModule: NgCapacitorPhotoswipeModule,
            providers: [
                NgCapacitorPhotoswipeService,
            ],
        };
    }
}
