import { TestBed } from '@angular/core/testing';

import { SongServiceService } from './sports-service.service';

describe('SongServiceService', () => {
  let service: SongServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});