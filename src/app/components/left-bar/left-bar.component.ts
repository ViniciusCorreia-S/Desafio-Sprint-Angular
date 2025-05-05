import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  imports: [ CommonModule ],
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.css'
})
export class LeftBarComponent {

  barButton: boolean = false;
  openBar() {

    this.barButton = true;

    const leftBar = document.querySelector('.left-bar') as HTMLElement;
  }

  closeBar() {
    this.barButton = false;

    const leftBar = document.querySelector('.left-bar') as HTMLElement;
  }

  constructor(private router: Router) {
  }


  home( ) {
    this.router.navigate(['/home']);
  }
  
  dashboard() {
    this.router.navigate(['/dashboard']);
  }
}
