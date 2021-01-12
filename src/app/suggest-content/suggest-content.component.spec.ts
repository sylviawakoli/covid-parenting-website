import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SuggestContentComponent } from './suggest-content.component';

describe('SuggestContentComponent', () => {
  let component: SuggestContentComponent;
  let fixture: ComponentFixture<SuggestContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
