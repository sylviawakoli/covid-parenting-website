import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentchatComponent } from './parentchat.component';

describe('ParentchatComponent', () => {
  let component: ParentchatComponent;
  let fixture: ComponentFixture<ParentchatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
