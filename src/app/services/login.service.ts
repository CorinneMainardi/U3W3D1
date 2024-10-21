import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login: boolean = false;

  getLogin() {
    this.login = !this.login; //ogni volta che uso questo metodo, il valore login cambia da true a false e viceversa
  }
}
