import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, AfterViewInit, Renderer2, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { RouteItem, RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-header',
  template: `<div class = 'header_container'>
                <div class = 'header_logo'><a routerLink='/' href='/'><img src ='#'></a></div>
                <nav class = 'header_nav'>
                  <ul class = 'nav'>
                    <li *ngFor="let item of menuItems" class='nav_item'>
                      <a routerLink={{item.Path}} href="{{item.Path}}" class='nav_link'>{{item.Name}}</a>
                    </li>
                  </ul>
                </nav>
            </div>`,
  styleUrls: ['./header.component.less'],
  providers: [RoutingService]
})
export class HeaderComponent implements OnInit {
  menuItems: RouteItem[];
  menuPaths: string[];
  language: string;

  constructor(private routingService: RoutingService) {
  }

  ngOnInit(): void {
    this.updateMenuItems();
  }

  updateMenuItems(): void {
    this.menuItems = this.routingService.getAvailableRoutes();
  }
}
