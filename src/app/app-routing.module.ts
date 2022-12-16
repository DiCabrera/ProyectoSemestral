import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(() => redirectLoggedInTo(['/home'])),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'conversor',
    loadChildren: () =>
      import('./pages/conversor/conversor.module').then(
        (m) => m.ConversorPageModule
      ),
  },
  {
    path: 'clima',
    loadChildren: () =>
      import('./pages/clima/clima.module').then((m) => m.ClimaPageModule),
  },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./pages/perfil/perfil.module').then((m) => m.PerfilPageModule),
  },
  {
    path: 'registrapp',
    loadChildren: () =>
      import('./pages/registrapp/registrapp.module').then(
        (m) => m.RegistrappPageModule
      ),
  },
  {
    path: 'page404',
    loadChildren: () =>
      import('./pages/page404/page404.module').then((m) => m.Page404PageModule),
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
