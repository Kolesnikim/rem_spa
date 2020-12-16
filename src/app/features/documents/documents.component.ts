import { Component, OnInit } from '@angular/core';
import { DocumentsTag } from './models/documentsTag.model';
import { DocumentsTab } from './models/documentsTab.model';
import { DocumentsService } from './services/documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  public documentsTabs: DocumentsTab[] = [];
  public documentsTags: DocumentsTag[] = [];
  public activeTab: DocumentsTab | null = null;

  constructor(private documentsService: DocumentsService) { }

  ngOnInit(): void {

    this.documentsService.getDocumentsTabs().subscribe((tabs: DocumentsTab[]) => {
      this.documentsTabs = tabs;
      if (this.documentsTabs.length > 0) {
        this.onTabChange(this.documentsTabs[0]);
      }
    });

  }

  /**
   * Обработать смену вкладки
   * @param tab название вкладки
   */
  public onTabChange(tab: DocumentsTab): void {
    if (this.activeTab === tab) {
      return;
    }
    this.activeTab = tab;
    this.documentsService.getDocumentsTags(tab.name).subscribe((items: DocumentsTag[]) => {
      this.documentsTags = items;
    });
  }

}
