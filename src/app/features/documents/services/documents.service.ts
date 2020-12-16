import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/apiService/api.service';
import { DocumentsTab } from '../models/documentsTab.model';
import { DocumentsTag } from '../models/documentsTag.model';
import { DocumentsMaterial } from '../models/documentsMaterial.model';
import { PageInterface } from '../../../core/interfaces/pageInterface';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private apiService: ApiService) { }

 /**
  * Получение списка вкладок в документах
  * @returns массив объектов DocumentsTab
  */
  public getDocumentsTabs(): Observable<DocumentsTab[]> {
    return this.apiService.get<DocumentsTab[]>('material/tabs');
  }

 /**
  * Получение списка тегов по названию вкладки
  * @returns массив объектов DocumentsTag
  */
  public getDocumentsTags(tab: string): Observable<DocumentsTag[]> {
    return this.apiService.get<DocumentsTag[]>(`material/tags-by-tab?tab=${encodeURIComponent(tab)}`);
  }

  /**
   * Подучить материалы по вкладке и тегу
   */
  public getDocumentsMaterials(tab: string, tag: string, offset: number, count: number): Observable<DocumentsMaterial[]> {
    const result = this.apiService.get<PageInterface<DocumentsMaterial>>(`material/materials-by-tab-and-tag?tab=${encodeURIComponent(tab)}&tag=${encodeURIComponent(tag)}&offset=${offset}&count=${count}`);
    return result.pipe(map(data => {
      return  data.entities;
    }));

  }

}
