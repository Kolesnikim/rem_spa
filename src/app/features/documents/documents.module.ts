import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { MatIconModule } from '@angular/material/icon';
import { DocumentsMaterialsComponent } from './components/materials/documents-materials.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [DocumentsComponent, DocumentsMaterialsComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    MatIconModule,
    InfiniteScrollModule,
  ]
})
export class DocumentsModule { }
