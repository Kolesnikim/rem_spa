import { Component, OnInit } from '@angular/core';
import { PerformanceService } from '../../services/performanceService/performance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.less']
})
export class PerformanceComponent implements OnInit {
  performanceData: any;
  constructor(private performance: PerformanceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params =>
      this.performanceData = this.performance.fetchPerformance(params.id));
  }

  postComment(data): void {
    this.performanceData.comments.push({...data, date: Date.now(), photo: 'assets/photo.jpg'});
  }
}
