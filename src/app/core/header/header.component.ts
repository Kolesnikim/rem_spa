import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, AfterViewInit, Renderer2, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import {RoutingService} from '../../routing.service'

@Component({
  selector: 'app-header',
  template: `<div class = 'header_container'>
                <div class = 'header_logo'><img src ='#'></div>
                <nav class = 'header_nav'>
                  <ul class = 'nav'>
                    <li *ngFor="let item of menuItems" class = 'nav_item'>
                      <a href = '#' class = 'nav_link'>{{item}}</a>
                    </li>
                  </ul>
                  <button class = 'language' >{{language}}</button>
                </nav>
            </div>`,
  styleUrls: ['./header.component.less'],  
  providers: [RoutingService]
})
export class HeaderComponent implements OnInit {
  menuItems: string[];
  language: string;

  constructor(private routingService: RoutingService) {
    this.language = 'EN';
  }

  ngOnInit(): void { 
    this.updateMenuItems();
  }

  updateMenuItems(): void {
    this.menuItems = [];
    for (let item of this.routingService.getData()){
      this.menuItems.push(item.Name)
    }
  }

}
