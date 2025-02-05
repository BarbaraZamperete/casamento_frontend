import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ApiService } from '../../services/api.service';
import { of, throwError } from 'rxjs';
import { Presente } from '../../interfaces/presente.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const mockApiService = jasmine.createSpyObj('ApiService', ['getPresentes']);

    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterModule, FooterComponent, HomeComponent],
      providers: [
        { provide: ApiService, useValue: mockApiService },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}) // Mock de parâmetros, ajuste conforme necessário
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;

    apiServiceSpy.getPresentes.and.returnValue(of([
      {id: 1, nome: 'Presente 1', valor: 100, imagem: 'img1.jpg', descricao: 'Descrição do presente 1', link_compra: 'https://link1.com'},
      {id: 2, nome: 'Presente 2', valor: 200, imagem: 'img2.jpg', descricao: 'Descrição do presente 2', link_compra: 'https://link2.com'},
      {id: 3, nome: 'Presente 3', valor: 300, imagem: 'img3.jpg', descricao: 'Descrição do presente 3', link_compra: 'https://link3.com'},
      {id: 4, nome: 'Presente 4', valor: 400, imagem: 'img4.jpg', descricao: 'Descrição do presente 4', link_compra: 'https://link4.com'}
    ]));
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });



  it('deve carregar presentes corretamente', () => {
    // Chama a função loadPresentes() do componente
    component.ngOnInit();  // Garante que o ngOnInit será executado e chamará loadPresentes

    fixture.detectChanges();  // Força a detecção de mudanças

    // Verifica se os 3 primeiros presentes foram carregados
    expect(component.presentesPreview.length).toBe(3);  // Verifica se os 3 primeiros presentes foram carregados
    expect(component.presentesPreview[0].nome).toBe('Presente 1');
    expect(component.presentesPreview[1].nome).toBe('Presente 2');
    expect(component.presentesPreview[2].nome).toBe('Presente 3');

    // Verifica se a chamada ao serviço foi feita
    expect(apiServiceSpy.getPresentes).toHaveBeenCalled();
    expect(component.isLoading).toBeFalse();  // Verifica se a flag de carregamento foi desativada
  });


  it('deve tratar erro ao carregar presentes', () => {
    // Simula um erro na chamada de API
    apiServiceSpy.getPresentes.and.returnValue(throwError(() => new Error('Erro de API')));

    const consoleSpy = spyOn(console, 'error');

    component.ngOnInit();  // Chama o ngOnInit que irá disparar o loadPresentes

    fixture.detectChanges();  // Força a detecção de mudanças

    // Verifica se o erro foi tratado e a flag de carregamento foi desativada
    expect(component.isLoading).toBeFalse();
    expect(consoleSpy).toHaveBeenCalledWith('Erro ao carregar presentes:', jasmine.any(Error));
  });

  // it('deve adicionar e remover classes corretamente no scroll', () => {
  //   // Criar os elementos DOM necessários
  //   const navbar = fixture.debugElement.query(By.css('.navbar')).nativeElement;
  //   const menuWhiteIcon = fixture.debugElement.query(By.css('img[src="assets/menu-ffff.svg"]')).nativeElement;
  //   const menuBlueIcon = fixture.debugElement.query(By.css('img[src="assets/menu-1A4B84.svg"]')).nativeElement;

  //   // Verifica o estado inicial (navbar deve ter a classe bg-transparent)
  //   expect(navbar.classList.contains('bg-transparent')).toBeTrue();
  //   expect(navbar.classList.contains('scrolled')).toBeFalse();
  //   expect(menuWhiteIcon.classList.contains('image-active')).toBeTrue();
  //   expect(menuBlueIcon.classList.contains('image-active')).toBeFalse();

  //   // Simula o evento de scroll
  //   window.scrollY = window.innerHeight - 100; // Define um valor para o scroll
  //   const scrollEvent = new Event('scroll');
  //   window.dispatchEvent(scrollEvent);

  //   fixture.detectChanges(); // Força a detecção de mudanças após o evento de scroll

  //   // Verifica se as classes foram alteradas
  //   expect(navbar.classList.contains('scrolled')).toBeTrue();
  //   expect(navbar.classList.contains('bg-transparent')).toBeFalse();
  //   expect(menuWhiteIcon.classList.contains('image-active')).toBeFalse();
  //   expect(menuBlueIcon.classList.contains('image-active')).toBeTrue();

  //   // Simula a rolagem para o topo da página
  //   window.scrollY = 0;
  //   window.dispatchEvent(scrollEvent);

  //   fixture.detectChanges(); // Força a detecção de mudanças novamente

  //   // Verifica se as classes foram revertidas
  //   expect(navbar.classList.contains('scrolled')).toBeFalse();
  //   expect(navbar.classList.contains('bg-transparent')).toBeTrue();
  //   expect(menuWhiteIcon.classList.contains('image-active')).toBeTrue();
  //   expect(menuBlueIcon.classList.contains('image-active')).toBeFalse();
  // });
  
  
});
