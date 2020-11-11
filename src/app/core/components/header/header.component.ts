import { Component, OnInit} from '@angular/core';
import { AppSettingsService } from '../../services/appSettingsService/appSettings.service';
import { ActiveModule } from '../../models/active.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [AppSettingsService]
})
export class HeaderComponent implements OnInit {
  menuItems: ActiveModule[];
  menuPaths: string[];
  language: string;

  constructor(private routingService: AppSettingsService) {
  }

  ngOnInit(): void {
    this.updateMenuItems();
  }

  updateMenuItems(): void {
    this.menuItems = this.routingService.getAvailableModules();
  }
}
