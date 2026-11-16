import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ConfirmaPresencaComponent } from './confirma-presenca.component';

describe('ConfirmaPresencaComponent', () => {
  let fixture: ComponentFixture<ConfirmaPresencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmaPresencaComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmaPresencaComponent);
    fixture.detectChanges();
  });

  it('renders the external RSVP form with an accessible title', () => {
    const iframe = fixture.nativeElement.querySelector('iframe') as HTMLIFrameElement;

    expect(iframe.title).toBe('Confirmação de Presença');
    expect(iframe.src).toContain('sites.icasei.com.br/barbaraekamila');
  });

  it('links to the gift list', () => {
    const link = fixture.nativeElement.querySelector('#lista-presentes a') as HTMLAnchorElement;

    expect(link.getAttribute('href')).toBe('/lista-presentes');
  });
});
