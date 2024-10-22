import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss',
})
export class RegistrationFormComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      cognome: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
      gender: this.fb.control(''),
      img: this.fb.control(''),
      biografia: this.fb.control(''),
      passwordData: this.fb.group({
        password: this.fb.control('', [Validators.required]),
        confermaPassword: this.fb.control('', [Validators.required]),
      }),
    });
  }
  sendForm() {
    this.getMessage('passwordData');
  }
  correctPassword = (formC: FormControl): ValidationErrors | null => {
    if (this.form.password !== this.form.confermaPassword) {
      return { invalid: true, message: 'password non coincidenti' };
    }
    return null;
  };
  getMessage(fieldName: string) {
    return this.form.get(fieldName)?.errors!['message']; //mi dovrebbe dare il messaggio di erorre di correct password
  }

  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid;
  }
  isTouched(fieldName: string) {
    return this.form.get(fieldName)?.touched;
  }
  isInValidTouched(fieldName: string) {
    return !this.isValid(fieldName) && this.isTouched(fieldName);
  }
}
