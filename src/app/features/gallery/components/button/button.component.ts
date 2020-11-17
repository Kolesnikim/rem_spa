import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  visibility = false;
  @Input() urlImage: string;

  constructor() { }

  ngOnInit(): void {}

  onMouseOver(): void {
    this.visibility = true;
}
  onMouseOut(): void {
    this.visibility = false;
  }
}
