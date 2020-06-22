import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseworkersComponent } from './caseworkers.component';

describe('CaseworkersComponent', () => {
  let component: CaseworkersComponent;
  let fixture: ComponentFixture<CaseworkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseworkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
