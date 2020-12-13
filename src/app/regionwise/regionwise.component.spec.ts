import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionwiseComponent } from './regionwise.component';

describe('RegionwiseComponent', () => {
  let component: RegionwiseComponent;
  let fixture: ComponentFixture<RegionwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
