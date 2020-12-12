import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentsService } from '../../services/documents.service';
import { DocumentsMaterial } from '../../models/documentsMaterial.model';

@Component({
  selector: 'app-materials',
  template: `
<div>
  <ul class='documents_list-wrapper'>
    <li *ngFor="let item of materials " class='list_item'>
      <a class='documents_link' href={{item.link}} >
        <mat-icon aria-hidden="false" class='tag_icon'>forward</mat-icon>
        <p>{{item.name}} </p>
      </a>
    </li>
  </ul>
</div>
`,
  styleUrls: ['./documents-materials.component.scss']
})
export class DocumentsMaterialsComponent implements OnInit {

  public activeTabName = '';
  public tagName = '';
  public materials: DocumentsMaterial[] = [];
  public itemsPerPage = 25;

  constructor(private documentsService: DocumentsService, private route: ActivatedRoute) {
    this.activeTabName = this.route.snapshot.params.tab;
    this.tagName = this.route.snapshot.params.name;
  }

  ngOnInit(): void {

    this.documentsService.getDocumentsMaterials(this.activeTabName, this.tagName, 0, this.itemsPerPage)
      .subscribe((items: DocumentsMaterial[]) => {
        this.materials = items;
        console.log(this.materials);
      });

  }

}
