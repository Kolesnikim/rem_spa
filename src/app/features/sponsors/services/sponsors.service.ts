import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/apiService/api.service';
import { Sponsor } from '../models/sponsor.model';
@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor(private apiService: ApiService) { }

  /**
   * Получить список спонсоров
   */
  getAllSponsorsLogo(id: number): Observable<Sponsor[]> {
    const result = this.apiService.get(`/sponsor/by-conference-id/1`);
    return result.pipe(map((data: any) => {
      return data;
    }));
  }
}
