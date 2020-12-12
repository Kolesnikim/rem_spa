import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sponsor } from '../../models/sponsor.model';
import { SponsorsService} from '../../services/sponsors.service';

@Component({
  selector: 'app-sponsor-details',
  templateUrl: './sponsor-details.component.html' ,
  styleUrls: ['./sponsor-details.component.scss']
})
export class SponsorDetailsComponent implements OnInit {
  public sponsor: Sponsor | null = null;

  constructor(private sponsorsService: SponsorsService, private route: ActivatedRoute){
    this.getSponsor(this.route.snapshot.params.id);
  }

  ngOnInit(): void {
  }

  /**
   * Получить информацию о спонсоре по id
   */
  private getSponsor(id: number): void {
    this.sponsorsService.getSponsorInfo(id).subscribe((sponsor: Sponsor) => {
        this.sponsor = sponsor;
    });
  }
}
