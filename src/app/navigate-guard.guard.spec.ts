import { TestBed, async, inject } from '@angular/core/testing';

import { NavigateGuardGuard } from './navigate-guard.guard';

describe('NavigateGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigateGuardGuard]
    });
  });

  it('should ...', inject([NavigateGuardGuard], (guard: NavigateGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
