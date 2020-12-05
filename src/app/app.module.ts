import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HelloWorldModule } from './features/hello-world/hello-world.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
import { HttpSettingsService } from './core/services/httpService/http-settings.service';
import { ConferenceService } from './core/services/conferenceService/conference.service';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';


registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HelloWorldModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      }
    },
    { provide: APP_INITIALIZER, useFactory: init, deps: [HttpSettingsService, ConferenceService], multi: true},
    { provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Функция, выщываемая при инициализации приложения
 */
export function init(http: HttpSettingsService, conference: ConferenceService): () => void {
  return () => {

    http.fetchAuthEnable().subscribe();
    conference.fetchConference().subscribe();
  };
}

