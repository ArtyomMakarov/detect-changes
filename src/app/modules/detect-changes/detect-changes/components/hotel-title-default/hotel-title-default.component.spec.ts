import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTitleDefaultComponent } from './hotel-title-default.component';

describe('HotelTitleDefaultComponent', () => {
  let component: HotelTitleDefaultComponent;
  let fixture: ComponentFixture<HotelTitleDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelTitleDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTitleDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
