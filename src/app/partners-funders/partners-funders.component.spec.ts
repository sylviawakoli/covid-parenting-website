import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersFundersComponent } from './partners-funders.component';

describe('PartnersFundersComponent', () => {
  let component: PartnersFundersComponent;
  let fixture: ComponentFixture<PartnersFundersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersFundersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersFundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
