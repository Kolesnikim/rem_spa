import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentsService } from '../../services/documents.service';
import { DocumentsMaterial } from '../../models/documentsMaterial.model';

@Component({
  selector: 'app-materials',
  templateUrl: './documents-materials.component.html',
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
    });
  }

  /**
   * Вызов бесконечного скролла
   */
  public onScroll(): void {
    this.documentsService.getDocumentsMaterials(this.activeTabName, this.tagName, this.materials.length, this.itemsPerPage)
      .subscribe((items: DocumentsMaterial[]) => {
        this.materials.push(...items);
      });

  }
}
