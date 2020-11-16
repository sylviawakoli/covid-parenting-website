import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareYourStoryComponent } from './share-your-story.component';

describe('ShareYourStoryComponent', () => {
  let component: ShareYourStoryComponent;
  let fixture: ComponentFixture<ShareYourStoryComponent>;

  beforeEach(async(() => {
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
