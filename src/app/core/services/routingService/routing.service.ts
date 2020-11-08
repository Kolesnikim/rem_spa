import { Injectable } from '@angular/core';
import { RouteItem } from '../../models/route.item';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  private availableRoutes: RouteItem[] = [
    new RouteItem('Программа', 'timetable'),
    new RouteItem('Избранное', 'favourites'),
    new RouteItem('Фотогаллерея', 'gallery'),
    new RouteItem('Документы', 'documents'),
    new RouteItem('О приложении', 'about')];

  getAvailableRoutes(): RouteItem[] {
    return this.availableRoutes;
  }

  isAvailable(route: string): boolean {
    for (const item of this.availableRoutes){
      if (item.Path === route) {
        return true;
      }
    }

    return false;
  }
}
