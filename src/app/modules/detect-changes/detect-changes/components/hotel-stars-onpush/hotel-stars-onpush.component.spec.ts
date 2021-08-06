import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelStarsOnpushComponent } from './hotel-stars-onpush.component';

describe('HotelStarsOnpushComponent', () => {
  let component: HotelStarsOnpushComponent;
  let fixture: ComponentFixture<HotelStarsOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelStarsOnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelStarsOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
