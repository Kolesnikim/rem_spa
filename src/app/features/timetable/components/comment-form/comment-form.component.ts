import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../../core/services/authService/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IComment } from '../../interfaces/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.less']
})
export class CommentFormComponent implements OnInit {
  form: FormGroup;
  username: string;
  error: string;
  loading: boolean;

  @Output() FormSubmit: EventEmitter<IComment> = new EventEmitter();

  constructor(private auth: AuthService) {
    this.auth.currentUserSubject$.subscribe(
      user => this.username = user.fullName
    );
  }

  /**
   * При инициализации компонента инициализируется форма
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.username, Validators.required),
      text: new FormControl(null, Validators.required),
      number: new FormControl(0, Validators.required),
    });
  }

  /**
   * Метод, вызываемый при отправке формы.
   * Эмиттит событие в родительский компонент
   */
  public submitForm($event: Event): void {
    $event.preventDefault();

    // tslint:disable-next-line:variable-name
    const { name, text, number } = this.form.value;
    const emittedComment = this.username ? { text, number } : { name, text, number };
    this.FormSubmit.emit(emittedComment);
  }
}
