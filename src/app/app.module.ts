import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HelloWorldModule } from './features/hello-world/hello-world.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import { HttpSettingsService } from './core/services/httpService/http-settings.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HelloWorldModule,
    BrowserAnimationsModule,
    CoreModule,
    InfiniteScrollModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      }
    },
    { provide: APP_INITIALIZER, useFactory: init, deps: [HttpSettingsService], multi: true},
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);

/**
 * Функция, выщываемая при инициализации приложения
 */
export function init(http: HttpSettingsService): () => void {
  return () => {
    http.fetchAuthEnable().subscribe();
  };
}

