import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [ CommonModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  Usuario!: Usuario
  userBtn: boolean = false;

  openUser() {
    this.userBtn = !this.userBtn;
  }

  ngOnInit() {
    
    if (localStorage.getItem('autoLogin')) {
      let data: any = localStorage.getItem('dadosUsuario');
      this.Usuario = JSON.parse(data);
    } else {
      let data: any = sessionStorage.getItem('dadosUsuario');
      this.Usuario = JSON.parse(data);
    }
  }

  constructor(private router : Router) { }

  logout() {
    sessionStorage.clear()
    localStorage.clear()
    this.router.navigate(['/login']);
  }
}
