import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FaithleadersComponent } from './faithleaders.component';

describe('FaithleadersComponent', () => {
  let component: FaithleadersComponent;
  let fixture: ComponentFixture<FaithleadersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FaithleadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaithleadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
