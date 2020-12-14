import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewletterribbonComponent } from './newletterribbon.component';

describe('NewletterribbonComponent', () => {
  let component: NewletterribbonComponent;
  let fixture: ComponentFixture<NewletterribbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewletterribbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewletterribbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
