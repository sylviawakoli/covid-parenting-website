import { TestBed } from '@angular/core/testing';

import { WebAnalyticsService } from './web-analytics.service';

describe('WebAnalyticsService', () => {
  let service: WebAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
