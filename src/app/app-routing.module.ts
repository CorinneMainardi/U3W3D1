import { LoginFormModule } from './pagesMar/login-form/login-form.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contatti',
    loadChildren: () =>
      import('./pages/contatti/contatti.module').then((m) => m.ContattiModule),
    canActivate: [AuthGuard],
  }, //questo metodo canA lo posso mettere o qui dentro a contatti oppure dentro al routing module del componente a cui voglio bloccare l'accesso
  {
    path: 'chi-siamo',
    loadChildren: () =>
      import('./pages/chi-siamo/chi-siamo.module').then(
        (m) => m.ChiSiamoModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pagesMar/login-form/login-form.module').then(
        (m) => m.LoginFormModule
      ),
  }, //questo metodo canA lo posso mettere o qui dentro a contatti oppure dentro al routing module del componente a cui voglio bloccare l'accesso
  {
    path: 'registration',
    loadChildren: () =>
      import('./pagesMar/registration-form/registration-form.module').then(
        (m) => m.RegistrationFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
