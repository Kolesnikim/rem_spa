import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/apiService/api.service';
import { Participant } from '../models/participant.model';
import { ParticipantRole } from '../models/participantRole.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  constructor(private apiService: ApiService) { }

  /**
   * Получение списка ролей
   * @returns массив объектов
   */

  getAllParticipantsRoles(): Observable<ParticipantRole[]> {
    return this.apiService.get('/participant/get-all-roles').pipe(
      map((data: any) => {
        return data as ParticipantRole[];
      }));
  }

  isRoleEmpty(role: ParticipantRole): Observable<boolean> {
    return this.getParticipantsByRole(role, 0, 1).pipe(
      map((participants: Participant[]) => participants.length === 0)
    );
  }

/**
 * Получить список участников по роли
 */
  getParticipantsByRole(role: ParticipantRole, offset: number, count: number): Observable<Participant[]> {
    const result = this.apiService.get(`/participant/get-users-by-role?count=25&RoleId=${role.id}`);
    return result.pipe(map((data: any) => {
      return data.entities;
    }));
  }

  /**
   * Получить подробную информацию о представители роли
   * @param id -идентификатор представителя
   */
  getParticipantById(id: number): Observable<Participant> {
    return this.apiService.get(`/participant/${id}`);
  }
}
