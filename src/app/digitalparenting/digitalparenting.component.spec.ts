import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalparentingComponent } from './digitalparenting.component';

describe('DigitalparentingComponent', () => {
  let component: DigitalparentingComponent;
  let fixture: ComponentFixture<DigitalparentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalparentingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalparentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
