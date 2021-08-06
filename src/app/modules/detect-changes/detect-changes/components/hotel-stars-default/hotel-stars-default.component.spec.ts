import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelStarsDefaultComponent } from './hotel-stars-default.component';

describe('HotelStarsDefaultComponent', () => {
  let component: HotelStarsDefaultComponent;
  let fixture: ComponentFixture<HotelStarsDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelStarsDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelStarsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
