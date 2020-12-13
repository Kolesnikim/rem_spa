import { Component, OnInit } from '@angular/core';
import { LogoSponsor } from './models/logosponsor.model';
import { SponsorsService } from './services/sponsors.service';
@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  private idConference = 1;
  public sponsors: LogoSponsor[] = [];

  constructor(private sponsorsService: SponsorsService) {}

  ngOnInit(): void {
    this.sponsorsService.getAllSponsorsLogo(this.idConference).subscribe((sponsorsData: LogoSponsor[]) => {
      this.sponsors = sponsorsData;
    });
  }

}
