import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, AfterViewInit, Renderer2, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { RoutingService } from '../../services/routingService/routing.service';
import { RouteItem } from '../../models/route.item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
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
