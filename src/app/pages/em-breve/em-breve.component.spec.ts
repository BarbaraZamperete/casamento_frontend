import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { EmBreveComponent } from './em-breve.component';

describe('EmBreveComponent', () => {
  let component: EmBreveComponent;
  let fixture: ComponentFixture<EmBreveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmBreveComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmBreveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
