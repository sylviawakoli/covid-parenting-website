import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShareYourStoryComponent } from './share-your-story.component';

describe('ShareYourStoryComponent', () => {
  let component: ShareYourStoryComponent;
  let fixture: ComponentFixture<ShareYourStoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareYourStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareYourStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
