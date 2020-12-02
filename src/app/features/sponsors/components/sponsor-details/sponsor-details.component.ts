import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sponsor } from '../../models/sponsor.model';
import { SponsorsService} from '../../services/sponsors.service';

@Component({
  selector: 'app-sponsor-details',
  templateUrl: './sponsor-details.component.html' ,
  styleUrls: ['./sponsor-details.component.scss']
})
export class SponsorDetailsComponent implements OnInit {
  public routeSubscription: Subscription;
  public id: number;
  public idConference = 1;
  public sponsor: Sponsor = new Sponsor();

  constructor(private sponsorsService: SponsorsService, private route: ActivatedRoute){
    this.routeSubscription = route.params.subscribe((params: Params) => this.id = Number(params.id));
  }

  ngOnInit(): void {
    if (history.state.data) {
      this.sponsor = history.state.data;
    }
    else {
      this.sponsorsService.getAllSponsorsLogo(this.idConference).subscribe((sponsorsData: Sponsor[]) => {
        const sponsor = sponsorsData.find(el => el.id === this.id);
        if (sponsor) {
          this.sponsor = sponsor;
        }
      });
    }
  }
}
