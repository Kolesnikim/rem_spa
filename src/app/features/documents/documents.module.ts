import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { MatIconModule } from '@angular/material/icon';
import { DocumentsMaterialsComponent } from './components/materials/documents-materials.component';


@NgModule({
  declarations: [DocumentsComponent, DocumentsMaterialsComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    MatIconModule
  ]
})
export class DocumentsModule { }
