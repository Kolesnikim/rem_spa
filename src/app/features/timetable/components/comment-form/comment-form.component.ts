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
  form: FormGroup | undefined;
  username: string | undefined;
  text: string | undefined;
  number: number | undefined;
  error: string | undefined;
  loading: boolean | undefined;

  @Output() FormSubmit: EventEmitter<IComment> = new EventEmitter();

  constructor(private auth: AuthService) {
    this.auth.currentUserSubject$.subscribe(
      user => this.username = user?.fullName
    );
  }

  /**
   * При инициализации компонента инициализируется форма
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.username, Validators.required),
      text: new FormControl(this.text, Validators.required),
      number: new FormControl(this.number, Validators.required),
    });
  }

  /**
   * Метод, вызываемый при отправке формы.
   * Эмиттит событие в родительский компонент
   */
  public submitForm($event: Event): void {
    $event.preventDefault();

    const formObject: IComment = this.form?.value;
    // tslint:disable-next-line:variable-name
    const { name, text, number } = formObject;

    const emittedComment: IComment = this.username
      ? { text, number, sessionId: 0 }
      : { name, text, number, sessionId: 0 };

    this.FormSubmit.emit(emittedComment);
  }
}
