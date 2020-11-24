import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../../core/services/authService/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.less']
})
export class CommentFormComponent implements OnInit {
  form: FormGroup;
  username: string;
  error: any;
  loading: any;

  @Output() FormSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private auth: AuthService) {
    this.username = this.auth.currentUserValue.fullName;
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      username: new FormControl(this.username, Validators.required),
      comment: new FormControl(null, Validators.required)
    });
  }

  submitForm($event: Event): void {
    $event.preventDefault();
    const { username, comment } = this.form.value;
    this.FormSubmit.emit({username, comment});
  }
}
