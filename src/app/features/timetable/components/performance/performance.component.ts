import { Component, OnInit } from '@angular/core';
import { PerformanceService } from '../../services/performanceService/performance.service';
import { ActivatedRoute } from '@angular/router';
import { Performance } from '../../interfaces/performance';
import { Comment } from '../../interfaces/comment';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  performanceData: Performance | undefined;
  id = 0;

  constructor(
    private performanceService: PerformanceService,
    private router: ActivatedRoute) { }

  /**
   * Хук, срабатывающий при старте и подписывающийся
   * на запрос данных о выступлении
   */
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.performanceService.fetchPerformance(params.id).subscribe(performance => {
        this.performanceData = performance;
        this.performanceData.comments = this.performanceData.comments
          .sort((a, b) => {
            const dateOne = a?.dateTime ?? Date.now();
            const dateTwo = b?.dateTime ?? Date.now();
            return new Date(dateOne).getTime() - new Date(dateTwo).getTime();
          });
        this.id = performance.id;
      });
    });
  }

  /**
   * Метод, вызываемый при отправке при подтверждении формы
   * При отправке формы подписывается на изменения в данных выступления
   */
  public postComment(data: Comment): void {
    const response = {...data, sessionId: this.id};

    if (response.name) {
      this.performanceService.postAnonymousComment(response).subscribe((res) => {
        this.performanceData?.comments.push(res);
      });
    } else {
      this.performanceService.postComment(response).subscribe((res) => {
        this.performanceData?.comments.push(res);
      });
    }
  }
}
