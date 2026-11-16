import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { NossaHistoriaComponent } from './nossa-historia.component';

describe('NossaHistoriaComponent', () => {
  let component: NossaHistoriaComponent;
  let fixture: ComponentFixture<NossaHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossaHistoriaComponent],
      providers: [provideNoopAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossaHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
