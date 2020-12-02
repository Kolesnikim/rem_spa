import { Component, OnInit } from '@angular/core';
import { Sponsor } from './models/sponsor.model';
import { SponsorsService } from './services/sponsors.service';
@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  public idConference = 1;
  public sponsors: Sponsor[];

  constructor(private sponsorsService: SponsorsService) {}

  ngOnInit(): void {
    this.sponsorsService.getAllSponsorsLogo(this.idConference).subscribe((sponsorsData: Sponsor[]) => {
      this.sponsors = sponsorsData;
    });
  }

}
