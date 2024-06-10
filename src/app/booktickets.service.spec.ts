import { TestBed } from '@angular/core/testing';

import { BookticketsService } from './booktickets.service';

describe('BookticketsService', () => {
  let service: BookticketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookticketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
