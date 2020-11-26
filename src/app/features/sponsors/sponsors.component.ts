import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  template: `
    <div class='sponsors_content'>
      <div class = 'grid_wrapper'>
        <ul>
          <li>
            <a class='sponsor_logo'></a>
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
