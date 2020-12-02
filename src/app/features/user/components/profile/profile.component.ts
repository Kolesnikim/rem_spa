import { Component, OnInit } from '@angular/core';
import { HttpSettingsService } from '../../../../core/services/httpService/http-settings.service';
import { AuthService } from '../../../../core/services/authService/auth.service';
import { IUserInfo } from '../../../../core/interfaces/user-info';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  user: IUserInfo;

  constructor(private http: HttpSettingsService, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.currentUserSubject$.subscribe(userInfo => this.user = userInfo);
  }

  logout($event: Event): void {
    $event.preventDefault();
    this.auth.logout().subscribe();
  }
}
