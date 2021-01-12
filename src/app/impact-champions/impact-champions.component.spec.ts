import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactChampionsComponent } from './impact-champions.component';

describe('ImpactChampionsComponent', () => {
  let component: ImpactChampionsComponent;
  let fixture: ComponentFixture<ImpactChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactChampionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
