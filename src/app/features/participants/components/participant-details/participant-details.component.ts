import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from '../../models/participant.model';
import { ParticipantsService } from '../../services/participants.service';
@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html' ,
  styleUrls: ['./participant-details.component.scss']
})

export class ParticipantDetailsComponent implements OnInit {
  public participant: Participant | null = null;
  public id = 0;
  public photoUrl = '';
  public visibility = false;


  constructor(private participantsServer: ParticipantsService, private route: ActivatedRoute){
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.participantsServer.getParticipantById(this.id).subscribe((participant: Participant) => {
      this.participant = participant;
      this.photoUrl = `url(${participant.photoUrl})`;
    });

  }

  /**
   * Отображение блока расписания участника
   * @param visibility -boolean
   */
  isVisibilitySession(visibility: boolean): void{
    this.visibility = visibility;
  }

}
