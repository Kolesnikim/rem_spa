import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-participants',
  template:
  `<router-outlet></router-outlet>
  <div class='participans_container'>
    <div class='participans_board'>
      <nav class='participans_nav'>
        <ul class='nav'>
          <li *ngFor="let tag of participantsTag" class='nav_item'>
            <p [class.nav_link] = "true" [class.active] ="tag === activeTag" (click)='onTagChange(tag)'>#{{tag}} </p>
          </li>
        </ul>
      </nav>
    </div>
    <div class='participans_content '>
      <mat-grid-list cols = "3">
        <app-participant-card ></app-participant-card>
      </mat-grid-list>
      <app-participant-details style = " display: 'none' "></app-participant-details>
    </div>
  </div>`,
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  participantsTag: string[] = ['Участники', 'Организаторы'];
  activeTag: string;
  id: number;

  // private routeSubscription: Subscription;

  //   constructor(private route: ActivatedRoute){

  //       this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
  //   }

  ngOnInit(): void {
    this.activeTag = this.participantsTag[0];
  }

  onTagChange(tag: string): void {
    if (this.activeTag === tag) {
      return;
    }
    this.activeTag = tag;
  }

}
