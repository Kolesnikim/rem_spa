import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Participant } from '../../models/participant.model';
import { ParticipantsService } from '../../services/participants.service';
@Component({
  selector: 'app-participant-details',
  template: `
  <div class = 'container'>
    <div class= 'details_header'>
      <h1>{{participant.fullName}}  </h1>
      <h3>{{participant.organizationName}}</h3>
      <p>{{participant.position}}</p>
    </div>
    <div class = 'left_part'>
      <div class = 'avatar_img' [style.backgroundImage]="photoUrl"></div>
     </div>
    <div class = "right_part">
      <p>additionla info:{{participant.additionalInfo}}</p>
      <p>department: {{participant.department}}</p>
      <p>email: {{participant.email}}</p>
      <p>link:{{participant.link}}</p>
      <p>phone:{{participant.phone}}</p>
    </div>
  </div>
  ` ,
  styleUrls: ['./participant-details.component.scss']
})

export class ParticipantDetailsComponent implements OnInit {
  private routeSubscription: Subscription;
  participant: Participant = new Participant();
  id: number;
  photoUrl: string;

  constructor(private participantsServer: ParticipantsService, private route: ActivatedRoute){

    this.routeSubscription = route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.participantsServer.getParticipantById(this.id).subscribe((participant: Participant) => {
      this.participant = participant;
      this.photoUrl = `url(${participant.photoUrl})`;
    });

  }
}
