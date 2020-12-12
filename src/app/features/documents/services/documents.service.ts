import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/apiService/api.service';
import { DocumentsTab } from '../models/documentsTab.model';
import { DocumentsTag } from '../models/documentsTag.model';


@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private apiService: ApiService) { }

 /**
  * Получение списка вкладок документов
  * @returns массив объектов DocumentsTag
  */
  public getDocumentsTabs(): Observable<DocumentsTab[]> {
    return this.apiService.get<DocumentsTab[]>('material/tabs');
  }

  public getDocumentsTags(tab: string): Observable<DocumentsTag[]> {
    return this.apiService.get<DocumentsTab[]>(`material/tags-by-tab?tab=${tab}`);
  }



}
