import { TestBed } from '@angular/core/testing';

import { MockedServiceService } from './mocked-service.service';

describe('MockedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockedServiceService = TestBed.get(MockedServiceService);
    expect(service).toBeTruthy();
  });
});
