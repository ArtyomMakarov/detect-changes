import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTitleLifecycleComponent } from './hotel-title-lifecycle.component';

describe('HotelTitleLifecycleComponent', () => {
  let component: HotelTitleLifecycleComponent;
  let fixture: ComponentFixture<HotelTitleLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelTitleLifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTitleLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
