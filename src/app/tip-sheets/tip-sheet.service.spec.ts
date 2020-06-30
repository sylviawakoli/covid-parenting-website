import { TestBed } from '@angular/core/testing';

import { TipSheetService } from './tip-sheet.service';

describe('TipSheetsService', () => {
  let service: TipSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
