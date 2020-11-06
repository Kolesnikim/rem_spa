import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './features/hello-world/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.module')
      .then((m) => m.UserModule),
  },
  {
    path: '',
    component: DashboardComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
