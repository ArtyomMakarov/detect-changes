import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTitleOnpushComponent } from './hotel-title-onpush.component';

describe('HotelTitleOnpushComponent', () => {
  let component: HotelTitleOnpushComponent;
  let fixture: ComponentFixture<HotelTitleOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelTitleOnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTitleOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
