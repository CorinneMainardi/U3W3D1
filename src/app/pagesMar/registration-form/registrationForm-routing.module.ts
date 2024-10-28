import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { RegistrationFormComponent } from './registration-form.component';

const routes: Routes = [
  {
    path: 'registration-form',
    component: RegistrationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationFormRoutingModule {}
