import { Component, OnInit} from '@angular/core';
import { AppSettingsService } from '../../services/appSettingsService/appSettings.service';
import { ActiveModule } from '../../models/active.module';
import { AuthService } from '../../services/authService/auth.service';
import { HttpSettingsService } from '../../services/httpService/http-settings.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [AppSettingsService]
})
export class HeaderComponent implements OnInit {
  menuItems: ActiveModule[];
  menuPaths: string[];
  language: string;
  isAuth: boolean;
  authEnable: boolean;

  constructor(private routingService: AppSettingsService, private auth: AuthService, private http: HttpSettingsService) {
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(auth => this.isAuth = auth);
    this.http.authSettingsSubject$.subscribe(authEnable => this.authEnable = authEnable);

    this.updateMenuItems();
  }

  /**
   * присваивает список элементов меню
   */
  public updateMenuItems(): void {
    this.menuItems = this.routingService.getAvailableModules();
  }
}
