import {Component, Input} from '@angular/core';
import {PerformanceService} from '../../services/performanceService/performance.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})

export class CommentsComponent {
  constructor(private performance: PerformanceService) {
  }

  @Input() comments: any[];
}

