import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ContattiComponent } from './contatti.component';

const routes: Routes = [
  {
    path: '',
    component: ContattiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContattiRoutingModule {}
