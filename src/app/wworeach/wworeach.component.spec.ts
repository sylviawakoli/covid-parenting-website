import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WworeachComponent } from './wworeach.component';

describe('WworeachComponent', () => {
  let component: WworeachComponent;
  let fixture: ComponentFixture<WworeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WworeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WworeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
