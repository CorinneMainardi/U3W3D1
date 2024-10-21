import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private svcLogin: LoginService) {}
  useLogin() {
    this.svcLogin.getLogin(); //quando clicco sul bottone, vado a usare il metodo uuseLogin che richiama il metodo getLogin dal service
  }
}
