import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCapacitorPhotoswipeComponent } from './ng-capacitor-photoswipe.component';

describe('NgCapacitorPhotoswipeComponent', () => {
  let component: NgCapacitorPhotoswipeComponent;
  let fixture: ComponentFixture<NgCapacitorPhotoswipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCapacitorPhotoswipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCapacitorPhotoswipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
