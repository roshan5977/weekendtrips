import { TestBed } from '@angular/core/testing';

import { TravellerGuard } from './traveller.guard';

describe('TravellerGuard', () => {
  let guard: TravellerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TravellerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
