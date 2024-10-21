import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContattiComponent } from './contatti.component';
import { SharedComponentModule } from '../../shared/shared-component/shared-component.module';
import { ContattiRoutingModule } from './contatti-routing.module';

@NgModule({
  declarations: [ContattiComponent],
  imports: [CommonModule, SharedComponentModule, ContattiRoutingModule],
})
export class ContattiModule {}
