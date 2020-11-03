import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProgramComponent } from './program/program.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ProgramComponent,
    GalleryComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
