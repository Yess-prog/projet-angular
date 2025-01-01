import { TestBed } from '@angular/core/testing';

import { TrainerService } from './formateur.service';

describe('FormateurService', () => {
  let service: TrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
