import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Performance } from '../../interfaces/performance';
import { Comment } from '../../interfaces/comment';
import { ApiService } from '../../../../core/services/apiService/api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PerformanceService {

  constructor(private apiService: ApiService) {}

  /**
   * Метод, отвечающий за запрос данных о выступлении в зависимости от идентификатора,
   * переданного в качестве параметра
   */
  public fetchPerformance(id: number): Observable<Performance> {
    return this.apiService.get<Performance>(`schedule/session/${id}`);
  }

  /**
   * Метод, отвечающий за отправку анонимного комментария на сервер
   * При успешном выполнении запрашивает обновленные данные о выступлении
   */
  public postAnonymousComment(comment: Comment): Observable<void> {
    const id = comment.sessionId;
    return this.apiService.post<Comment>('schedule/post-anonymous-comment-to-session', comment)
      .pipe(map(() => {
      this.fetchPerformance(id).subscribe();
    }));
  }

  /**
   * Метод, отвечающий за отправку комментария на сервер от авторизованного пользователя
   * При успешном выполнении запрашивает обновленные данные о выступлении
   */
  public postComment(comment: Comment): Observable<void> {
    const id = comment.sessionId;
    return this.apiService.post<Comment>('schedule/post-comment-to-session', comment)
      .pipe(map(() => {
        this.fetchPerformance(id).subscribe();
      }));
  }
}
