import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public visibility = false;
  @Input() urlImage: string;

  constructor() { }

  ngOnInit(): void {}

  /**
   * Обработать событие наведения мыши
   */
  public onMouseOver(): void {
    this.visibility = true;
}
  /**
   * Обработать событие отведения мыши
   */
  public onMouseOut(): void {
    this.visibility = false;
  }
}
