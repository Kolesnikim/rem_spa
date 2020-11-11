import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HelloWorldModule } from './features/hello-world/hello-world.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
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
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
