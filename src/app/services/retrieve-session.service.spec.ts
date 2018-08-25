import { TestBed, inject } from '@angular/core/testing';

import { RetrieveSessionService } from './retrieve-session.service';

describe('RetrieveSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveSessionService]
    });
  });

  it('should be created', inject([RetrieveSessionService], (service: RetrieveSessionService) => {
    expect(service).toBeTruthy();
  }));
});
