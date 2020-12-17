import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsLangSelectComponent } from './tips-lang-select.component';

describe('TipsLangSelectComponent', () => {
  let component: TipsLangSelectComponent;
  let fixture: ComponentFixture<TipsLangSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsLangSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsLangSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
