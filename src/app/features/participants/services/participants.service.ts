import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/apiService/api.service';
import { Participant } from '../models/participant.model';
import { Participants } from '../models/interfaces/partisipants.interface';
import { ParticipantRole } from '../models/interfaces/participantRole.interface';
import { Session } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  constructor(private apiService: ApiService) { }

  /**
   * Получение списка ролей для конкретной конференции
   * @param id - идентификатор конференции
   * @returns массив объектов
   */
  public getAllParticipantsRoles(id: number): Observable<ParticipantRole[]> {
    return this.apiService.get<ParticipantRole[]>(`participant/get-all-roles-for-conf/${id}`);
  }

  /**
   * Получить список участников по выбранной роли
   */
  getParticipantsByRole(idConference: number, role: ParticipantRole, offset: number, count: number): Observable<Participant[]> {
    const result = this.apiService.get<Participants>(`participant/get-users-by-role-for-conf/${idConference}?offset=${offset}&count=${count}&RoleId=${role.id}`);
    return result.pipe(map((data) => {
      return data.entities;
    }));
  }

  /**
   * Получить подробную информацию о представители роли
   * @param id -идентификатор представителя
   */
  getParticipantById(id: number): Observable<Participant> {
    return this.apiService.get<Participant>(`participant/${id}`);
  }

  /**
   * Получить список докладов участника
   * @param id - идентификатор участника
   */
  getParticipantSessions(id: number): Observable<Session[]> {
    return this.apiService.get<Session[]>(`participant/${id}/sessions`);
  }
}
