import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleNavBarComponent } from './simple-nav-bar.component';

describe('SimpleNavBarComponent', () => {
  let component: SimpleNavBarComponent;
  let fixture: ComponentFixture<SimpleNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy(); // Verifica se o componente foi criado
  });

  it('deve renderizar o template corretamente', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')).toBeTruthy(); // Verifica se existe um elemento <nav> no template
  });
});
