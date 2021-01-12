import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartnersFundersComponent } from './partners-funders.component';

describe('PartnersFundersComponent', () => {
  let component: PartnersFundersComponent;
  let fixture: ComponentFixture<PartnersFundersComponent>;

  beforeEach(waitForAsync(() => {
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
