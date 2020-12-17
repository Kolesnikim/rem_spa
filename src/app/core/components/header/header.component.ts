import {Component, NgZone, OnInit} from '@angular/core';
import { AppSettingsService } from '../../services/appSettingsService/appSettings.service';
import { ActiveModule } from '../../models/active.module';
import { AuthService } from '../../services/authService/auth.service';
import { HttpSettingsService } from '../../services/httpService/http-settings.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuItems: ActiveModule[] | undefined;
  public visibility = false;
  public language = '';
  public isAuthenticated = false;
  public isAuthEnabled = false;
  public exitItem: ActiveModule | undefined;

  constructor(
    private auth: AuthService,
    private http: HttpSettingsService,
    private appSettings: AppSettingsService,
    private router: Router,
    private zone: NgZone) {
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(auth => this.isAuthenticated = auth);
    this.http.authSettingsSubject$.subscribe(isAuthEnable => {
      this.isAuthEnabled = isAuthEnable;
    });
    this.appSettings.activatedModulesSubject$.subscribe(items => {
      this.menuItems = items?.filter(el => el.Name !== 'Выход');
      this.exitItem = items?.filter(el => el.Name === 'Выход')[0];
    });
  }

  /**
   * Метод, отвечающий за выход из профиля при нажатии кнопки 'Выход'
   */
  public logout($event: Event): void {
    $event.preventDefault();
    this.auth.logout().subscribe();
    this.router.navigateByUrl('login');
  }

  /**
   * Обработка клика по бургеру
   */
  public onBurgerClick(): void{
    this.visibility = !this.visibility;
  }
  /**
   *  Обработка клика оп ItemMenu
   */
  public onClick(): void{
    this.visibility = !this.visibility;
  }
}
