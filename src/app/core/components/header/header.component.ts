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
  menuItems: Observable<ActiveModule[]>;
  menuPaths: string[];
  language: string;
  isAuthenticated: boolean;
  isAuthEnabled: boolean;

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

  /**
   * присваивает список элементов меню
   */

}
