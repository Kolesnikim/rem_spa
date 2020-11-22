import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant-details',
  template: `
  <div>
    <h3>Имя участника</h3>
    <h6>Организация</h6>
    <p>Информация</p>
  </div>
  ` ,
  styleUrls: ['./participant-details.component.scss']
})
export class ParticipantDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
