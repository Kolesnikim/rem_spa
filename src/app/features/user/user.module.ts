import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { MatFormFieldModule } from '@angular/material/form-field';

import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './classes/auth.interceptor';
import { ProvileComponent } from './components/provile/provile.component';


@NgModule({
  declarations: [LoginComponent, ProvileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]]
})
export class UserModule { }
