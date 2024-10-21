import { SharedComponentModule } from './../../shared/shared-component/shared-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiSiamoComponent } from './chi-siamo.component';
import { ChiSiamoRoutingModule } from './chi-siamo-routing.module';

@NgModule({
  declarations: [ChiSiamoComponent],
  imports: [CommonModule, SharedComponentModule, ChiSiamoRoutingModule],
})
export class ChiSiamoModule {}
