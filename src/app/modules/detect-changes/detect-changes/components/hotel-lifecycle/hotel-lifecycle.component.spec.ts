import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelLifecycleComponent } from './hotel-lifecycle.component';

describe('HotelLifecycleComponent', () => {
  let component: HotelLifecycleComponent;
  let fixture: ComponentFixture<HotelLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelLifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
