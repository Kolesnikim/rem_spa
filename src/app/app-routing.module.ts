import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MainPageComponent } from './core/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  // { path: 'about', component: AboutComponent},
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
