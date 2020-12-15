import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/apiService/api.service';
import { InterestingPlace } from '../models/interesting-place.model';

@Injectable({
  providedIn: 'root'
})
export class InterestingPlacesService {

  constructor(private apiService: ApiService) {}

/**
 * Получить все интересные места
 * @param id -id конференции
 * @return  -InterestingPlace[]- массив интересных мест
 */
  public getInterestingPlaces(id: number): Observable<InterestingPlace[]> {
    return this.apiService.get<InterestingPlace[]>(`interesting-place/by-conference-id/${id}`);
  }

}
