import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PerformanceService {
  constructor(private http: HttpClient) {}

  public fetchPerformance(id): any {
    return {
      title: 'Новое выступление про одну из секций конференции',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae, consectetur cupiditate dignissimos expedita illo, ipsam, iste itaque laudantium numquam odit placeat quia quo rem sequi unde. Ab aliquam amet cumque dolorem eligendi iusto labore mollitia similique suscipit! Debitis, exercitaLorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae, consectetur cupietur adipisicing elit.Beatae, consectetur cupiditate dignissimos expedita illo, ipsam, iste itaque laudantium numquam odit placeat quia quo rem sequi unde. Ab aliquam amet cumque dolorem eligendi iusto labore mollitia similique suscipit! Debitis, exercitaLorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae, consectetur cupiditate dignissimos expedita illo, ipsam, iste itaque laudantium numquam odit placeat quia quo rem sequi unde. Ab aliquam amet cumque dolorem eligendi iusto labore mollitia similique suscipit! Debitis, exercitaLorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae, consectetur cupiditate dignissimos expedita illo, ipsam, iste itaque laudantium numquam odit placeat quia quo rem sequi unde. Ab aliquam amet cumque dolorem eligendi iusto labore mollitia similique suscipit! Debitis, exercitaLorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae, consectetur cupiditate dignissimos expedita illo, ipsam, iste itaque laudantium numquam odit placeat quia quo rem sequi unde. Ab aliquam amet cumque dolorem eligendi iusto labore mollitia similique suscipit! Debitis, exercita',
      startTime: '12:00',
      endTime: '13:00',
      organization: 'Sberbank',
      name: 'Иван Иванов',
      photo: '/photo.jpg',
      topic: 'DevOps',
      comments: [
        {username: 'Петр Максимов', comment: 'Очень даже неплохо', date: Date.now(), photo: 'assets/photo.jpg'},
        {username: 'Петр Максимов', comment: 'Очень даже неплохо', date: Date.now(), photo: 'assets/photo.jpg'},
        {username: 'Петр Максимов', comment: 'Очень даже неплохо', date: Date.now(), photo: 'assets/photo.jpg'},
        {username: 'Петр Максимов', comment: 'Очень даже неплохо', date: Date.now(), photo: 'assets/photo.jpg'},
      ]
    };
  }

  public postPerformanceComment(id): any {
    return [];
  }


}
