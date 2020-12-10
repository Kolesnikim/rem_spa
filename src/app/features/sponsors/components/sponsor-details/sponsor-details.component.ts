import { Component, OnInit } from '@angular/core';
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
  public sponsor: Sponsor | null = null;

  constructor(private sponsorsService: SponsorsService, private route: ActivatedRoute, private routeSubscription: Subscription){
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params: Params) => this.getSponsor(Number(params.id)));
  }

  /**
   * Обработать смену id спонсора
   */
  private getSponsor(id: number): void {
    this.sponsorsService.getSponsorInfo(id).subscribe((sponsor: Sponsor) => {
        this.sponsor = sponsor;
    });
  }
}
