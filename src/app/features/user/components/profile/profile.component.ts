import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../core/services/httpService/http.service';
import { AuthService } from '../../../../core/services/authService/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  user: null;

  constructor(private http: HttpService, private auth: AuthService) { }

  ngOnInit(): void {
    this.user = this.auth.currentUserValue;
  }

  logout($event: Event): void {
    $event.preventDefault();
    this.auth.logout().subscribe();
  }
}
