import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sponsor } from '../../models/sponsor.model';
import { SponsorsService} from '../../services/sponsors.service';

@Component({
  selector: 'app-sponsor-details',
  template: `
  <div class = 'container'>

    <div class = 'sponsor-details_header'>
        <img class='logo_img' src = {{sponsor.logoUrl}}>
        <p class = 'sponsor-details_type'>{{sponsor.sponsorTypeTag}}</p>
        <h1 class = 'sponsor-details_title'>{{sponsor.title}}  </h1>
        <a href = {{sponsor.webSite}}>
          <mat-icon aria-hidden="false" aria-label="Example home icon">public</mat-icon>
          <span>Веб-сайт</span>
        </a>
    </div>
    <p class = 'sponsor-details_description'>{{sponsor.text}}</p>
  </div>
  ` ,
  styleUrls: ['./sponsor-details.component.scss']
})
export class SponsorDetailsComponent implements OnInit {
  routeSubscription: Subscription;
  id: number;
  idConference: 1;
  sponsors: Sponsor[] = [];
  sponsor: Sponsor = new Sponsor();

  constructor(private sponsorsService: SponsorsService, private route: ActivatedRoute){

    this.routeSubscription = route.params.subscribe((params: Params) => this.sponsor = params.id as Sponsor);

  }

  ngOnInit(): void {
    this.sponsor = history.state.data;

    // this.sponsorsService.getAllSponsorsLogo(this.idConference).subscribe((sponsorsData: Sponsor[]) => {
    //   const sponsor = sponsorsData.find(el => el.id === this.id);
    //   if (sponsor){
    //     this.sponsor = sponsor;
    //   }
    // });

  }

}
