import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { LeftBarComponent } from '../../components/left-bar/left-bar.component';
import { UserComponent } from '../../components/user/user.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [ CardComponent , LeftBarComponent , UserComponent , CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  card: boolean = true;

  closeCard() {
    this.card = false
  }

  dadosUsuario: any;
}
