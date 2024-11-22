/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoachService } from './coach.service';

describe('Service: Coach', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoachService]
    });
  });

  it('should ...', inject([CoachService], (service: CoachService) => {
    expect(service).toBeTruthy();
  }));
});
