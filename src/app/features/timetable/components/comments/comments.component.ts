import { Component, Input } from '@angular/core';
import { IComment } from '../../interfaces/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})

export class CommentsComponent {
  constructor() {
  }

  @Input() comments: IComment[];
}

