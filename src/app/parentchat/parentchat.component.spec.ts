import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentchatComponent } from './parentchat.component';

describe('ParentchatComponent', () => {
  let component: ParentchatComponent;
  let fixture: ComponentFixture<ParentchatComponent>;

  beforeEach(async(() => {
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
