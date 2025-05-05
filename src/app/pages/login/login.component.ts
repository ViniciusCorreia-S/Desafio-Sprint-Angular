import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-login',
  imports: [ FormComponent , BannerComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
