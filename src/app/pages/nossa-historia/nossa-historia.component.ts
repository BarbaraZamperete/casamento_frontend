import { Component } from '@angular/core';
import { PlayerComponent } from '../../components/player/player.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-nossa-historia',
  imports: [TimelineComponent, PlayerComponent],
  templateUrl: './nossa-historia.component.html',
  styleUrl: './nossa-historia.component.scss'
})
export class NossaHistoriaComponent {

}
