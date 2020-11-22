import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from '../../../../core/services/authService/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: string;
  loading: boolean;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null,
        [Validators.required, Validators.minLength(6)]
      ),
      password: new FormControl(null,
        [Validators.required, Validators.minLength(6)])
    });
  }

  submit($event: any): void {
    $event.preventDefault();
    if (this.form.invalid) { return; }

    this.loading = true;

    const { login, password } = this.form.value;

    this.auth.login(login, password).pipe(first()).subscribe(
      () => {
        this.loading = false;
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
