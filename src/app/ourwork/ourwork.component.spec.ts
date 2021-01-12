import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OurworkComponent } from './ourwork.component';

describe('OurworkComponent', () => {
  let component: OurworkComponent;
  let fixture: ComponentFixture<OurworkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OurworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
