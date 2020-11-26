import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/authService/auth.service';
import { HttpSettingsService } from './core/services/httpService/http-settings.service';
import { IUserInfo } from './core/interfaces/user-info';
import { IAuthEnable } from './core/interfaces/auth-enable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  authSettings: IAuthEnable;
  user: IUserInfo;

  title = 'rem-spa';

  constructor(private auth: AuthService, private http: HttpSettingsService) {}

  ngOnInit(): void {
    this.http.getAuthEnable.subscribe(settings => this.authSettings = settings);
    this.auth.currentUserValue.subscribe(user => this.user = user);
  }
}
