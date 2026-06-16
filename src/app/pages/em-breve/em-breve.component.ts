import { Component } from '@angular/core';
import { SimpleNavBarComponent } from '../../components/navbar/simple-nav-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-em-breve',
  standalone: true,
  imports: [SimpleNavBarComponent, RouterLink],
  templateUrl: './em-breve.component.html',
  styleUrl: './em-breve.component.scss'
})
export class EmBreveComponent {

}
