import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProgramComponent } from './program/program.component';
import { NotFoundComponent } from './not-found.component';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ProgramComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    GalleryModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    NotFoundComponent,
    GalleryModule
  ]
})
export class CoreModule { }
