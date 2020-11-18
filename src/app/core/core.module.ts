import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {AuthService} from './services/authService/auth.service';
import {HttpService} from './services/httpService/http.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {AuthGuard} from './guards/auth.guard';
import {ActiveModulesGuard} from './guards/activeModules.guard';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HttpClientModule
  ],
  providers: [AuthService, HttpService, AuthGuard, ActiveModulesGuard, {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }]
})
export class CoreModule { }
