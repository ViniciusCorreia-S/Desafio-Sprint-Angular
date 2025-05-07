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
    let data: any = sessionStorage.getItem('dadosUsuario');
    this.Usuario = JSON.parse(data);
    console.log(this.Usuario)
  }

  constructor(private router : Router) { }

  logout() {
    sessionStorage.removeItem('dadosUsuario')
    this.router.navigate(['/login']);
  }

  // constructor(private http: HttpClient) { }

  // Usuario: any;
  // urlLocalStorage: string = "http://localhost:4200"

  // dadosUsuario() {
  //   return this.http.get(`${this.urlLocalStorage}`)
  // }

  // ngOnInit() {
  //   this.dadosUsuario().subscribe( {
  //     next: (dadosUser: any) => {
  //       this.Usuario = dadosUser;
  //       console.log(dadosUser)
  //     }
  //   })
  // }
}
