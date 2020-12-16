import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ActiveModulesGuard } from './core/guards/activeModules.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./features/gallery/gallery.module').then(m => m.GalleryModule),
    canActivate: [AuthGuard, ActiveModulesGuard]
  },
  {
    path: 'timetable',
    loadChildren: () => import('./features/timetable/timetable.module').then(m => m.TimetableModule),
    canActivate: [AuthGuard, ActiveModulesGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.module')
      .then((m) => m.UserModule),
    canActivate: [ActiveModulesGuard]
  },
  {
    path: 'participants',
    loadChildren: () => import('./features/participants/participants.module')
      .then(m => m.ParticipantsModule),
    canActivate: [AuthGuard, ActiveModulesGuard]
  },
  {
    path: 'interestingPlaces',
    loadChildren: () => import('./features/interesting-places/interesting-places.module')
      .then(m => m.InterestingPlacesModule),
    canActivate: [AuthGuard, ActiveModulesGuard]
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./features/sponsors/sponsors.module').then(m => m.SponsorsModule),
    canActivate: [AuthGuard, ActiveModulesGuard]
  },
  { path: 'documents',
   loadChildren: () => import('./features/documents/documents.module').then(m => m.DocumentsModule),
   canActivate: [AuthGuard, ActiveModulesGuard]
  },
  { path: '',
  loadChildren: () => import('./features/main-page/main-page.module').then(m => m.MainPageModule),
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
