import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsComponent } from './documents.component';
import { DocumentsMaterialsComponent } from './components/materials/documents-materials.component';

const routes: Routes = [
  { path: '', component: DocumentsComponent },
  { path: 'material/:tab/:name', component: DocumentsMaterialsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
