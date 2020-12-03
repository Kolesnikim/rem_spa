import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/apiService/api.service';
import { Sponsor } from '../models/sponsor.model';
@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor(private apiService: ApiService) { }

  /**
   * Получить список спонсоров
   * id - идентификатор конференции
   */
  public getAllSponsorsLogo(id: number): Observable<Sponsor[]> {
    return this.apiService.get<Sponsor[]>(`sponsor/by-conference-id/${id}`);
  }
}
