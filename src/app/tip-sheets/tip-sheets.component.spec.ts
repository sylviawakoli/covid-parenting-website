import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TipSheetsComponent } from './tip-sheets.component';

describe('TipSheetsComponent', () => {
  let component: TipSheetsComponent;
  let fixture: ComponentFixture<TipSheetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TipSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
