import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { GalleryComponent } from './core/gallery/gallery.component';
import { MainPageComponent } from './core/main-page/main-page.component';
import { NotFoundComponent } from './core/not-found.component';
import { ProgramComponent } from './core/program/program.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
