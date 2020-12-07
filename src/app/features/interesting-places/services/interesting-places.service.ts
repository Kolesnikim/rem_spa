import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/apiService/api.service';
import { InterestingPlace } from '../models/interesting-place.model';
import { InterestingPlaces } from '../models/interesting-places.interface';

@Injectable({
  providedIn: 'root'
})
export class InterestingPlacesService {

  constructor(private apiService: ApiService) {}

  public getInterestingPlaces(id: number): Observable<InterestingPlace[]> {
    const result = this.apiService.get<InterestingPlaces>(`interesting-place/by-conference-id/${id}`);
    return result.pipe(map(data =>  data.entities));
  }

}
