import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';

import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule
  ]
})
export class AuthModule { }
