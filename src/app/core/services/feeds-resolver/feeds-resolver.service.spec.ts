import { TestBed } from '@angular/core/testing';

import { FeedsResolverService } from './feeds-resolver.service';

describe('FeedsResolverService', () => {
  let service: FeedsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
