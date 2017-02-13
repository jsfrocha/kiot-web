/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LandingService } from './landing.service';

describe('LandingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandingService]
    });
  });

  it('should ...', inject([LandingService], (service: LandingService) => {
    expect(service).toBeTruthy();
  }));
});
