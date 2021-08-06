import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOnpushComponent } from './hotel-onpush.component';

describe('HotelOnpushComponent', () => {
  let component: HotelOnpushComponent;
  let fixture: ComponentFixture<HotelOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
