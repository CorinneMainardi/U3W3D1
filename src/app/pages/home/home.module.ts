import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedComponentModule } from '../../shared/shared-component/shared-component.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedComponentModule, HomeRoutingModule],
})
export class HomeModule {}
