import { Component, Input } from '@angular/core';
import { Comment } from '../../interfaces/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent {
  constructor() {
  }

  @Input() comments: Comment[] | undefined = undefined;
}

