import { Component, OnInit } from '@angular/core';
import { PerformanceService } from '../../services/performanceService/performance.service';
import { ActivatedRoute } from '@angular/router';
import { IPerformance } from '../../interfaces/performance';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.less']
})
export class PerformanceComponent implements OnInit {
  performanceData: IPerformance;
  id: number;

  constructor(
    private performanceService: PerformanceService,
    private router: ActivatedRoute) { }

  /**
   * Хук, срабатывающий при старте и подписывающийся
   * на запрос данных о выступлении
   */
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.performanceService.fetchPerformance(params.id).subscribe();
      this.performanceService.performance.subscribe(performance => {
        this.performanceData = performance;
      });
    });
  }

  /**
   * Метод, вызываемый при отправке при подтверждении формы
   * При отправке формы подписывается на изменения в данных выступления
   */
  public postComment(data): void {
    this.id = this.performanceData.id;
    const response = {...data, sessionId: this.id};

    if (response.name) {
      this.performanceService.postAnonymousComment(response).subscribe(() => {
        this.performanceService.performance.subscribe(performance => {
          this.performanceData = performance;
        });
      });
    } else {
      this.performanceService.postComment(response).subscribe(() => {
        this.performanceService.performance.subscribe(performance => {
          this.performanceData = performance;
        });
      });
    }
  }
}
