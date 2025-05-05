import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { LeftBarComponent } from '../../components/left-bar/left-bar.component';
import { UserComponent } from '../../components/user/user.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormComponent } from '../../components/form/form.component';

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
  // dataUser!: any

  // constructor(private form : FormComponent) {}

  // ngOnInit() {
  //   this.dataUser = this.form.user.nome
  // }


  // user!: string;
  // url = "http://localhost:3001";

  // constructor(private http: HttpClient) {}
  
  // dataUser() {
  //   return this.http.get(`${this.url}/login`)
  // }
  
  // ngOnInit () {
  //   this.dataUser();
    
  //   this.dataUser().subscribe((dados: any) => {
  //     if(dados) {
  //       this.user = dados.nome;
  //       console.log(this.user);
  //     }
  //   })
  // }
}
