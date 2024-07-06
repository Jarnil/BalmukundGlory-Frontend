import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  @ViewChild('videoBg') videoBg!: ElementRef;

  ngAfterViewInit() {
    this.videoBg.nativeElement.muted = true;
  }
}
