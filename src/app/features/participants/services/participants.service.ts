import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../gallery/services/apiService/api.service';

import { Participant } from '../models/participant.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  constructor(private apiService: ApiService) { }

/**
 * Получить список участников
 */
  getAllParticipants(): Observable<Participant[]> {
    const result = this.apiService.get(`/participant/get-all-users?count=100`);
    return result.pipe(map((data: any) => {
      return data as Participant[];
    }));
  }
}
