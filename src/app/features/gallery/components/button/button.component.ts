import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<share-buttons
    [style.display]="visibility?'block':'none'"
    [url]='urlImage'
    class="shared-buttons"
    [theme]="'circles-light'"
    [include]="['facebook','twitter','vk']"
    [show]="3"
    [size]="-4"
    [autoSetMeta]="false"
  ></share-buttons>`,
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
