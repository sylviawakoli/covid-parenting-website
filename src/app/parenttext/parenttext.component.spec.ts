import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParenttextComponent } from './parenttext.component';

describe('ParenttextComponent', () => {
  let component: ParenttextComponent;
  let fixture: ComponentFixture<ParenttextComponent>;

  beforeEach(waitForAsync(() => {
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
