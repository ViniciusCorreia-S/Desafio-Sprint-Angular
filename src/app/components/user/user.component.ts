import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [ CommonModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userBtn: boolean = false;

  openUser() {
    this.userBtn = !this.userBtn;
  }
}
