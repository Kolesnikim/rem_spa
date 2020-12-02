import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HelloWorldModule } from './features/hello-world/hello-world.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpSettingsService } from './core/services/httpService/http-settings.service';
import { AuthService } from './core/services/authService/auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloWorldModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: init, deps: [HttpSettingsService], multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Функция, выщываемая при инициализации приложения
 */
export function init(http: HttpSettingsService): () => void {
  return () => {
    http.fetchAuthEnable().subscribe();
  };
}

