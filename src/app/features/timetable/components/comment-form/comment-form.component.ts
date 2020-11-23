import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/authService/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.less']
})
export class CommentFormComponent implements OnInit {
  nameInput = true;
  form: FormGroup;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    if (!this.auth.currentUserValue) {
      this.nameInput = true;
    }

    this.form = new FormGroup({
      name: this.nameInput ? new FormControl(null, Validators.required) : null,
      comment: new FormControl(null, Validators.required)
    });
  }

}
