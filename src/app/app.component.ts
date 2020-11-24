import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/authService/auth.service';
import { HttpService } from './core/services/httpService/http.service';
import { IUserInfo } from './core/interfaces/user-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  authEnable: boolean;
  user: IUserInfo;

  title = 'rem-spa';

  constructor(private auth: AuthService, private http: HttpService) {}

  ngOnInit(): void {
    this.http.authSettings.subscribe(authEnable => {
      this.authEnable = authEnable?.isAuthenticationEnabled;
    });

    this.auth.currentUser.subscribe(user => {
      this.user = user;
    });
  }
}
