import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerformance } from '../../interfaces/performance';
import { ApiService } from '../../../../core/services/apiService/api.service';

@Injectable()
export class PerformanceService {

  constructor(private apiService: ApiService) {}

  /**
   * Метод, отвечающий за запрос данных о выступлении в зависимости от идентификатора,
   * переданного в качестве параметра
   */
  public fetchPerformance(id: number): Observable<IPerformance> {
    return this.apiService.get<IPerformance>(`schedule/session/${id}`);
  }
}
