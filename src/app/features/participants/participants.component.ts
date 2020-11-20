import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participants',
  template:
  `<div class='participans_container'>
  <div class='participans_board'>
    <nav class='participans_nav'>
      <ul class='nav'>
        <li class='nav_item'>
          <p class ='nav_link'>#Участники </p>
        </li>
        <li class='nav_item'>
          <p class ='nav_link'>#Организаторы </p>
        </li>
      </ul>
    </nav>
  </div>
  <div class='participans_content'>

  </div>
</div>`,
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  tags: string[] = ['Участники', 'Организаторы'];

  constructor() { }

  ngOnInit(): void {
  }

}
