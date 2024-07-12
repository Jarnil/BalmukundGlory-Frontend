import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  @ViewChild('videoBg') videoBg!: ElementRef;

  ngAfterViewInit() {
    const videoElement = this.videoBg.nativeElement;
    this.videoBg.nativeElement.muted = true;
    videoElement.play().catch((error: any) => {
      console.error('Video autoplay failed:', error);
    });
  }
}
