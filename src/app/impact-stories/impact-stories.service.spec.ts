import { TestBed } from '@angular/core/testing';

import { ImpactStoriesService } from './impact-stories.service';

describe('ImpactStoriesService', () => {
  let service: ImpactStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
