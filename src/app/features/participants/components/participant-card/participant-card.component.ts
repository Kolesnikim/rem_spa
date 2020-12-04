import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent implements OnInit {
  @Input() participant: Participant;
  public id: number;
  public photoUrl: string;

  constructor() {}

  ngOnInit(): void {
    this.id = this.participant.id;
    this.photoUrl = `url(${this.participant.photoUrl})`;
  }

}
