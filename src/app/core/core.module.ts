import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/authService/auth.service';
import { HttpSettingsService } from './services/httpService/http-settings.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { ActiveModulesGuard } from './guards/activeModules.guard';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConferenceService } from './services/conferenceService/conference.service';
import { AppSettingsService } from './services/appSettingsService/appSettings.service';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthEnableGuard } from './guards/auth-enable.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatSnackBarModule,
    CoreRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HttpClientModule
  ],
  providers: [
    AuthService,
    HttpSettingsService,
    ConferenceService,
    AppSettingsService,
    ActiveModulesGuard,
    AuthGuard,
    AuthEnableGuard, {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }]
})
export class CoreModule {}
