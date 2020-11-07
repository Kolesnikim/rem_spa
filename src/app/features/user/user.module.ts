import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { AuthInterceptor } from './classes/auth.interceptor';
import { AuthGuard } from './classes/auth.guard';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [LoginComponent, ProfileComponent],
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
  providers: [AuthService, HttpService, AuthGuard, [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]]
})
export class UserModule { }
