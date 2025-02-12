import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselSlideComponent } from './carrosel-slide.component';

describe('CarroselSlideComponent', () => {
  let component: CarroselSlideComponent;
  let fixture: ComponentFixture<CarroselSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroselSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroselSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
