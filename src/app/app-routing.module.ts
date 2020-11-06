import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { RoutingGuard } from './core/routing.guard';

const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./features/gallery/gallery.module').then(m => m.GalleryModule),
    canActivate: [RoutingGuard]
  },
  {
    path: 'timetable',
    loadChildren: () => import('./features/timetable/timetable.module').then(m => m.TimetableModule),
    canActivate: [RoutingGuard]
  },
  { path: '', component: MainPageComponent },
  // { path: '', loadChildren: () => import('./features/main-page/main-page.module').then(m => m.MainPageModule) },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RoutingGuard],
})
export class AppRoutingModule { }
