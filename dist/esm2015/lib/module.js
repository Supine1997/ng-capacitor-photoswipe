import { NgModule } from '@angular/core';
import { NgCapacitorPhotoswipeDirective } from './directive';
import { NgCapacitorPhotoswipeService } from './service';
export class NgCapacitorPhotoswipeModule {
    static forRoot() {
        return {
            ngModule: NgCapacitorPhotoswipeModule,
            providers: [
                NgCapacitorPhotoswipeService,
            ],
        };
    }
}
NgCapacitorPhotoswipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgCapacitorPhotoswipeDirective,
                ],
                exports: [
                    NgCapacitorPhotoswipeDirective,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2dpdGxhYi1ydW5uZXIvYnVpbGRzL3dzU3k0QXo0LzAvdG9vbC9uZy1jYXBhY2l0b3ItcGhvdG9zd2lwZS9wcm9qZWN0cy9uZy1jYXBhY2l0b3ItcGhvdG9zd2lwZS9zcmMvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUMzRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFVdkQsTUFBTSxPQUFPLDJCQUEyQjtJQUVwQyxNQUFNLENBQUMsT0FBTztRQUNWLE9BQU87WUFDSCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFNBQVMsRUFBRTtnQkFDUCw0QkFBNEI7YUFDL0I7U0FDSixDQUFDO0lBQ04sQ0FBQzs7O1lBakJKLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsOEJBQThCO2lCQUNqQztnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsOEJBQThCO2lCQUNqQzthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nQ2FwYWNpdG9yUGhvdG9zd2lwZURpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHtOZ0NhcGFjaXRvclBob3Rvc3dpcGVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZ0NhcGFjaXRvclBob3Rvc3dpcGVEaXJlY3RpdmUsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5nQ2FwYWNpdG9yUGhvdG9zd2lwZURpcmVjdGl2ZSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ0NhcGFjaXRvclBob3Rvc3dpcGVNb2R1bGUge1xuXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ0NhcGFjaXRvclBob3Rvc3dpcGVNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ0NhcGFjaXRvclBob3Rvc3dpcGVNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBOZ0NhcGFjaXRvclBob3Rvc3dpcGVTZXJ2aWNlLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=