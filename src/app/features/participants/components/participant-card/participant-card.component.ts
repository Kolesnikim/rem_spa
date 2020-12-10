import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent implements OnInit {
  @Input() participant: Participant | null = null;
  public id = 0;
  public photoUrl = '';

  constructor() {}

  ngOnInit(): void {
    if (this.participant !== null){
      this.id = this.participant.id;
      this.photoUrl = `url(${this.participant.photoUrl})`;
    }
  }

}
