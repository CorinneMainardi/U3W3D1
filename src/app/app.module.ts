import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentModule } from './shared/shared-component/shared-component.module';
import { LoginFormComponent } from './pagesMar/login-form/login-form.component';
import { RegistrationFormComponent } from './pagesMar/registration-form/registration-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
