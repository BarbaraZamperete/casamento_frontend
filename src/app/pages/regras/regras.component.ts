import { Component } from '@angular/core';
import { SimpleNavBarComponent } from "../../components/navbar/simple-nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-regras',
  imports: [SimpleNavBarComponent, FooterComponent],
  templateUrl: './regras.component.html',
  styleUrl: './regras.component.scss'
})
export class RegrasComponent {

}
