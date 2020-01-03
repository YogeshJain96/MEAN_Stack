import { TestBed } from '@angular/core/testing';

import { BookHubService } from './book-hub.service';

describe('BookHubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookHubService = TestBed.get(BookHubService);
    expect(service).toBeTruthy();
  });
});
