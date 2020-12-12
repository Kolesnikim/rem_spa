import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerformance } from '../../interfaces/performance';
import { IComment } from '../../interfaces/comment';
import { ApiService } from '../../../../core/services/apiService/api.service';
import { map } from 'rxjs/operators';

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

  /**
   * Метод, отвечающий за отправку анонимного комментария на сервер
   * При успешном выполнении запрашивает обновленные данные о выступлении
   */
  public postAnonymousComment(comment: IComment): Observable<void> {
    const id = comment.sessionId;
    return this.apiService.post<IComment>('schedule/post-anonymous-comment-to-session', comment)
      .pipe(map(() => {
      this.fetchPerformance(id).subscribe();
    }));
  }

  /**
   * Метод, отвечающий за отправку комментария на сервер от авторизованного пользователя
   * При успешном выполнении запрашивает обновленные данные о выступлении
   */
  public postComment(comment: IComment): Observable<void> {
    const id = comment.sessionId;
    return this.apiService.post<IComment>('schedule/post-comment-to-session', comment)
      .pipe(map(() => {
        this.fetchPerformance(id).subscribe();
      }));
  }
}
