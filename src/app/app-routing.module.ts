import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ActiveModulesGuard } from './core/guards/activeModules.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './core/components/login/login.component';
import { AuthEnableGuard } from './core/guards/auth-enable.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthEnableGuard]
  },
  {
    path: 'photogallery',
    loadChildren: () => import('./features/gallery/gallery.module')
      .then(m => m.GalleryModule),
    canActivate: [AuthGuard, ActiveModulesGuard]
  },
  {
    path: 'schedule',
    loadChildren: () => import('./features/timetable/timetable.module')
      .then(m => m.TimetableModule),
    canActivate: [AuthGuard, ActiveModulesGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/user/user.module')
      .then((m) => m.UserModule),
    canActivate: [AuthGuard, ActiveModulesGuard]
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./features/sponsors/sponsors.module').then(m => m.SponsorsModule),
    canActivate: [AuthGuard, ActiveModulesGuard]
  },
  { path: '',
  loadChildren: () => import('./features/main-page/main-page.module')
    .then(m => m.MainPageModule),
  canActivate: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ActiveModulesGuard, AuthGuard],
})
export class AppRoutingModule { }
