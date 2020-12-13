import { Component, OnInit} from '@angular/core';
import { AppSettingsService } from '../../services/appSettingsService/appSettings.service';
import { ActiveModule } from '../../models/active.module';
import { AuthService } from '../../services/authService/auth.service';
import { HttpSettingsService } from '../../services/httpService/http-settings.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [AppSettingsService]
})
export class HeaderComponent implements OnInit {
  public menuItems: Observable<ActiveModule[] | null> | undefined;
  public language = '';
  public isAuthenticated = false;
  public isAuthEnabled = false;

  constructor(
    private auth: AuthService,
    private http: HttpSettingsService,
    private appSettings: AppSettingsService) {
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(auth => this.isAuthenticated = auth);
    this.http.authSettingsSubject$.subscribe(isAuthEnable => {
      this.isAuthEnabled = isAuthEnable;
    });
    this.menuItems = this.appSettings.activatedModulesSubject$;
  }

}
