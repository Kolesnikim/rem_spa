import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './shared/not-found.component';
import { MainPageComponent } from './shared/main-page/main-page.component';

const routes: Routes = [
  { path: 'timetable', loadChildren: () => import('./shared/timetable/timetable.module').then(m => m.TimetableModule) },
  { path: 'gallery', loadChildren: () => import('./shared/gallery/gallery.module').then(m => m.GalleryModule) },
  // { path: '', loadChildren: () => import('./shared/main-page/main-page.module').then(m => m.MainPageModule) },
  { path: '', component: MainPageComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
