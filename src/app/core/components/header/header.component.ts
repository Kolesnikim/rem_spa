import { Component, OnInit} from '@angular/core';
import { AppSettingsService } from '../../services/appSettingsService/appSettings.service';
import { ActiveModule } from '../../models/active.module';
import { AuthService } from '../../services/authService/auth.service';
import { HttpSettingsService } from '../../services/httpService/http-settings.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AppSettingsService]
})
export class HeaderComponent implements OnInit {
  public menuItems: ActiveModule[] = [];
  public activeLink = '';
  public menuPaths: string[] = [];
  public isAuthenticated = false;
  public isAuthEnabled = false;

  constructor(private routingService: AppSettingsService, private auth: AuthService, private http: HttpSettingsService) {
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(auth => this.isAuthenticated = auth);
    this.http.authSettingsSubject$.subscribe(isAuthEnable => this.isAuthEnabled = isAuthEnable);

    this.updateMenuItems();

  }

  /**
   * присваивает список элементов меню
   */
  public updateMenuItems(): void {
    this.menuItems = this.routingService.getAvailableModules();
  }
}
