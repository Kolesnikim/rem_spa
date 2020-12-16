import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/authService/auth.service';
import {AppSettingsService} from '../../services/appSettingsService/appSettings.service';
import {ConferenceService} from '../../services/conferenceService/conference.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error  = '';
  loading = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private appSettings: AppSettingsService,
    private conference: ConferenceService) {

    this.form = new FormGroup({
      login: new FormControl(null,
        [Validators.required, Validators.minLength(6)]
      ),
      password: new FormControl(null,
        [Validators.required, Validators.minLength(6)])
    });
   }

  ngOnInit(): void {}

  /**
   * Метод, вызывемый при подтверждении формы отправки логина и пароля
   * При успшном входе запрашиваются настройки приложения
   */
  public submit($event: Event): void {
    $event.preventDefault();
    if (this.form.invalid) { return; }

    this.loading = true;

    const { login, password } = this.form.value;

    this.auth.login(login, password).subscribe(
      () => {
        this.loading = false;
        this.conference.fetchConference().subscribe((conference) => {
          this.appSettings.fetchApplicationSettings(conference.id).subscribe();
        });
      },
      () => {
        this.loading = false;
        this.error = 'Неверный логин или пароль';
        setTimeout(() => {
          this.error = '';
        }, 3000);
      },
    );
    }
  }
