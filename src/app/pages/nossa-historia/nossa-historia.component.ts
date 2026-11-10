import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { SimpleNavBarComponent } from '../../components/navbar/simple-nav-bar.component';
import { PlayerComponent } from '../../components/player/player.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-nossa-historia',
  imports: [TimelineComponent, SimpleNavBarComponent, FooterComponent, PlayerComponent],
  templateUrl: './nossa-historia.component.html',
  styleUrl: './nossa-historia.component.scss'
})
export class NossaHistoriaComponent {

}
