import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/apiService/api.service';
import { LogoSponsor } from '../models/logoSponsor.model';
import { Sponsor } from '../models/sponsor.model';
@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor(private apiService: ApiService) { }

  /**
   * Получить список логотипов спонсоров
   * id - идентификатор конференции
   */
  public getAllSponsorsLogo(id: number): Observable<LogoSponsor[]> {
    return this.apiService.get<LogoSponsor[]>(`sponsor/by-conference-id/${id}`);
  }

  /**
   * получить полгую информацию о спонсоре по его id
   */
  public getSponsorInfo(id: number): Observable<Sponsor>{
    return this.apiService.get<Sponsor>(`sponsor/${id}`);
  }
}
