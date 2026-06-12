import { Component } from '@angular/core';
import { SimpleNavBarComponent } from '../../components/navbar/simple-nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-galeria',
  imports: [SimpleNavBarComponent, FooterComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {

}
