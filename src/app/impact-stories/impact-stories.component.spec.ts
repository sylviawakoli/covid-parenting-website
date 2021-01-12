import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImpactStoriesComponent } from './impact-stories.component';

describe('ImpactStoriesComponent', () => {
  let component: ImpactStoriesComponent;
  let fixture: ComponentFixture<ImpactStoriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
