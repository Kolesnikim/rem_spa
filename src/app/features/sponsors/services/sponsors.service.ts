import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../gallery/services/apiService/api.service';
import { Sponsor } from '../models/sponsor.model';
@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor(private apiService: ApiService) { }

  /**
   * Получить список спонсоров
   */
  getAllSponsirs(): Observable<Sponsor[]> {
    const result = this.apiService.get(`/sponsors/get-all-sponsors?count=10`);
    return result.pipe(map((data: any) => {
      return data.entities;
    }));
  }
}
