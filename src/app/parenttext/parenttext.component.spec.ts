import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttextComponent } from './parenttext.component';

describe('ParenttextComponent', () => {
  let component: ParenttextComponent;
  let fixture: ComponentFixture<ParenttextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenttextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
