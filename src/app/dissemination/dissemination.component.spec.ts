import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisseminationComponent } from './dissemination.component';

describe('DisseminationComponent', () => {
  let component: DisseminationComponent;
  let fixture: ComponentFixture<DisseminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisseminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisseminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
