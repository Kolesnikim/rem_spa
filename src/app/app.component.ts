import {Component, OnInit} from '@angular/core';
import { HttpService } from './core/services/httpService/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'rem-spa';
  constructor(private http: HttpService) {
  }

  ngOnInit(): any {
    this.http.fetchAuthEnable().subscribe();
  }
}
