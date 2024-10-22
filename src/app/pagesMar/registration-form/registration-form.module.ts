import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form.component';

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class RegistrationFormModule {}
