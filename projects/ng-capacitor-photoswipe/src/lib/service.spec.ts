import { TestBed } from '@angular/core/testing';

import { NgCapacitorPhotoswipeService } from './service';

describe('NgCapacitorPhotoswipeService', () => {
  let service: NgCapacitorPhotoswipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCapacitorPhotoswipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
