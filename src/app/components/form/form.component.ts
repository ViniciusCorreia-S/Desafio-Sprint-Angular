import { CommonModule } from '@angular/common';
import { Component }from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { VehiclesService } from '../../service/vehicles.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  imports: [ ReactiveFormsModule , CommonModule , FontAwesomeModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  buttonSubmit: HTMLButtonElement = document.querySelector('#button') as HTMLButtonElement;
  
  name: string = ''
  password!: number;
  passwordVisible: boolean = false;
  
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  loginForm!: FormGroup;
  library: FaIconLibrary = new FaIconLibrary();
  
  constructor (library: FaIconLibrary , private router: Router , private service: VehiclesService , private http: HttpClient) {
    this.loginForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    library.addIcons(faEye, faEyeSlash);
  }

  // get nome() {
  //   return this.loginForm.get('nome')!;
  // }

  // get senha() {
  //   return this.loginForm.get('senha')!;
  // }



  input :HTMLInputElement = document.querySelector('#input') as HTMLInputElement;
  
  resetForm () {
    this.loginForm.reset();
  }
  
  validationErrorNome: boolean = false;
  validationErrorSenha: boolean = false;
  user: Usuario | null = null;
  url = "http://localhost:3001"

  dataUser() {
    return this.http.post(`${this.url}/login`, {"nome": `${this.name}` , "senha": `${this.password}`})
  }

  Submit () {
    console.log('teste')
    this.dataUser().subscribe( {
      next: (dados: any) => {
        this.user= dados;
        console.log(dados)
        localStorage.setItem('dadosUsuario' ,JSON.stringify(this.user))
        this.router.navigate(['/home']);

      }, error: (error) => {
          this.validationErrorNome = true;
          
          setInterval(() => {
            this.validationErrorNome = false;
          },5000);
      }
    })
    //   if(dados) {
    //     this.user = dados;
    //     console.log(dados);
    //     this.router.navigate(['/home']);
    //   }
    // })
    

   

    let data = this.loginForm.value;
    console.table(data);
  }
}