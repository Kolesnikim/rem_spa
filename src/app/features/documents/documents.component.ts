import { Component, OnInit } from '@angular/core';
import { DocumentsTag } from './models/documentsTag.model';
import { DocumentsTab } from './models/documentsTab.model';
import { DocumentsService } from './services/documents.service';


@Component({
  selector: 'app-documents',
  template: `
  <div>
    <div class='documents_board'>
      <nav class='documents_nav'>
        <ul class='nav'>
          <li *ngFor="let tab of documentsTabs" class='nav_item'>
            <p [class.nav_link] = "true" [class.active] ="tab === activeTab" (click)='onTabChange(tab)'>{{tab.name}} </p>
          </li>
        </ul>
      </nav>
    </div>
    <div class='documents_list-wrapper'>
          <div *ngFor="let tag of documentsTags" class='list_item'>
            <a class='documents_link' routerLink="material/{{this.activeTab?.name}}/{{tag.name}}" [state]="{data: this.activeTab}">
              <mat-icon aria-hidden="false" class='tag_icon'>folder</mat-icon>
              <p>{{tag.name}} </p>
            </a>
          </div>
    </div>
  </div>
  `,
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
