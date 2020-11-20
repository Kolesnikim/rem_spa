import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ActiveModulesGuard } from './core/activeModules.guard';

const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./features/gallery/gallery.module').then(m => m.GalleryModule),
    canActivate: [ActiveModulesGuard]
  },
  {
    path: 'timetable',
    loadChildren: () => import('./features/timetable/timetable.module').then(m => m.TimetableModule),
    canActivate: [ActiveModulesGuard]
  },
  {
    path: 'participants',
    loadChildren: () => import('./features/participants/participants.module').then(m => m.ParticipantsModule),
    canActivate: [ActiveModulesGuard]
  },
  { path: '',
  loadChildren: () => import('./features/main-page/main-page.module').then(m => m.MainPageModule)},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ActiveModulesGuard],
})
export class AppRoutingModule { }
