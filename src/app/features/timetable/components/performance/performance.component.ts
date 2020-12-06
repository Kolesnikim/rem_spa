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
      this.performanceService.performance.subscribe(perf => {
        this.performanceData = perf;
      });
    });
  }

  postComment(data): void {
    this.performanceData.comments.push({...data, username: 'Rubius Tests', date: Date.now(), photo: 'assets/photo.jpg'});
  }
}
