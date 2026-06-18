import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {

  @ViewChild('audio', { static: false })
  audioRef!: ElementRef<HTMLAudioElement>;

  tracks = [
    { title: 'Marry Me', src: 'assets/music/Train - Marry Me.mp3' },
    { title: 'Wonderwall', src: 'assets/music/Oasis - Wonderwall.mp3' },
    { title: 'She Keeps Me Warm', src: 'assets/music/Mary Lambert - She Keeps Me Warm.mp3' },
    { title: 'Endless Love', src: 'assets/music/Lionel Richie ft Diana Ross - Endless Love.mp3' },
    { title: 'A Thousand Years', src: 'assets/music/Christina Perri - A Thousand Years.mp3' }
  ]

  currentIndex = 0
  isPlaying = false

  private get audio(): HTMLAudioElement {
    return this.audioRef.nativeElement
  }

  onPlayPause() {
    if (!this.audio) return;

    if (this.audio.paused) {
      this.audio.src = this.tracks[this.currentIndex].src;
      this.audio.play();
      this.isPlaying = true;
    } else {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.tracks.length;
    this.playCurrent();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.tracks.length) % this.tracks.length;

    this.playCurrent();
  }

  playCurrent() {
    const audio = this.audio;

    audio.src = this.tracks[this.currentIndex].src;
    audio.load();
    audio.play();

    this.isPlaying = true;
  }

}