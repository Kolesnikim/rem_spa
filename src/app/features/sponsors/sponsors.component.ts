import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sponsor } from './models/sponsor.model';
import { SponsorsService } from './services/sponsors.service';
@Component({
  selector: 'app-sponsors',
  template: `
    <div class='sponsors_content'>
        <ul class = 'grid_wrapper'>
          <li  *ngFor="let sponsor of sponsors" class='sponsor_item'>
            <a  class='sponsor_logo'
            routerLink="sponsor/{{sponsor.id}}/details"
            [state]="{data: sponsor}">
              <img class='logo_img' src = {{sponsor.logoUrl}}>
            </a>
          </li>
        </ul>
    </div>
  `,
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  idConference: 1;
  sponsors: Sponsor[];

  constructor(private sponsorsService: SponsorsService, router: Router) {}

  // goToComponentB(): void {
  //   this.router.navigate(['sponsor/{{sponsor.id}}/details'], {state: {data: {...}}});
  // }

  ngOnInit(): void {
    this.sponsorsService.getAllSponsorsLogo(this.idConference).subscribe((sponsorsData: Sponsor[]) => {
      this.sponsors = sponsorsData;
    });
  }

}
