import { Component, OnInit } from '@angular/core';
import { data } from '../../services/fake-data';
import { PerformanceService } from '../../services/performanceService/performance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.less']
})
export class TimetableComponent implements OnInit {
  displayedColumns: string[] = [];
  newData: any;

  constructor(private performance: PerformanceService, private router: Router) {
  }

  ngOnInit(): void {
    this.newData = data;
  }

  extractTopics(table): string[] {
    return Object.keys(table.performances[0]);
  }

  showPerformance(id): void {
    this.router.navigate(['/timetable', `performance`, `${id}`]);
  }
}


