import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './shared/not-found.component';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { RoutingGuard } from './routing.guard';

const routes: Routes = [
  {
    path: 'timetable',
    loadChildren: () => import('./shared/timetable/timetable.module').then(m => m.TimetableModule),
    canActivate: [RoutingGuard]
   },
  {
    path: 'gallery',
    loadChildren: () => import('./shared/gallery/gallery.module').then(m => m.GalleryModule),
    canActivate: [RoutingGuard]
  },
  { path: '', component: MainPageComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RoutingGuard],
})
export class AppRoutingModule { }
