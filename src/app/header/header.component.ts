import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, AfterViewInit, Renderer2, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `<div class = 'header_container'>
                <div class = 'header_logo'><img src ='#'></div>
                <nav class = 'header_nav'>
                  <ul class = 'nav'>
                    <li *ngFor="let item of menuItems" class = 'nav_item'><a href = '#' class = 'nav_link'>{{item}}</a></li>
                  </ul>
                  <button class = 'language' >{{language}}</button>
                </nav>
            </div>`,
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  menuItems: string[];
  language: string;

  constructor(private renderer: Renderer2) {
    this.language = 'EN';
  }

  ngOnInit(): void {
    this.updateMenuItems();
  }

  updateMenuItems(): void {
    this.menuItems = ['Программа', 'Избранное', 'Партнеры', 'Фотогалерея', 'Документы', 'О приложении'];
  }

}
